import RevealOnScroll from "../../common/RevealOnScroll";
import ScheduleCallButton from "../../common/ScheduleCallButton";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Individual Step Card component
 * @param {Object} props - Component properties
 * @param {string} props.number - Step number
 * @param {string} props.label - Step label (TÚ, YO, JUNTOS)
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {number} props.index - Step index for connector line
 * @param {number} props.totalSteps - Total number of steps
 * @returns {JSX.Element} Rendered step card
 */
const StepCard = ({ number, label, title, description, index, totalSteps }) => {
  const isLast = index === totalSteps - 1;

  return (
    <div className="group relative">
      {/* Connector Lines */}
      {!isLast && (
        <>
          {/* Mobile: Vertical connector */}
          <div className="absolute top-[100px] left-1/2 hidden h-[calc(100%+16px)] w-1 -translate-x-1/2 bg-gradient-to-b from-[#aca377] to-zinc-800 md:hidden"></div>
          {/* Desktop: Horizontal connector */}
          <div className="absolute top-[70px] left-[75px] hidden h-[calc(100%+32px)] w-1 bg-gradient-to-b from-[#aca377] to-zinc-800 md:block"></div>
        </>
      )}

      {/* Mobile Layout */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {/* Number Badge */}
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-transform duration-500 group-hover:scale-110">
          <span className="text-center text-4xl font-black text-black">
            {number}
          </span>
        </div>

        {/* Content Card */}
        <div className="w-full rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-500 group-hover:border-[#aca377] group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
          <div className="mb-3 text-center">
            <span className="text-lg font-bold text-[#aca377]">{label}</span>
          </div>
          <h3 className="mb-4 text-center text-2xl font-bold text-white">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden items-start gap-8 md:flex">
        <div className="relative flex h-[140px] w-[150px] shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-transform duration-500 group-hover:scale-110">
          <span className="px-4 text-center text-5xl font-black text-black">
            {number}
          </span>
        </div>

        <div className="flex-1 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-500 group-hover:border-[#aca377] group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
          <h3 className="mb-4 text-3xl font-bold text-white">
            <span className="mr-3 text-[#aca377]">{label}</span>
            <span className="text-gray-100">{title}</span>
          </h3>
          <p className="text-lg leading-relaxed text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Next Steps Timeline component
 * @param {Object} props - Component properties
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {Array} props.steps - Array of step data
 * @param {string} props.ctaUrl - CTA button URL
 * @returns {JSX.Element} Rendered next steps timeline
 */
const NextStepsTimeline = ({ title, subtitle, steps, ctaUrl }) => {
  return (
    <div className="space-y-10 pt-28">
      <RevealOnScroll
        direction="up"
        delay={ANIMATION_DELAYS.OBJECTIVES_NEXT_STEPS_TITLE}
      >
        <div>
          {/* Header */}
          <div className="mb-16 space-y-6 text-center">
            <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              {subtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="mx-auto max-w-4xl space-y-8 md:space-y-8">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                number={step.number}
                label={step.label}
                title={step.title}
                description={step.description}
                index={i}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* CTA */}
      <RevealOnScroll
        direction="up"
        delay={ANIMATION_DELAYS.OBJECTIVES_NEXT_STEPS_CTA}
      >
        <div className="text-center">
          <ScheduleCallButton href={ctaUrl} />
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default NextStepsTimeline;
