// Objectives Components
import QualificationCards from "../components/objectives/QualificationCards";
import NextStepsTimeline from "../components/objectives/NextStepsTimeline";

// Data
import { objectivesNextStepsContent } from "../data/objectives/content";

/**
 * Objectives and Next Steps Section component
 * Displays qualification criteria and process timeline
 * @returns {JSX.Element} Rendered ObjectivesNextSteps section
 */
const ObjectivesNextSteps = () => {
  const { qualificationCards, nextSteps, cta } = objectivesNextStepsContent;

  return (
    <section className="px-4 pt-2 pb-24 text-white">
      <div className="mx-auto max-w-[95%] space-y-32 2xl:max-w-[60%]">
        {/* Qualification Cards */}
        <QualificationCards
          positive={qualificationCards.positive}
          negative={qualificationCards.negative}
          footerMessage={qualificationCards.footerMessage}
        />

        {/* Next Steps Timeline */}
        <NextStepsTimeline
          title={nextSteps.title}
          subtitle={nextSteps.subtitle}
          steps={nextSteps.steps}
          ctaUrl={cta.url}
        />
      </div>
    </section>
  );
};

export default ObjectivesNextSteps;
