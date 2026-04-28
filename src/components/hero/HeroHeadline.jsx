import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Silver gradient text style for money amounts
 */
const silverGradientStyle = {
  fontWeight: "bold",
  background: "var(--color-silver-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Hero Headline component displaying main headline with 3 lines
 * Money amounts ($20K, $54K) have a gold gradient effect
 * @param {Object} props - Component properties
 * @param {string} props.line1 - First line
 * @param {string} props.line2 - Second line
 * @returns {JSX.Element} Rendered headline component
 */
const HeroHeadline = ({ line1, line2 }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_HEADLINE}>
      <h1 className="mx-auto max-w-[1500px] text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] text-white md:text-5xl lg:text-[52px]">
        {/* Line 1 */}
        <span className="block">{line1}</span>
        {/* Line 2 */}
        <span className="block">{line2}</span>
      </h1>
    </RevealOnScroll>
  );
};

export default HeroHeadline;
