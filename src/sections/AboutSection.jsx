import RevealOnScroll from "../common/RevealOnScroll";
import ScheduleCallButton from "../common/ScheduleCallButton";
import TimelineRoadmap from "../components/about/TimelineRoadmap";

// Components
import PainPointsGrid from "../components/about/PainPointsGrid";
import ObjectivesGrid from "../components/about/ObjectivesGrid";
import ResultsGallery from "../components/about/ResultsGallery";
import StorySection from "../components/about/StorySection";
import MethodSection from "../components/about/MethodSection";

// Data
import { painPoints, objectives } from "../data/aboutData";
import { resultImages } from "../data/aboutImages";

// Images
import fran1 from "../assets/images/fran1.webp";
import fran2 from "../assets/images/fran 2.webp";
import sistemas from "../assets/images/sistemas.png";

const AboutSection = () => {
  return (
    <section className="overflow-hidden px-6 pt-28 text-white">
      <div className="mx-auto max-w-[1300px] space-y-10">
        {/* === Section Title === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Si estás aquí, es muy probable que algo de <br /> lo que voy a
              decir resuene fuerte con vos:
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Description === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <p className="mt-4 text-center text-[20px] text-white md:text-[25px]">
            Eres un{" "}
            <span className="text-[22px] font-bold text-[#aca377] md:text-[27px]">
              Consultores B2B
            </span>{" "}
            que está facturando mínimamente <br />
            $10,000 USD al mes, y te identificas con lo siguiente:
          </p>
        </RevealOnScroll>

        {/* === Pain Points === */}
        <PainPointsGrid painPoints={painPoints} />

        {/* === Objectives Section === */}
        <section className="mx-auto my-20 space-y-8 md:space-y-10">
          {/* === Section Header === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="space-y-4 text-center">
              <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                Lo que quieres es claro:
              </h2>
            </div>
          </RevealOnScroll>

          {/* === Results Statement === */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#aca377]/20 via-[#aca377]/5 to-[#aca377]/20 blur-3xl"></div>
              <div className="relative rounded-3xl border border-[#aca377]/50 bg-gradient-to-br from-zinc-900 to-black p-8 text-center md:p-10">
                <h2 className="mb-4 bg-linear-to-r from-white via-[#aca377] to-white bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                  Resultados monetarios
                </h2>
                <p className="mx-auto max-w-6xl text-lg leading-relaxed text-gray-300 md:text-xl">
                  Vas a sumar y sostener entre{" "}
                  <span className="font-bold text-[#aca377]">USD 20.000 </span>{" "}
                  y <span className="font-bold text-[#aca377]">USD 54.000</span>{" "}
                  adicionales de facturación en tu{" "}
                  <span className="font-bold text-[#aca377]">
                    consultoría B2B,
                  </span>{" "}
                  llevando al máximo tu{" "}
                  <span className="text-[#aca377]">Adquisición</span> y tus{" "}
                  <span className="text-[#aca377]">Fundamentos</span> en un
                  programa de trabajo 1-1 conmigo durante 4 meses.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* === Objectives Grid === */}
          <ObjectivesGrid objectives={objectives} />
        </section>

        {/* === Results Section === */}
        <ResultsGallery images={resultImages} />

        {/* === Schedule Call Button ===  */}
        <RevealOnScroll direction="up" delay={0.6}>
          <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
        </RevealOnScroll>

        {/* === Story Section === */}
        <StorySection image1={fran1} image2={fran2} overlayImage={sistemas} />

        {/* === SSE Method Section === */}
        <MethodSection />

        {/* === Timeline/Roadmap Section === */}
        <TimelineRoadmap />
      </div>
    </section>
  );
};

export default AboutSection;
