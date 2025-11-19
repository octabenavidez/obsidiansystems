import Layout from "./layout/Layout";
import AboutSection from "./sections/AboutSection";
import ClientsSection from "./sections/ClientsSection";
import FinalCTASection from "./sections/FinalCTASection";
import Hero from "./sections/Hero";
import ObjectivesNextSteps from "./sections/ObjectivesNextSteps";
import TestimonialsSection from "./sections/TestimonialSection";
import FloatingCallButton from "./common/FloatingCallButton";

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
      {/* Floating Call Button - Visible on all pages */}
      <FloatingCallButton
        calendarLink="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems"
        name="Fran Di Giorno"
        role="CEO Obsidian Systems"
        description="Esta llamada será conmigo. No es una “auditoría”; es para revisar lo que has construido y confirmar si cumples las condiciones para que trabajemos juntos."
        availabilityText="Solo estoy tomando pocas llamadas por día."
      />
    </>
  );
}

export default App;
