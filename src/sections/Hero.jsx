import ModalImage from "react-modal-image";
import MediaDisplay from "../common/MediaDisplay";
import RevealOnScroll from "../common/RevealOnScroll";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { resultImages } from "../data/heroImages";

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-9 overflow-hidden text-center text-white">
      {/* === Logo === */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/obsidian.systems/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/src/assets/icons/logo.avif"
              alt="Obsidian Systems logo"
              className="h-auto w-24"
            />
          </a>
        </div>
      </RevealOnScroll>

      {/* === Main Headline === */}
      <RevealOnScroll direction="up" delay={0.2}>
        <h1 className="font-instrument text-center text-[48px] leading-[1.1em] font-bold tracking-[-0.7px] text-white capitalize">
          Trabaja 1-1 Conmigo Para Añadir Entre{" "}
          <span className="whitespace-nowrap">
            <span className="text-[#aca377]">$20k Y $54k</span> Adicionales A Tu
            Facturación
          </span>
        </h1>
      </RevealOnScroll>

      {/* === Subheadline === */}
      <RevealOnScroll direction="up" delay={0.3}>
        <p className="text-center text-[20px] leading-[1.2em] font-medium text-white underline">
          <strong className="font-semibold">PD:</strong> Si estás haciendo menos
          de $10,000 USD, no puedo ayudarte.
        </p>
      </RevealOnScroll>

      {/* === Hero Image === */}
      <RevealOnScroll direction="up" delay={0.4}>
        <MediaDisplay
          src="https://4kwallpapers.com/images/wallpapers/business-barcode-2560x1080-16395.png"
          alt="Obsidian Systems preview"
          type="image"
          className="mt-4"
        />
      </RevealOnScroll>

      {/* === Social Proof / Rating === */}
      <RevealOnScroll direction="up" delay={0.5}>
        <div className="flex items-center justify-center space-y-3">
          <div className="flex items-center justify-center gap-0.5">
            {[
              "https://framerusercontent.com/images/hZqbByVBLz8LCpGyzqlf4GtaDA.png",
              "https://framerusercontent.com/images/53t9pZk0kxOAmyQRUEbeR4HvRGw.png",
              "https://framerusercontent.com/images/P4vKthkxx1Mhe4byHoDeeSB15y4.png",
              "https://framerusercontent.com/images/qdIJ4cGyjUm4UYmPAKp1PHOv2Fo.png",
              "https://framerusercontent.com/images/r7Cv08zLxfFfq8cconwfrgu9Woo.png",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Avatar ${i + 1}`}
                className="h-12 w-12 rounded-full border-2 border-black/40 object-cover"
              />
            ))}
          </div>

          <div className="flex flex-col items-start justify-start px-2">
            <span className="text-[#ffae00]">★★★★★</span>
            <p className="text-sm font-semibold tracking-tight text-[#ffae00]">
              5 de 5 Estrellas!
            </p>
            <p className="text-xs font-medium text-[#aca377]">
              @obsidian.systems
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* === Schedule Call Button === */}
      <RevealOnScroll direction="up" delay={0.6}>
        <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
      </RevealOnScroll>

      {/* === Informational Text === */}
      <RevealOnScroll direction="up" delay={0.7}>
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-[31px] font-bold tracking-[-1.06px]">
            Sigue leyendo antes de agendar una llamada.
          </h2>
          <p className="text-[19px] tracking-[-1.06px]">
            (Solo para consultores o dueños de negocios que buscan mantener su
            impacto en el largo plazo)
          </p>
        </div>
      </RevealOnScroll>

      {/* === Results Gallery === */}
      <RevealOnScroll direction="up" delay={0.8}>
        <div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {resultImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <ModalImage
                  small={img}
                  large={img}
                  hideDownload={true}
                  hideZoom={true}
                  className="h-[400px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;
