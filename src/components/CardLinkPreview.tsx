import { useState } from 'react';

import { faviconUrl, hostnameOf, type Attachment, type LinkPreview } from '../lib/media';
import type { PlatformSpec } from '../lib/platforms/types';
import { PLATFORM_ICONS } from './platformIcons';

interface CardLinkPreviewProps {
  url: string;
  preview?: LinkPreview;
  spec: PlatformSpec;
}

interface CardImagePreviewProps {
  image: Attachment;
  spec: PlatformSpec;
}

// Renders a detected URL as the unfurl card this platform would show — mirroring
// each platform's real layout (large hero vs compact thumbnail, with/without the
// description). Purely illustrative: it does not affect the copied text or
// character count.
export function CardLinkPreview({ url, preview, spec }: CardLinkPreviewProps) {
  const style = spec.linkPreview;

  if (!style || !url) {
    return null;
  }

  return <LinkCard url={url} preview={preview} spec={spec} showDescription={style.showDescription} layout={style.layout} />;
}

export function CardImagePreview({ image, spec }: CardImagePreviewProps) {
  if (image.kind !== 'image' || !image.objectUrl) {
    return null;
  }

  return (
    <div className={`card-image-preview is-${spec.id}`} aria-label={`${spec.label} image preview`}>
      <img src={image.objectUrl} alt={image.name} />
    </div>
  );
}

interface LinkCardProps {
  url: string;
  preview?: LinkPreview;
  spec: PlatformSpec;
  showDescription: boolean;
  layout: 'large' | 'thumbnail';
}

function LinkCard({ url, preview, spec, showDescription, layout }: LinkCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const Icon = PLATFORM_ICONS[spec.id];
  const domain = hostnameOf(url);
  const loading = !preview || preview.status === 'loading';

  const title = preview?.title || domain;
  const description = showDescription ? preview?.description : undefined;
  const imageUrl = !imageFailed ? preview?.imageUrl : undefined;
  const logo = preview?.logoUrl || faviconUrl(url);

  return (
    <a
      className={`card-link-preview is-${layout} is-${spec.id}${loading ? ' is-loading' : ''}`}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${spec.label} link preview: ${title}`}
    >
      <div className="card-link-preview-media">
        {loading ? (
          <span className="card-link-preview-skeleton" aria-hidden="true" />
        ) : imageUrl ? (
          <img src={imageUrl} alt="" loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span className="card-link-preview-placeholder" style={{ color: spec.brandColor }}>
            <Icon size={layout === 'large' ? 26 : 20} />
          </span>
        )}
      </div>
      <div className="card-link-preview-body">
        <span className="card-link-preview-title">{title}</span>
        {description ? <span className="card-link-preview-desc">{description}</span> : null}
        <span className="card-link-preview-domain">
          {logoFailed ? null : (
            <img
              className="card-link-preview-favicon"
              src={logo}
              alt=""
              width={14}
              height={14}
              onError={() => setLogoFailed(true)}
            />
          )}
          {domain}
        </span>
      </div>
    </a>
  );
}
