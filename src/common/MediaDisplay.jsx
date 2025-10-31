/**
 * MediaDisplay
 *
 * Reusable media component for displaying images or videos with consistent styling.
 * Designed for flexibility, responsive layouts, and future scalability.
 *
 * Usage:
 *
 * // Image Example
 * <MediaDisplay
 *   src="/src/assets/images/hero-banner.jpg"
 *   alt="Hero banner"
 *   type="image"
 * />
 *
 * // Video Example
 * <MediaDisplay
 *   src="/src/assets/video/intro.mp4"
 *   type="video"
 *   controls
 * />
 *
 * Props:
 * @param {string} src - The source path or URL of the media.
 * @param {"image" | "video"} [type="image"] - Determines the type of media.
 * @param {string} [alt=""] - Alternative text for images.
 * @param {string} [className=""] - Custom class names for styling.
 * @param {string} [height="h-[600px]"] - Tailwind height class for container.
 * @param {string} [rounded="rounded-2xl"] - Tailwind border-radius class.
 * @param {boolean} [autoPlay=true] - Autoplay for videos.
 * @param {boolean} [loop=true] - Loop for videos.
 * @param {boolean} [muted=true] - Mute video by default.
 * @param {boolean} [controls=false] - Show video player controls.
 *
 * @example
 * <MediaDisplay src="example.mp4" type="video" controls />
 */

const MediaDisplay = ({
  src,
  type = "image", // "image" | "video"
  alt = "",
  className = "",
  height = "h-[600px]",
  rounded = "rounded-2xl",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  ...props
}) => {
  if (!src) {
    console.warn("[MediaDisplay]: Missing `src` prop.");
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${rounded} ${height} ${className}`}
      {...props}
    >
      {type === "video" ? (
        <video
          src={src}
          className={`w-full h-full object-cover ${rounded}`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline
          aria-hidden={!alt}
        />
      ) : (
        <img
          src={src}
          alt={alt || "Media content"}
          className={`w-full h-full object-cover ${rounded}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default MediaDisplay;
