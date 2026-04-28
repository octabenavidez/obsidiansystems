import RevealOnScroll from "../../common/RevealOnScroll";
import InvestmentDeliverables from "./InvestmentDeliverables";
import OptimizationAreas from "./OptimizationAreas";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Investment Plan Card component
 * @param {Object} props - Component properties
 * @param {string} props.title - Plan title
 * @param {string} props.description - Plan description
 * @param {string} props.sectionTitle - Deliverables section title
 * @param {string} props.badge - Badge text
 * @param {Array} props.deliverables - Array of deliverables
 * @param {Object} props.optimizationAreas - Optimization areas data
 * @param {string} props.disclaimer - Disclaimer text
 * @returns {JSX.Element} Rendered investment plan card
 */
const InvestmentPlanCard = ({
  title,
  description,
  sectionTitle,
  badge,
  deliverables,
  optimizationAreas,
  disclaimer,
}) => {
  return (
    <RevealOnScroll
      direction="up"
      delay={ANIMATION_DELAYS.CLIENTS_INVESTMENT_PLAN}
    >
      <div className="mx-auto mt-32 max-w-4xl">
        {/* Title */}
        <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <p className="mb-12 text-center text-base text-gray-400 md:text-lg">
          {description}
        </p>

        {/* Main Card with silver styling */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-black p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] md:p-8">
          {/* Deliverables */}
          <InvestmentDeliverables
            sectionTitle={sectionTitle}
            badge={badge}
            deliverables={deliverables}
          />

          {/* Optimization Areas */}
          <OptimizationAreas
            title={optimizationAreas.title}
            areas={optimizationAreas.areas}
          />

          {/* Disclaimer */}
          <p className="mt-6 text-center text-sm text-gray-400 md:text-base">
            {disclaimer}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default InvestmentPlanCard;
