import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Silver gradient style for highlighted text
 */
const silverGradientStyle = {
  fontWeight: "bold",
  background: "var(--color-silver-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Hero Subheadline component with gold gradient highlighted text
 * @param {Object} props - Component properties
 * @param {string} props.line1Start - Start text before the highlight
 * @param {string} props.highlight - Highlighted revenue text
 * @param {string} props.line1End - Remaining text after the highlight
 * @returns {JSX.Element} Rendered subheadline component
 */
const HeroSubheadline = ({ line1Start, highlight, line1End }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_SUBHEADLINE}>
      <p className="font-apple-garamond mx-auto max-w-[1190px] text-center text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
        {line1Start}
        <span style={silverGradientStyle}>{highlight}</span>
        <br />
        {line1End}
      </p>
    </RevealOnScroll>
  );
};

export default HeroSubheadline;
