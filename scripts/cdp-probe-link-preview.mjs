// Probe: does LinkedIn attach its link/video preview card when text containing
// a URL is inserted programmatically? Tries (1) one-shot insert, (2) typing a
// trailing space, (3) typing the URL character by character. Read-only —
// discards the draft, never posts.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const VIDEO_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// Optional override for phase 1's inserted text (e.g. to test the exporter's
// "label (url)" format). Phases 2/3 still use VIDEO_URL.
const PHASE1_TEXT = process.argv[2] ?? `Check this video ${VIDEO_URL} - probe draft.`;

const bundleDir = mkdtempSync(join(tmpdir(), 'lipf-preview-'));
const bundlePath = join(bundleDir, 'composer-bundle.js');

try {
  execFileSync(
    'node',
    [
      'node_modules/esbuild/bin/esbuild',
      'src/extension/linkedinComposer.ts',
      '--bundle',
      '--format=iife',
      '--global-name=__LIPF_COMPOSER',
      `--outfile=${bundlePath}`,
    ],
    { stdio: 'inherit' },
  );

  const bundle = readFileSync(bundlePath, 'utf8');
  const targets = await (await fetch('http://127.0.0.1:9222/json/list')).json();
  const target = targets.find((candidate) => candidate.type === 'page' && candidate.url.includes('linkedin.com'));

  if (!target) {
    console.error('No LinkedIn page target found.');
    process.exit(1);
  }

  const socket = new WebSocket(target.webSocketDebuggerUrl);
  let nextId = 0;

  function call(method, params = {}) {
    return new Promise((resolve, reject) => {
      const message = { id: ++nextId, method, params };

      function handleMessage(event) {
        const data = JSON.parse(event.data);

        if (data.id !== message.id) {
          return;
        }

        socket.removeEventListener('message', handleMessage);
        data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result);
      }

      socket.addEventListener('message', handleMessage);
      socket.send(JSON.stringify(message));
    });
  }

  async function evaluate(expression) {
    const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });

    if (result.exceptionDetails) {
      throw new Error(JSON.stringify(result.exceptionDetails));
    }

    return result.result.value;
  }

  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  await new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  await call('Runtime.enable');
  await call('Page.enable');
  await call('Page.bringToFront').catch(() => {});
  await call('Page.setWebLifecycleState', { state: 'active' }).catch(() => {});
  await call('Page.navigate', { url: 'https://www.linkedin.com/feed/' });
  await sleep(4000);
  await call('Page.navigate', { url: 'https://www.linkedin.com/feed/?shareActive=true' });
  await sleep(5000);
  await call('Page.setWebLifecycleState', { state: 'active' }).catch(() => {});

  await evaluate(`${bundle}; true`);

  let composerReady = false;

  for (let attempt = 0; attempt < 60 && !composerReady; attempt += 1) {
    composerReady = await evaluate(`Boolean(__LIPF_COMPOSER.findLinkedInComposer())`);

    if (!composerReady) {
      await sleep(500);
    }
  }

  console.log('composer ready:', composerReady);

  if (!composerReady) {
    process.exit(1);
  }

  // Snapshot helper: looks for anything preview-like inside the composer dialog.
  await evaluate(String.raw`(() => {
    window.__lipfPreviewProbe = () => {
      const dialog = __LIPF_COMPOSER.findNativeComposerDialog();
      if (!dialog) return { dialog: false };
      const candidates = Array.from(dialog.querySelectorAll('*')).filter((element) => {
        const cls = String(element.className ?? '');
        return /preview|article|url|link-?card|entity-card/i.test(cls) && !/typeahead/i.test(cls);
      });
      const removeButtons = Array.from(dialog.querySelectorAll('button, [role="button"]')).filter((control) => {
        const label = ((control.getAttribute('aria-label') ?? '') + ' ' + (control.textContent ?? '')).toLowerCase();
        return label.includes('remove') || label.includes('preview');
      });
      const media = Array.from(dialog.querySelectorAll('iframe, img')).filter((element) => {
        const rect = element.getBoundingClientRect();
        const src = element.getAttribute('src') ?? '';
        return rect.width > 60 && rect.height > 60 && !src.includes('profile');
      });
      return {
        dialog: true,
        finderResult: Boolean(__LIPF_COMPOSER.findLinkedInLinkPreview?.()),
        candidateClasses: [...new Set(candidates.map((element) => String(element.className).slice(0, 90)))].slice(0, 10),
        removeButtons: removeButtons.map((control) => (control.getAttribute('aria-label') ?? control.textContent ?? '').trim().slice(0, 60)),
        media: media.map((element) => ({ tag: element.tagName, src: (element.getAttribute('src') ?? '').slice(0, 90) })),
        dialogTextTail: (dialog.textContent ?? '').replace(/\s+/g, ' ').slice(-160),
      };
    };
    return true;
  })()`);

  async function pollPreview(label, timeoutMs) {
    const deadline = Date.now() + timeoutMs;
    let last = null;

    while (Date.now() < deadline) {
      last = await evaluate(`window.__lipfPreviewProbe()`);

      if ((last.candidateClasses?.length ?? 0) > 0 || (last.media?.length ?? 0) > 0) {
        console.log(`[${label}] PREVIEW DETECTED:`, JSON.stringify(last, null, 2));
        return true;
      }

      await sleep(700);
    }

    console.log(`[${label}] no preview. Last probe:`, JSON.stringify(last, null, 2));
    return false;
  }

  // Phase 1: one-shot insert (what the post bridge does today).
  await evaluate(`(() => {
    const composer = __LIPF_COMPOSER.findLinkedInComposer();
    return __LIPF_COMPOSER.setLinkedInComposerText(composer, ${JSON.stringify(PHASE1_TEXT)});
  })()`);
  let detected = await pollPreview('one-shot insert', 8000);

  // Phase 2: type a trailing space (URL boundary keystroke).
  if (!detected) {
    await evaluate(String.raw`(() => {
      const composer = __LIPF_COMPOSER.findLinkedInComposer();
      composer.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(composer);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      composer.dispatchEvent(new InputEvent('beforeinput', { bubbles: true, cancelable: true, composed: true, data: ' ', inputType: 'insertText' }));
      document.execCommand('insertText', false, ' ');
      composer.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, data: ' ', inputType: 'insertText' }));
      return true;
    })()`);
    detected = await pollPreview('trailing space typed', 8000);
  }

  // Phase 3: clear, then type the URL character by character.
  if (!detected) {
    await evaluate(String.raw`(async () => {
      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const composer = __LIPF_COMPOSER.findLinkedInComposer();
      __LIPF_COMPOSER.setLinkedInComposerText(composer, 'Typed url probe: ');
      composer.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(composer);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);

      for (const char of '${VIDEO_URL} ') {
        composer.dispatchEvent(new InputEvent('beforeinput', { bubbles: true, cancelable: true, composed: true, data: char, inputType: 'insertText' }));
        document.execCommand('insertText', false, char);
        composer.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true, data: char, inputType: 'insertText' }));
        await sleep(30);
      }
      return true;
    })()`);
    detected = await pollPreview('typed per-char', 10000);
  }

  // Cleanup: discard the draft.
  const discarded = await evaluate(`(async () => {
    const deadline = Date.now() + 8000;
    while (Date.now() < deadline) {
      __LIPF_COMPOSER.closeNativeLinkedInComposer();
      __LIPF_COMPOSER.dismissNativeComposerDiscardConfirmation();
      if (!__LIPF_COMPOSER.findNativeComposerDialog()) return true;
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    return !__LIPF_COMPOSER.findNativeComposerDialog();
  })()`);
  console.log('draft discarded:', discarded);
  socket.close();
  process.exit(0);
} finally {
  rmSync(bundleDir, { recursive: true, force: true });
}
