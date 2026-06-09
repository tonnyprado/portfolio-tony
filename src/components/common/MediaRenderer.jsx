import { isVideoPath } from '../../utils/assets';

/**
 * Renders image or video based on file path
 * Handles autoplay and loop for videos
 */
export function MediaRenderer({
  src,
  alt = '',
  className = '',
  videoProps = {},
  imageProps = {}
}) {
  if (!src) return null;

  if (isVideoPath(src)) {
    return (
      <video
        className={className}
        autoPlay
        loop
        muted
        playsInline
        {...videoProps}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      {...imageProps}
    />
  );
}

export default MediaRenderer;
