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
 * Horizontal Testimonial Card component
 * @param {Object} props - Component properties
 * @param {string} props.name - Testimonial author name
 * @param {string} props.videoId - Wistia video ID
 * @param {Array} props.achievements - Array of achievements
 * @param {number} props.index - Card index for animation
 * @returns {JSX.Element} Rendered horizontal testimonial card
 */
const HorizontalTestimonialCard = ({ name, videoId, achievements, index }) => {
  return (
    <RevealOnScroll
      direction={index % 2 === 0 ? "left" : "right"}
      delay={0.15 * (index + 1)}
    >
      <div
        className="rounded-[16px] p-[2px] transition-all duration-500 hover:shadow-lg hover:shadow-white/5"
        style={{ background: silverGradientBorder }}
      >
        <div
          className="group relative flex h-full flex-col overflow-hidden rounded-[14px] p-5"
          style={{ background: cardBackgroundGradient }}
        >
          {/* Title */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              {name}
            </h3>
            <div
              className="h-0.5 flex-1 rounded-full opacity-70"
              style={{ background: silverGradientBorder }}
            />
          </div>

          {/* Video */}
          <div className="mt-4 flex-1" style={{ minWidth: 0 }}>
            <div className="relative w-full overflow-hidden rounded-xl bg-zinc-800/70 p-[1px] shadow-2xl">
              <iframe
                src={`https://fast.wistia.net/embed/iframe/${videoId}?seo=false&videoFoam=true`}
                title={`Testimonio de ${name}`}
                allow="autoplay; fullscreen"
                className="aspect-video h-full w-full rounded-[10px]"
                style={{
                  border: "none",
                  maxWidth: "100%",
                  width: "100%",
                }}
              ></iframe>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-4 space-y-3 rounded-xl bg-zinc-900/60 p-4 ring-1 ring-white/10">
            {achievements.map((achievement, i) => (
              <p
                key={i}
                className="flex items-start gap-3 text-sm leading-6 text-zinc-100 italic md:text-base"
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
            className="pointer-events-none absolute inset-0 rounded-[14px] opacity-0 transition-opacity duration-500 group-hover:opacity-40"
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

export default HorizontalTestimonialCard;
