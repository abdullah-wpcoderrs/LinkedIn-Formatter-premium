import { describe, expect, it } from 'vitest';

import { isFeedCutoffLikely } from './feedPreview';

describe('isFeedCutoffLikely', () => {
  it('does not truncate short feed text', () => {
    expect(isFeedCutoffLikely('Short hook.\n\nOne follow-up line.', 'desktop')).toBe(false);
    expect(isFeedCutoffLikely('Short hook.', 'mobile')).toBe(false);
  });

  it('uses narrower mobile wrapping when estimating cutoff', () => {
    const text = 'A'.repeat(180);

    expect(isFeedCutoffLikely(text, 'desktop')).toBe(false);
    expect(isFeedCutoffLikely(text, 'mobile')).toBe(true);
  });

  it('counts explicit blank lines toward the feed cutoff', () => {
    expect(isFeedCutoffLikely('Line one\n\nLine three\nLine four', 'desktop')).toBe(true);
  });
});