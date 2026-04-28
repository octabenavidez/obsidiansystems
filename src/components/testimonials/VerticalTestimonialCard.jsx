import RevealOnScroll from "../../common/RevealOnScroll";

/**
 * Silver gradient for borders
 */
const silverGradientBorder =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Card background gradient
 */
const cardBackgroundGradient =
  "linear-gradient(90deg, #0b0b0b, #1c1c1c, #0b0b0b)";

/**
 * Renders achievement text with optional highlighting
 * @param {string|Object} achievement - Achievement text or object with text and highlight
 * @returns {JSX.Element} Rendered achievement
 */
const renderAchievement = (achievement) => {
  if (typeof achievement === "string") {
    return <span className="text-gray-300">{achievement}</span>;
  }
  return (
    <>
      <span className="text-gray-300">{achievement.text}</span>
      <span className="text-white font-medium">{achievement.highlight}</span>
    </>
  );
};

/**
 * Vertical Testimonial Card component
 * @param {Object} props - Component properties
 * @param {string} props.name - Testimonial author name
 * @param {string} props.videoId - Wistia video ID
 * @param {Array} props.achievements - Array of achievements
 * @param {number} props.index - Card index for animation
 * @returns {JSX.Element} Rendered vertical testimonial card
 */
const VerticalTestimonialCard = ({ name, videoId, achievements, index }) => {
  return (
    <RevealOnScroll
      direction={index % 2 === 0 ? "left" : "right"}
      delay={0.15 * (index + 1)}
    >
      <div
        className="rounded-[12px] p-[2px] transition-all duration-500 hover:shadow-lg hover:shadow-white/5"
        style={{ background: silverGradientBorder }}
      >
        <div
          className="group relative flex h-full flex-col overflow-hidden rounded-[10px] p-3"
          style={{ background: cardBackgroundGradient }}
        >
          {/* Title - Fixed height with truncation */}
          <div className="flex h-5 items-center justify-between gap-2">
            <h3 className="truncate text-xs font-bold tracking-tight text-white">
              {name}
            </h3>
            <div
              className="h-0.5 min-w-8 flex-1 rounded-full opacity-70"
              style={{ background: silverGradientBorder }}
            />
          </div>

          {/* Video */}
          <div className="mt-2 flex-1" style={{ minWidth: 0 }}>
            <div className="relative w-full overflow-hidden rounded-xl p-[1.5px] shadow-2xl">
              <div className="relative aspect-9/16 overflow-hidden rounded-[10px] bg-black">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=false&videoFoam=true&fitStrategy=cover`}
                  title={`Testimonio de ${name}`}
                  allow="autoplay; fullscreen"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    border: "none",
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-2 space-y-2 rounded-xl bg-zinc-900/60 p-2 ring-1 ring-white/10">
            {achievements.map((achievement, idx) => (
              <p
                key={idx}
                className="flex items-start gap-2 text-xs leading-5 text-zinc-200 italic"
              >
                <span
                  className="mt-2 inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: silverGradientBorder }}
                />
                <span className="flex-1">
                  "{renderAchievement(achievement)}"
                </span>
              </p>
            ))}
          </div>

          {/* Hover Effect */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-500 group-hover:opacity-40"
            style={{
              background:
                "radial-gradient(600px 200px at 10% 10%, rgba(255,255,255,0.08), transparent 40%)",
            }}
          />
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default VerticalTestimonialCard;
