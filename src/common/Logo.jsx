/**
 * Logo component - reusable across the site
 * @param {Object} props - Component properties
 * @param {string} props.src - Logo image source
 * @param {string} props.alt - Logo alt text
 * @param {string} props.link - Link URL (optional)
 * @param {string} props.className - Additional CSS classes (unused, kept for API compat)
 * @param {boolean} props.showAnimation - Whether to wrap in RevealOnScroll
 * @returns {JSX.Element} Rendered logo component
 */
import RevealOnScroll from "./RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

const Logo = ({
  src,
  alt = "Consulting OS™",
  link,
  className = "",
  showAnimation = true,
}) => {
  /**
   * The PNG is a square image (500×500) where the wordmark text
   * occupies roughly the center ~20% vertically.
   * We clip it with overflow:hidden so only the text strip is visible,
   * giving the logo a wide-and-short appearance.
   */
  const logoImage = (
    <div
      style={{
        width: "220px",
        height: "44px",
        overflow: "hidden",
        position: "relative",
      }}
      role="img"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "220px",
          height: "auto",
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );

  const logoContent = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-80"
      aria-label="Visit Consulting OS™"
    >
      {logoImage}
    </a>
  ) : (
    logoImage
  );

  if (showAnimation) {
    return (
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_LOGO}>
        <div className="flex justify-center">{logoContent}</div>
      </RevealOnScroll>
    );
  }

  return <div className="flex justify-center">{logoContent}</div>;
};

export default Logo;
