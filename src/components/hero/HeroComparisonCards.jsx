import { Check } from "lucide-react";
import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Individual comparison card component
 * @param {Object} props - Component properties
 * @param {string} props.title - Card title
 * @param {string[]} props.items - Array of items to display
 * @param {string} props.variant - Card variant ('negative' or 'positive')
 * @returns {JSX.Element} Rendered comparison card
 */
const ComparisonCard = ({ title, items, variant = "positive" }) => {
  const isNegative = variant === "negative";

  const cardStyles = isNegative
    ? "border-red-900/30 bg-gradient-to-br from-red-950/30 to-black shadow-[0_0_30px_rgba(239,68,68,0.12)] hover:border-red-400/60 hover:shadow-[0_12px_40px_rgba(239,68,68,0.25)]"
    : "border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black shadow-[0_0_30px_rgba(172,163,119,0.18)] hover:border-[#e5dcb6]/70 hover:shadow-[0_12px_40px_rgba(172,163,119,0.25)]";

  const titleColor = isNegative ? "text-red-400" : "text-[#aca377]";

  const hoverGradient = isNegative
    ? "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.12), transparent 35%)"
    : "radial-gradient(circle at 80% 20%, rgba(172,163,119,0.15), transparent 35%)";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${cardStyles}`}
    >
      {/* Hover gradient effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: hoverGradient }}
      />

      {/* Title */}
      <h3 className={`mb-4 text-left text-2xl font-semibold ${titleColor}`}>
        {title}
      </h3>

      {/* Items */}
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-lg p-2 transition-all duration-300"
        >
          {/* Icon */}
          {isNegative ? (
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/30 transition-all duration-300 group-hover:ring-red-400/60">
              <span className="text-base leading-none font-bold text-red-400">
                ✕
              </span>
            </div>
          ) : (
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#aca377]/20 ring-1 ring-[#aca377]/30 transition-all duration-300 group-hover:ring-[#e5dcb6]/80">
              <Check className="h-4 w-4 text-[#aca377]" />
            </div>
          )}

          {/* Text */}
          <p
            className={`pt-0.5 text-left text-lg leading-relaxed transition-colors duration-300 ${
              isNegative
                ? "text-gray-200 group-hover:text-white"
                : "font-medium text-white group-hover:text-[#f4edd3]"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

/**
 * Hero Comparison Cards component showing what the service is and isn't
 * @param {Object} props - Component properties
 * @param {string[]} props.notWhatItIs - Array of items describing what it's not
 * @param {string[]} props.whatItIs - Array of items describing what it is
 * @returns {JSX.Element} Rendered comparison cards
 */
const HeroComparisonCards = ({ notWhatItIs, whatItIs }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_COMPARISON}>
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ComparisonCard
          title="Esto NO es:"
          items={notWhatItIs}
          variant="negative"
        />
        <ComparisonCard
          title="Esto SI es:"
          items={whatItIs}
          variant="positive"
        />
      </div>
    </RevealOnScroll>
  );
};

export default HeroComparisonCards;
