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
    <section className="text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* === Section Title === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center space-y-4">
            <Sparkles className="w-10 h-10 text-[#aca377] mx-auto" />
            <h2 className="text-5xl font-bold tracking-tight">
              ¿Para quién es este programa?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${item.color} text-black font-semibold text-lg shadow-lg`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* === Description === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <p className="text-xl text-center text-gray-300 leading-relaxed mt-6">
            Personas que ya están facturando al menos{" "}
            <span className="text-[#aca377] font-bold text-2xl">
              $10,000 USD/mes
            </span>{" "}
            y se identifican con lo siguiente:
          </p>
        </RevealOnScroll>

        {/* === Pain Points === */}
        <RevealOnScroll direction="up" delay={0.6}>
          <div className="grid gap-5 mt-10">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 hover:border-[#aca377]/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(172,163,119,0.3)]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#aca377]/20 flex items-center justify-center mt-1">
                  <ArrowRight className="w-4 h-4 text-[#aca377]" />
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* === How It Works === */}
        <RevealOnScroll direction="up" delay={0.7}>
          <div className="space-y-12">
            <h2 className="text-5xl font-bold text-center">Así Funciona</h2>

            {/* Not What It Is */}
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-2xl p-8 space-y-3">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                Esto NO es:
              </h3>
              {notWhatItIs.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 font-bold">✕</span>
                  </div>
                  <p className="text-gray-200 text-lg">{item}</p>
                </div>
              ))}
            </div>

            {/* What It Is */}
            <div className="bg-gradient-to-br from-[#aca377]/10 to-black border border-[#aca377]/30 rounded-2xl p-8 space-y-5">
              {whatItIs.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#aca377]/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#aca377]" />
                  </div>
                  <p className="text-white text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Investment Plans === */}
        <RevealOnScroll direction="up" delay={0.8}>
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-[#aca377]">
              Opciones de Inversión
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((option, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-8 ${
                    option.highlight
                      ? "bg-gradient-to-br from-[#aca377]/20 to-black border-2 border-[#aca377] shadow-[0_0_40px_rgba(172,163,119,0.4)]"
                      : "bg-gradient-to-br from-zinc-900 to-black border border-zinc-800"
                  }`}
                >
                  {option.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#aca377] text-black px-6 py-1 rounded-full text-sm font-bold">
                      MÁS POPULAR
                    </div>
                  )}
                  <h4 className="text-2xl font-bold mb-6 text-center">
                    {option.duration}
                  </h4>
                  <div className="space-y-4">
                    {option.options.map((opt, j) => (
                      <div
                        key={j}
                        className="bg-black/50 rounded-xl p-4 text-center border border-zinc-800"
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
          <div className="text-center space-y-10 mt-20">
            <h2 className="text-4xl font-bold tracking-tight">
              ¿Qué resultados voy a alcanzar?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
              {resultImages.map((img, i) => (
                <div key={i} className="relative h-[300px] overflow-hidden">
                  <ModalImage
                    small={img}
                    large={img}
                    hideDownload={true}
                    hideZoom={true}
                    className="w-full h-[300px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
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
