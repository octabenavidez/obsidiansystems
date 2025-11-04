import { Check, ArrowRight, Sparkles } from "lucide-react";
import RevealOnScroll from "../common/RevealOnScroll";
import ModalImage from "react-modal-image";
import MediaDisplay from "../common/MediaDisplay";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { resultImages } from "../data/aboutImages";

const AboutSection = () => {
  const audience = [
    { text: "Consultores", color: "from-[#aca377] to-[#d4c994]" },
    { text: "Infoproductores", color: "from-[#aca377] to-[#d4c994]" },
    { text: "Dueños de Negocios", color: "from-[#aca377] to-[#d4c994]" },
  ];

  const painPoints = [
    "Dudas sobre la estructura de tu negocio: procesos del equipo, fundamentos, adquisición, conversión, automatizaciones o estructura de entrega.",
    "Das resultados increíbles a tus clientes, pero querés escalar sin perder calidad.",
    "Ya pagaste mentorías y masterminds grupales, pero necesitás un socio estratégico que te diga cuál es el siguiente paso para crecer.",
  ];

  const notWhatItIs = [
    "NO es un Mastermind grupal.",
    "NO es un Infoproducto.",
    "NO son llamadas con un coach.",
  ];

  const whatItIs = [
    "Soy YO y tu negocio 1-1.",
    "Desarrollamos juntos una estrategia personalizada de ventas (Roadmap, posicionamiento, optimización, etc).",
  ];

  const plans = [
    {
      duration: "10 Meses",
      options: ["Pago único de $7100 USD", "2 pagos de $4000 USD"],
    },
    {
      duration: "4 Meses",
      options: ["Pago único de $3500 USD", "2 pagos de $2100 USD"],
      highlight: true,
    },
  ];

  return (
    <section className="overflow-hidden px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-20">
        {/* === Section Title === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="space-y-4 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-[#aca377]" />
            <h2 className="text-5xl font-bold tracking-tight">
              ¿Para quién es este programa?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-400">
              Diseñado exclusivamente para quienes ya están en movimiento y
              buscan estructura, foco y crecimiento real.
            </p>
          </div>
        </RevealOnScroll>

        {/* === Target Audience Pills === */}
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4">
            {audience.map((item, i) => (
              <span
                key={i}
                className={`rounded-full bg-gradient-to-r px-6 py-3 ${item.color} text-lg font-semibold text-black shadow-lg`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* === Description === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <p className="mt-6 text-center text-xl leading-relaxed text-gray-300">
            Personas que ya están facturando al menos{" "}
            <span className="text-2xl font-bold text-[#aca377]">
              $10,000 USD/mes
            </span>{" "}
            y se identifican con lo siguiente:
          </p>
        </RevealOnScroll>

        {/* === Pain Points === */}
        <RevealOnScroll direction="up" delay={0.6}>
          <div className="mt-10 grid gap-5">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-300 hover:border-[#aca377]/70 hover:shadow-[0_0_30px_rgba(172,163,119,0.3)]"
              >
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#aca377]/20">
                  <ArrowRight className="h-4 w-4 text-[#aca377]" />
                </div>
                <p className="text-lg leading-relaxed text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* === How It Works === */}
        <RevealOnScroll direction="up" delay={0.7}>
          <div className="space-y-12">
            <h2 className="text-center text-5xl font-bold">Así Funciona</h2>

            {/* Not What It Is */}
            <div className="space-y-3 rounded-2xl border border-red-900/30 bg-gradient-to-br from-red-950/30 to-black p-8">
              <h3 className="mb-4 text-2xl font-semibold text-red-400">
                Esto NO es:
              </h3>
              {notWhatItIs.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20">
                    <span className="font-bold text-red-400">✕</span>
                  </div>
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>

            {/* What It Is */}
            <div className="space-y-5 rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-8">
              {whatItIs.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#aca377]/20">
                    <Check className="h-6 w-6 text-[#aca377]" />
                  </div>
                  <p className="text-xl font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Investment Plans === */}
        <RevealOnScroll direction="up" delay={0.8}>
          <div className="mt-16">
            <h3 className="mb-8 text-center text-3xl font-bold text-[#aca377]">
              Opciones de Inversión
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {plans.map((option, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 ${
                    option.highlight
                      ? "border-2 border-[#aca377] bg-gradient-to-br from-[#aca377]/20 to-black shadow-[0_0_40px_rgba(172,163,119,0.4)]"
                      : "border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black"
                  }`}
                >
                  {option.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#aca377] px-6 py-1 text-sm font-bold text-black">
                      MÁS POPULAR
                    </div>
                  )}
                  <h4 className="mb-6 text-center text-2xl font-bold">
                    {option.duration}
                  </h4>
                  <div className="space-y-4">
                    {option.options.map((opt, j) => (
                      <div
                        key={j}
                        className="rounded-xl border border-zinc-800 bg-black/50 p-4 text-center"
                      >
                        <p className="text-lg text-gray-200">{opt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Results Section === */}
        <RevealOnScroll direction="up" delay={1}>
          <div className="mt-20 space-y-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              ¿Qué resultados voy a alcanzar?
            </h2>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {resultImages.map((img, i) => (
                <div key={i} className="relative h-[300px] overflow-hidden">
                  <ModalImage
                    small={img}
                    large={img}
                    hideDownload={true}
                    hideZoom={true}
                    className="h-[300px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
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
        <RevealOnScroll direction="up" delay={1}>
          <MediaDisplay
            src="https://4kwallpapers.com/images/wallpapers/business-barcode-2560x1080-16395.png"
            alt="Obsidian Systems preview"
            type="image"
            className="mt-4"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;
