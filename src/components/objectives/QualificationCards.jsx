import { Check } from "lucide-react";
import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Qualification Card component (positive or negative)
 * @param {Object} props - Component properties
 * @param {string} props.title - Card title
 * @param {string[]} props.items - List of items
 * @param {'positive'|'negative'} props.variant - Card variant
 * @returns {JSX.Element} Rendered qualification card
 */
const QualificationCard = ({ title, items, variant = "positive" }) => {
  const isPositive = variant === "positive";

  const styles = isPositive
    ? {
        border: "border-[#34d399]/20",
        gradient: "from-[#34d399]/10",
        hover: "hover:border-[#34d399]/40",
        glow: "bg-[#34d399]/10 group-hover:bg-[#34d399]/20",
        glowSecondary: "bg-[#34d399]/5",
        topLine: "from-transparent via-[#34d399]/50 to-transparent",
        iconBg: "bg-[#34d399]/20",
        iconBorder: "border-[#34d399]/30",
        iconShadow: "shadow-[#34d399]/20",
        titleColor: "text-[#34d399]",
        itemBg: "bg-[#34d399]/20 group-hover/item:bg-[#34d399]/30",
        itemHover: "hover:bg-[#34d399]/5",
      }
    : {
        border: "border-red-500/20",
        gradient: "from-red-500/10",
        hover: "hover:border-red-500/40",
        glow: "bg-red-500/10 group-hover:bg-red-500/20",
        glowSecondary: "bg-red-400/5",
        topLine: "from-transparent via-red-500/50 to-transparent",
        iconBg: "bg-red-500/20",
        iconBorder: "border-red-500/30",
        iconShadow: "shadow-red-500/20",
        titleColor: "text-red-400",
        itemBg: "bg-red-500/20 group-hover/item:bg-red-500/30",
        itemHover: "hover:bg-red-500/5",
      };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border ${styles.border} bg-gradient-to-br ${styles.gradient} to-transparent p-8 backdrop-blur-sm transition-all duration-500 ${styles.hover}`}
    >
      {/* Decorative Elements */}
      <div
        className={`pointer-events-none absolute top-0 ${isPositive ? "right-0" : "left-0"} h-32 w-32 rounded-full ${styles.glow} blur-2xl transition-all duration-500`}
      ></div>
      <div
        className={`pointer-events-none absolute ${isPositive ? "bottom-0 left-0" : "right-0 bottom-0"} h-24 w-24 rounded-full ${styles.glowSecondary} blur-xl`}
      ></div>
      <div
        className={`absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r ${styles.topLine}`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${styles.iconBorder} ${styles.iconBg} shadow-lg ${styles.iconShadow}`}
          >
            {isPositive ? (
              <Check className={`h-7 w-7 ${styles.titleColor}`} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-7 w-7 ${styles.titleColor}`}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m15 9-6 6"></path>
                <path d="m9 9 6 6"></path>
              </svg>
            )}
          </div>
          <div>
            <h3
              className={`text-3xl font-bold ${styles.titleColor} md:text-4xl`}
            >
              {title}
            </h3>
          </div>
        </div>

        <ul className="space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className={`group/item flex items-start gap-3 rounded-lg p-2 transition-colors ${styles.itemHover}`}
            >
              <div
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${styles.itemBg} transition-colors`}
              >
                {isPositive ? (
                  <Check
                    className={`h-4 w-4 ${styles.titleColor} transition-transform group-hover/item:scale-110`}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 ${styles.titleColor} transition-transform group-hover/item:scale-110`}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                )}
              </div>
              <span className="text-base text-gray-300 transition-colors group-hover/item:text-white md:text-lg">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * Qualification Cards component showing positive and negative criteria
 * @param {Object} props - Component properties
 * @param {Object} props.positive - Positive criteria data
 * @param {Object} props.negative - Negative criteria data
 * @param {Object} props.footerMessage - Footer message data
 * @returns {JSX.Element} Rendered qualification cards
 */
const QualificationCards = ({ positive, negative, footerMessage }) => {
  return (
    <RevealOnScroll
      direction="up"
      delay={ANIMATION_DELAYS.OBJECTIVES_QUALIFICATION}
    >
      <div className="mx-auto my-20">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <QualificationCard
            title={positive.title}
            items={positive.items}
            variant="positive"
          />
          <QualificationCard
            title={negative.title}
            items={negative.items}
            variant="negative"
          />
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400 md:text-lg">
            {footerMessage.text}{" "}
            <span className="font-semibold text-[#34d399]">
              {footerMessage.highlight}
            </span>
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default QualificationCards;
