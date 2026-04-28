import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Case Studies Section component
 * Displays case study header with badge, title, description and video
 * @returns {JSX.Element} Rendered Case Studies section
 */
const CaseStudiesSection = () => {
  return (
    <section className="px-4 pt-24 text-white">
      <div className="mx-auto max-w-[1100px]">
        <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.CLIENTS_HEADER}>
          <div className="flex flex-col items-center space-y-6 text-center">
            {/* Badge */}
            <GradientBadge variant="gold" className="px-6 text-xl">
              Resultados
            </GradientBadge>

            {/* Title */}
            <h2 className="pb-1 text-[24px] leading-[1.2em] font-extralight tracking-[-0.7px] md:text-5xl lg:text-[52px]">
              Caso de estudio
            </h2>

            {/* Description */}
            <p className="mx-auto w-[95%] max-w-[900px] text-[13px] leading-relaxed font-extralight text-white/80 italic md:text-3xl">
              De $0 y 500k seguidores, a 240 plazas mid ticket vendidas
              <br />y 1M de seguidores en 180 días como referente fitness.
            </p>
          </div>

          {/* YouTube Video - Full width */}
          <div className="mx-auto mt-12 w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/THikWPdiFDg?si=JzGgWxBsLJVzNrT6"
                title="Caso de estudio: Escaló a +1M seguidores"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
