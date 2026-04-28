import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Pain Points Grid component
 * Displays a grid of customer pain points with hover effects
 * @param {Object} props - Component properties
 * @param {Array<{title: string, description: string}>} props.painPoints - Array of pain point objects
 * @returns {JSX.Element} Rendered pain points grid
 */
const PainPointsGrid = ({ painPoints }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.ABOUT_PAIN_POINTS}>
      <div className="mx-auto mt-10 grid gap-5 md:grid-cols-2">
        {painPoints.map((point) => (
          <div
            key={point.title}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 text-left transition-all duration-300 hover:border-[#aca377]/60 hover:shadow-[0_0_30px_rgba(172,163,119,0.25)]"
          >
            <div className="flex items-center gap-4">
              <div>
                <p className="text-lg font-semibold text-white">
                  {point.title}
                </p>
                <div className="mt-1 h-0.5 w-12 rounded-full bg-[#aca377]/70 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-200">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
};

export default PainPointsGrid;
