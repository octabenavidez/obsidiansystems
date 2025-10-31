import Layout from "./layout/Layout";
import AboutSection from "./sections/AboutSection";
import ClientsSection from "./sections/ClientsSection";

import FinalCTASection from "./sections/FinalCTASection";
import Hero from "./sections/Hero";
import ObjectivesNextSteps from "./sections/ObjectivesNextSteps";
import TestimonialsSection from "./sections/TestimonialSection";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <AboutSection />
        <ClientsSection />
        <ObjectivesNextSteps />
        <TestimonialsSection />
        <FinalCTASection />
      </Layout>
    </>
  );
}

export default App;
