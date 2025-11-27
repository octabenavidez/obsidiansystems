import ModalImage from "react-modal-image";
import MediaDisplay from "../common/MediaDisplay";
import RevealOnScroll from "../common/RevealOnScroll";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { resultImages } from "../data/heroImages";

import { Check } from "lucide-react";

const Hero = () => {
  const notWhatItIs = [
    "NO es un curso.",
    "NO es un roadmap “copy-paste”.",
    "NO es un Mastermind grupal.",
  ];

  const whatItIs = [
    "Un 1-1 donde adapto mi servicio a tu negocio en particular.",
    "Un Trabajo centrado en cada componente de la empresa para optimizarla.",
    "Una solución Diferente, Rápida y Más Inteligente que las demás.",
  ];

  return (
    <section className="relative flex flex-col gap-9 overflow-hidden px-4 text-center text-white md:px-6 lg:px-8">
      {/* === Hero Section with Background Image === */}
      <div className="relative flex w-full flex-col md:min-h-[calc(100vh-80px)]">
        {/* === Content with relative z-index === */}
        <div className="relative z-10 flex flex-col gap-9">
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
            <h1 className="font-instrument mx-auto max-w-[1300px] text-center text-[23px] leading-[1.1em] font-bold tracking-[-0.7px] text-white capitalize md:text-6xl">
              Lleva al Máximo Tu Adquisición & Fundamentos{" "}
              <span className="lg:whitespace-nowrap">
                Y Escala Tu Consultoría B2B en 4 Meses
              </span>
            </h1>
          </RevealOnScroll>

          {/* === Subheadline === */}
          <RevealOnScroll direction="up" delay={0.3}>
            <p className="mx-auto max-w-6xl text-center text-[18px] leading-[1.2em] font-medium text-white md:text-[25px]">
              Voy a asegurarme de que cada componente de tu empresa esté{" "}
              <span className="font-bold text-[#aca377]">100% optimizado</span>{" "}
              para sumar y sostener{" "}
              <span className="lg:whitespace-nowrap">
                entre <span className="font-bold text-[#aca377]">$20,000</span>{" "}
                y <span className="font-bold text-[#aca377]">$54,000 USD</span>{" "}
                adicionales, trabajando 1-1 a tu lado para lograrlo.
              </span>
            </p>
          </RevealOnScroll>

          {/* === Hero Image === */}
          <RevealOnScroll direction="up" delay={0.4}>
            <MediaDisplay
              src="https://4kwallpapers.com/images/wallpapers/business-barcode-2560x1080-16395.png"
              alt="Obsidian Systems preview"
              type="image"
              height="h-[40vh]  sm:h-[250px] md:h-[300px] lg:h-[400px]"
              className="mx-auto w-full max-w-[1200px]"
              fit="cover"
            />
          </RevealOnScroll>

          {/* === Social Proof / Rating === */}
          <RevealOnScroll direction="up" delay={0.5}>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-3">
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

              <div className="flex flex-col items-center justify-center md:items-start md:px-2">
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
        </div>
      </div>

      {/* === Rest of Content without Background === */}
      <div className="flex flex-col gap-9">
        {/* === Schedule Call Button === */}
        <RevealOnScroll direction="up" delay={0.6}>
          <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
        </RevealOnScroll>

        {/* === What It Is and What It Isn't === */}
        <RevealOnScroll direction="up" delay={0.7}>
          <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 xl:max-w-[70%]">
            {/* Not What It Is */}
            <div className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-red-950/30 to-black p-8 shadow-[0_0_30px_rgba(239,68,68,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400/60 hover:shadow-[0_12px_40px_rgba(239,68,68,0.25)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.12), transparent 35%)",
                }}
              />
              <h3 className="mb-4 text-left text-2xl font-semibold text-red-400">
                Esto NO es:
              </h3>
              {notWhatItIs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/30 transition-all duration-300 group-hover:ring-red-400/60">
                    <span className="text-base leading-none font-bold text-red-400">
                      ✕
                    </span>
                  </div>
                  <p className="pt-0.5 text-left text-lg leading-relaxed text-gray-200 transition-colors duration-300 group-hover:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            {/* What It Is */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-8 shadow-[0_0_30px_rgba(172,163,119,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e5dcb6]/70 hover:shadow-[0_12px_40px_rgba(172,163,119,0.25)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(172,163,119,0.15), transparent 35%)",
                }}
              />
              <h3 className="mb-4 text-left text-2xl font-semibold text-[#aca377]">
                Esto SI es:
              </h3>
              {whatItIs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#aca377]/20 ring-1 ring-[#aca377]/30 transition-all duration-300 group-hover:ring-[#e5dcb6]/80">
                    <Check className="h-4 w-4 text-[#aca377]" />
                  </div>
                  <p className="pt-0.5 text-left text-lg leading-relaxed font-medium text-white transition-colors duration-300 group-hover:text-[#f4edd3]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Results Gallery === */}
        <RevealOnScroll direction="up" delay={0.8}>
          <div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {resultImages.map(({ src, type }, i) => (
                <div key={i} className="relative overflow-hidden">
                  {type === "video" ? (
                    <video
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                      className="w-full object-cover md:h-[400px]"
                    />
                  ) : (
                    <ModalImage
                      small={src}
                      large={src}
                      hideDownload={true}
                      hideZoom={true}
                      className="w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105 md:h-[400px]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Hero;
