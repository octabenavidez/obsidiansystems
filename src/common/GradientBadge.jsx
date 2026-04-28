/**
 * Gradient Badge component with customizable border gradient
 * @param {Object} props - Component properties
 * @param {string} props.children - Text content of the badge
 * @param {('gold'|'silver')} [props.variant='silver'] - Gradient variant (gold or silver)
 * @param {string} [props.className] - Additional CSS classes for the inner span
 * @returns {JSX.Element} Rendered gradient badge
 */
const GradientBadge = ({ children, variant = "silver", className = "" }) => {
  // Determine gradient based on variant
  const borderGradient =
    variant === "gold"
      ? "var(--color-gold-gradient)"
      : "var(--color-silver-gradient)";

  return (
    <div
      className="rounded-full p-[2px]"
      style={{
        background: borderGradient,
      }}
    >
      <span
        className={`text-md block rounded-full bg-[#0a0a0a] px-4 py-2 leading-relaxed font-normal text-white/80 italic ${className}`}
      >
        {children}
      </span>
    </div>
  );
};

export default GradientBadge;
