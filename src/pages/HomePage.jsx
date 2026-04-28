import Layout from "../layout/Layout";
import AboutSection from "../sections/AboutSection";
import ClientsSection from "../sections/ClientsSection";
import CaseStudiesSection from "../sections/CaseStudiesSection";
import FAQSection from "../sections/FAQSection";
import FinalCTASection from "../sections/FinalCTASection";
import ForWhoSection from "../sections/ForWhoSection";
import Hero from "../sections/Hero";
import HowToEnterSection from "../sections/HowToEnterSection";
import ModelSection from "../sections/ModelSection";
import NextStepsTimelineSection from "../sections/NextStepsTimelineSection";
import ObjectiveSection from "../sections/ObjectiveSection";
import ObjectivesNextSteps from "../sections/ObjectivesNextSteps";
import ResultsGallerySection from "../sections/ResultsGallerySection";
import TestimonialsSection from "../sections/TestimonialSection";
import WhatYouGetSection from "../sections/WhatYouGetSection";

/**
 * Home page component that displays the main landing page content.
 * This includes the hero section, about section, clients, objectives,
 * testimonials, and the final call-to-action.
 * @returns {JSX.Element} The rendered home page
 */
function HomePage() {
  return (
    <Layout>
      <Hero />
      <ModelSection />
      <ObjectiveSection />
      <ForWhoSection />
      <NextStepsTimelineSection />
      {/* <AboutSection /> */}
      <WhatYouGetSection />
      <HowToEnterSection />
      <ClientsSection />
      {/* <ObjectivesNextSteps /> */}
      <TestimonialsSection />
      <ResultsGallerySection />
      <FinalCTASection />
      {/* <CaseStudiesSection />   */}

      <HowToEnterSection
        title="Entrar a Consulting OS™"
        description={[
          "Agenda una llamada conmigo para trabajar conmigo y crear tu plan de acción para escalar.",
        ]}
      />
      <FAQSection />
    </Layout>
  );
}

export default HomePage;
