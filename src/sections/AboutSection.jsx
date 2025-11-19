import { Check, Play } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";
import ModalImage from "react-modal-image";
import MediaDisplay from "../common/MediaDisplay";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { resultImages } from "../data/aboutImages";

const AboutSection = () => {
  const painPoints = [
    {
      title: "Adquisición y posicionamiento trabados",
      description:
        "Tienes problemas en adquisición de leads, oferta o posicionamiento que frenan tu crecimiento.",
    },
    {
      title: "Cero claridad sobre el siguiente paso",
      description:
        "Sientes falta de claridad sobre qué priorizar o cómo estructurar tu siguiente jugada para escalar tu negocio.",
    },
    {
      title: "Sientes que fuiste creado para algo grande.",
      description:
        "Tienes por dentro esa convicción de que estás destinado a dejar una huella en tu industria.",
    },
    {
      title: "Desorden en tu entrega y servicio.",
      description:
        "Tu entrega y experiencia del cliente no está optimizada y se siente desorganizada por dentro.",
    },
    {
      title: "Sin métricas ni sistemas para decidir",
      description:
        "No tenés métricas ni sistemas que te permitan tomar decisiones y escalar con previsibilidad.",
    },
    {
      title: "Contenido y comunicación débil.",
      description:
        "No tienes un ecosistema de contenido o nunca lograste mantener constancia en tu comunicación.",
    },
    {
      title: "Miedo a quedarte construyendo sin lanzar",
      description:
        'Te da miedo frenarte o quedarte por mucho tiempo "construyendo" sin lanzar.',
    },
    {
      title: "Quieres resultados, no información.",
      description:
        "Pagaste por varias mentorías, pero aun así reconoces que más información no te hace avanzar.",
    },
  ];

  const notWhatItIs = [
    "NO es un infoproducto.",
    "NO es un roadmap “copy-paste” vendido en masa.",
    "NO es un Mastermind grupal.",
  ];

  const whatItIs = [
    "Un 1-1 donde adapto mi servicio a tu negocio en particular.",
    "Un Trabajo centrado en cada componente de la empresa para optimizarla.",
    "Una solución Diferente, Rápida y Más Inteligente que las demás.",
  ];

  const planFeatures = [
    {
      text: "BluePrint Adaptado: Sesión individual con Fran para crear el roadmap que vamos a seguir durante los meses del programa.",
      highlighted: true,
      type: "base",
    },
    {
      text: "Bóveda OPS 50K: +10 Hrs de Entregables Pre-grabados para solucionar cada futuro problema que pueda surgir.",
      highlighted: true,
      type: "base",
    },
    {
      text: "Acompañamiento: 2 sesiones 1-1 por semana con Fran. Para aumentar claridad de acciones, enfoque y productividad.",
      highlighted: true,
      type: "base",
    },
    {
      text: "Hermandad: Podés hablar con total seguridad 24/7 directamente al chat privado de Fran (respondo muy rápido)",
      highlighted: true,
      type: "base",
    },
    {
      text: "Fundamentos / Oferta / Entrega",
      highlighted: false,
      type: "special",
    },
    {
      text: "Posicionamiento / Mensaje",
      highlighted: false,
      type: "special",
    },
    {
      text: "Adquisición / Marketing",
      highlighted: false,
      type: "special",
    },
    {
      text: "Sistemas de Nutrición: TOF + MOF + BOF",
      highlighted: false,
      type: "special",
    },
    {
      text: "Conversión / Ventas",
      highlighted: false,
      type: "special",
    },
    {
      text: "Equipo / Talento / Alto Rendimiento",
      highlighted: false,
      type: "special",
    },
    {
      text: "Instalación de CRM Adaptado al negocio [Airtable]",
      highlighted: false,
      type: "bonus",
      number: 1,
    },
    {
      text: "Sesiones ilimitadas con Fran cuando lo requieras",
      highlighted: false,
      type: "bonus",
      number: 2,
    },
  ];

  const basePlanFeatures = planFeatures.filter(
    (feature) => feature.type === "base",
  );
  const specialPlanFeatures = planFeatures.filter(
    (feature) => feature.type === "special",
  );
  const bonusFeatures = planFeatures.filter(
    (feature) => feature.type === "bonus",
  );

  const planPricing = ["Pago único de $3500 USD", "2 pagos de $2100 USD"];

  return (
    <section className="overflow-hidden px-6 pt-28 text-white">
      <div className="mx-auto max-w-[90%] space-y-10">
        {/* === Section Title === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <h2 className="text-6xl font-bold tracking-tight">
              ¿Para quién es este programa?
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Description === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <p className="mt-4 text-center text-xl leading-relaxed text-gray-300">
            Es para{" "}
            <span className="text-2xl font-bold text-[#aca377]">
              Consultores B2B
            </span>{" "}
            que están facturando mínimamente <br />
            $10,000 USD al mes, y se identifican con lo siguiente:
          </p>
        </RevealOnScroll>

        {/* === Pain Points === */}
        <RevealOnScroll direction="up" delay={0.6}>
          <div className="mx-auto mt-10 grid gap-5 md:grid-cols-2 xl:max-w-[90%]">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 text-left transition-all duration-300 hover:border-[#aca377]/60 hover:shadow-[0_0_30px_rgba(172,163,119,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {point.title}
                    </p>
                    <div className="mt-1 h-0.5 w-12 rounded-full bg-[#aca377]/70 transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-200">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* === What It Is and What It Isn't === */}
        <RevealOnScroll direction="up" delay={0.7}>
          <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 xl:max-w-[90%]">
            {/* Not What It Is */}
            <div className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-red-950/30 to-black p-8 shadow-[0_0_30px_rgba(239,68,68,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-red-400/60 hover:shadow-[0_12px_40px_rgba(239,68,68,0.25)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(239,68,68,0.12), transparent 35%)",
                }}
              />
              <h3 className="mb-4 text-2xl font-semibold text-red-400">
                Esto NO es:
              </h3>
              {notWhatItIs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/30 transition-all duration-300 group-hover:ring-red-400/60">
                    <span className="font-bold text-red-400">✕</span>
                  </div>
                  <p className="text-lg text-gray-200 transition-colors duration-300 group-hover:text-white">
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
              <h3 className="mb-4 text-2xl font-semibold text-[#aca377]">
                Esto SI es:
              </h3>
              {whatItIs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg p-2 transition-all duration-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#aca377]/20 ring-1 ring-[#aca377]/30 transition-all duration-300 group-hover:ring-[#e5dcb6]/80">
                    <Check className="h-6 w-6 text-[#aca377]" />
                  </div>
                  <p className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#f4edd3]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Investment Plans (two-column) === */}
        <div className="mx-auto flex min-h-screen items-center justify-center py-4 md:py-6 lg:py-8 xl:max-w-[90%] xl:py-10 2xl:py-28">
          <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <RevealOnScroll direction="up" delay={0.7}>
              <div className="flex h-full w-full flex-col">
                <h2 className="mb-3 text-center text-4xl font-bold tracking-tight md:mb-4 md:text-5xl lg:mb-5 lg:text-6xl xl:mb-6 xl:text-6xl 2xl:mb-8 2xl:text-7xl">
                  Así Funciona
                </h2>

                <div className="flex flex-1 flex-col gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
                  {/* Paso 1 */}
                  <div className="group relative rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(172,163,119,0.3)] md:p-4 lg:p-5 xl:p-6 2xl:p-7">
                    <div className="mb-1 flex items-center justify-between gap-3 md:mb-1.5 md:gap-4">
                      <h3 className="text-lg font-bold text-[#aca377] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        Simplificar
                      </h3>
                      <span className="rounded-full bg-[#aca377] px-3 py-0.5 text-[10px] font-bold tracking-wide text-black uppercase md:px-4 md:py-1 md:text-xs lg:px-5 lg:py-1.5 lg:text-sm 2xl:px-6 2xl:py-2 2xl:text-base">
                        Paso 1
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
                      Fundamentos y Entrega
                    </p>
                  </div>

                  {/* Paso 2 */}
                  <div className="group relative rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(172,163,119,0.3)] md:p-4 lg:p-5 xl:p-6 2xl:p-7">
                    <div className="mb-1 flex items-center justify-between gap-3 md:mb-1.5 md:gap-4">
                      <h3 className="text-lg font-bold text-[#aca377] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        Sistematizar
                      </h3>
                      <span className="rounded-full bg-[#aca377] px-3 py-0.5 text-[10px] font-bold tracking-wide text-black uppercase md:px-4 md:py-1 md:text-xs lg:px-5 lg:py-1.5 lg:text-sm 2xl:px-6 2xl:py-2 2xl:text-base">
                        Paso 2
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
                      Adquisición y Ventas
                    </p>
                  </div>

                  {/* Paso 3 */}
                  <div className="group relative rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-3.5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(172,163,119,0.3)] md:p-4 lg:p-5 xl:p-6 2xl:p-7">
                    <div className="mb-1 flex items-center justify-between gap-3 md:mb-1.5 md:gap-4">
                      <h3 className="text-lg font-bold text-[#aca377] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        Escalar
                      </h3>
                      <span className="rounded-full bg-[#aca377] px-3 py-0.5 text-[10px] font-bold tracking-wide text-black uppercase md:px-4 md:py-1 md:text-xs lg:px-5 lg:py-1.5 lg:text-sm 2xl:px-6 2xl:py-2 2xl:text-base">
                        Paso 3
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
                      Con Procesos y Sistemas
                    </p>
                  </div>
                </div>
                <div className="mt-2.5 rounded-2xl border border-[#aca377]/25 bg-gradient-to-br from-zinc-900/80 via-black to-black p-2.5 shadow-[0_0_18px_rgba(172,163,119,0.1)] md:mt-3 md:p-3 lg:mt-4 lg:p-4 xl:mt-5 xl:p-5 2xl:mt-6 2xl:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-center md:gap-2.5 md:text-left">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.45em] text-[#aca377]/70 uppercase md:text-xs 2xl:text-sm">
                        Incluye
                      </p>
                    </div>
                    <span className="rounded-full border border-[#aca377]/30 px-3 py-0.5 text-[10px] font-semibold text-[#aca377] md:px-4 md:py-1 md:text-[11px] lg:px-5 lg:py-1.5 lg:text-xs 2xl:px-6 2xl:py-2 2xl:text-sm">
                      {basePlanFeatures.length} ACCESOS
                    </span>
                  </div>
                  <div className="mt-2 grid gap-1.5 md:mt-2.5 md:grid-cols-2 md:gap-2 lg:mt-3 lg:gap-2.5 2xl:mt-4 2xl:gap-3">
                    {basePlanFeatures.map((feature, i) => (
                      <div
                        key={feature.text}
                        className="rounded-2xl border border-[#aca377]/25 bg-black/40 p-2 text-xs shadow-[0_4px_12px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#aca377]/60 md:p-2.5 md:text-sm lg:p-3 2xl:p-4 2xl:text-base"
                      >
                        <p className="flex items-center justify-between text-[10px] font-semibold tracking-[0.35em] text-[#aca377]/70 uppercase md:text-xs 2xl:text-sm">
                          <span>{String(i + 1).padStart(2, "0")}</span>
                        </p>
                        <p className="mt-0.5 text-xs text-gray-100 md:text-sm lg:text-base 2xl:text-lg">
                          {feature.text.includes(":") ? (
                            <>
                              <span className="font-bold">
                                {feature.text.split(":")[0]}:
                              </span>
                              <span>
                                {feature.text.split(":").slice(1).join(":")}
                              </span>
                            </>
                          ) : (
                            feature.text
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.8}>
              <div className="flex h-full w-full flex-col">
                <h3 className="mb-3 text-center text-4xl font-bold tracking-tight text-[#aca377] md:mb-4 md:text-5xl lg:mb-5 lg:text-6xl xl:mb-6 xl:text-6xl 2xl:mb-8 2xl:text-7xl">
                  Qué incluye
                </h3>
                <div className="mx-auto flex h-full w-full flex-1 flex-col">
                  <div className="relative flex h-full flex-1 flex-col rounded-2xl border-2 border-[#aca377]/70 bg-gradient-to-br from-[#aca377]/15 to-black p-3 shadow-[0_0_30px_rgba(172,163,119,0.25)] md:p-4 lg:p-5 xl:p-6 2xl:p-7">
                    {/* Features List */}
                    <div className="mb-2.5 flex flex-1 flex-col space-y-1.5 md:mb-3 md:space-y-2 lg:mb-4 lg:space-y-2.5 xl:mb-4 xl:space-y-3 2xl:mb-5 2xl:space-y-4">
                      {/* Divider */}
                      <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3 2xl:gap-4">
                        <div className="h-px flex-1 bg-[#aca377]/30"></div>
                        <span className="text-[10px] font-semibold text-[#aca377] uppercase md:text-xs lg:text-sm 2xl:text-base">
                          Entregables del programa
                        </span>
                        <div className="h-px flex-1 bg-[#aca377]/30"></div>
                      </div>

                      {/* Special Features */}
                      <div className="flex flex-1 flex-col space-y-1.5 md:space-y-2 lg:space-y-2.5 2xl:space-y-3">
                        {specialPlanFeatures.map((feature) => (
                          <div
                            key={feature.text}
                            className="rounded-2xl border border-[#aca377]/30 bg-black/40 px-2.5 py-1.5 text-center transition-all duration-300 hover:border-[#aca377]/70 hover:bg-[#aca377]/10 md:px-3 md:py-2 lg:px-4 lg:py-2.5 2xl:px-5 2xl:py-3"
                          >
                            <p className="mt-0.5 text-xs font-medium text-[#f4f0db] md:text-sm lg:text-base 2xl:text-lg">
                              {feature.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Bonus Features */}
                      {bonusFeatures.length > 0 && (
                        <div className="mt-3 space-y-2 md:mt-4 md:space-y-2.5 lg:mt-5 lg:space-y-3 2xl:mt-6 2xl:space-y-3.5">
                          {bonusFeatures.map((bonus) => (
                            <div
                              key={bonus.text}
                              className="group relative overflow-hidden rounded-2xl border-2 border-[#aca377] bg-gradient-to-br from-[#aca377]/20 via-[#aca377]/10 to-black px-3 py-2.5 text-center shadow-[0_0_20px_rgba(172,163,119,0.3)] transition-all duration-300 hover:border-[#e5dcb6] hover:shadow-[0_0_30px_rgba(172,163,119,0.5)] md:px-4 md:py-3 lg:px-5 lg:py-3.5 2xl:px-6 2xl:py-4"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-[#aca377]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                              <div className="relative flex items-center justify-center gap-2 md:gap-3">
                                <div className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#aca377] to-[#d4c994] px-2.5 py-1 shadow-lg md:px-3 md:py-1.5">
                                  <span className="text-[10px] font-bold tracking-wide text-black uppercase md:text-xs">
                                    Bonus N°{bonus.number}
                                  </span>
                                </div>
                                <p className="text-xs font-semibold text-[#f4edd3] md:text-sm lg:text-base 2xl:text-lg">
                                  {bonus.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="my-1.5 border-t border-[#aca377]/30 pt-1.5 md:my-2 md:pt-2 lg:my-2.5 lg:pt-2.5 2xl:my-3 2xl:pt-3">
                      <h4 className="text-center text-sm font-bold text-white md:text-base lg:text-lg 2xl:text-xl">
                        4 Meses
                      </h4>
                    </div>

                    {/* Pricing Options */}
                    <div className="space-y-1 md:space-y-1.5 lg:space-y-2 2xl:space-y-2.5">
                      {planPricing.map((price, j) => (
                        <div
                          key={j}
                          className="rounded-lg border border-[#aca377]/40 bg-gradient-to-r from-[#d4c994] to-[#aca377] p-1.5 text-center text-xs shadow-lg transition-all duration-300 md:p-2 md:text-sm lg:p-2.5 lg:text-base 2xl:p-3 2xl:text-lg"
                        >
                          <p className="font-semibold text-black">{price}</p>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-1.5 text-center text-[10px] text-gray-400 md:mt-2 md:text-xs lg:mt-2.5 lg:text-sm 2xl:mt-3 2xl:text-base">
                      Limitado a 3 cupos por mes.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* === Results Section === */}
        <RevealOnScroll direction="up" delay={1}>
          <div className="space-y-10 text-center">
            <h2 className="text-6xl font-bold tracking-tight">
              ¿Qué resultados voy a alcanzar?
            </h2>
            <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:max-w-[85%]">
              {resultImages.map((img, i) => (
                <div key={i} className="relative overflow-hidden">
                  <ModalImage
                    small={img}
                    large={img}
                    hideDownload={true}
                    hideZoom={true}
                    className="h-[450px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Schedule Call Button ===  */}
        <RevealOnScroll direction="up" delay={0.6}>
          <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
        </RevealOnScroll>

        {/* === Video Section ===  */}
        {/* <RevealOnScroll direction="up" delay={1}>
          <MediaDisplay
            src="https://4kwallpapers.com/images/wallpapers/business-barcode-2560x1080-16395.png"
            alt="Obsidian Systems preview"
            type="image"
            className="mt-4"
          />
        </RevealOnScroll> */}
      </div>
    </section>
  );
};

export default AboutSection;
