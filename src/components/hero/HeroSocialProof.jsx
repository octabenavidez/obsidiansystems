import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Silver/platinum gradient style for highlighted text
 */
const silverGradientStyle = {
  background:
    "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  fontWeight: "bold",
};

/**
 * Hero Social Proof component displaying avatars and rating
 * @param {Object} props - Component properties
 * @param {string[]} props.avatars - Array of avatar image URLs
 * @param {number} props.rating - Rating value (1-5)
 * @param {string} props.ratingText - Rating text to display
 * @param {string} props.handle - Social media handle
 * @returns {JSX.Element} Rendered social proof component
 */
const HeroSocialProof = ({ avatars, rating, ratingText, handle }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_SOCIAL_PROOF}>
      <div className="-mt-4 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2">
        {/* Avatars */}
        <div className="flex items-center justify-center gap-0.5">
          {avatars.map((src, i) => (
            <img
              key={`avatar-${i}`}
              src={src}
              alt={`Client testimonial avatar ${i + 1}`}
              className="h-10 w-10 rounded-full border-2 border-black/40 object-cover"
              loading="lazy"
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center justify-center md:items-start md:px-2">
          <span
            className="text-[15px] font-bold text-[#9b9b9b]"
            aria-label={`${rating} out of 5 stars`}
            role="img"
          >
            {"★".repeat(rating)}
          </span>
          <p
            className="text-[12px] font-bold tracking-tight"
            style={silverGradientStyle}
          >
            {ratingText}
          </p>
          <p className="text-[11px] font-bold" style={silverGradientStyle}>
            {handle}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default HeroSocialProof;
