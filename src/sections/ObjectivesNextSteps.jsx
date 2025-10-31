import {
  Target,
  TrendingUp,
  Zap,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";

const ObjectivesNextSteps = () => {
  const objectives = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Crecimiento Sostenible",
      description:
        "Escalarás de $10K a $50K+ mensuales con un sistema probado que no depende de tu presencia constante.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización Inteligente",
      description:
        "Implementarás procesos que funcionan mientras duermes: adquisición, conversión y entrega automatizadas.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Estructura Sólida",
      description:
        "Tendrás un negocio con fundamentos claros: equipo eficiente, métricas precisas y operaciones predecibles.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Posicionamiento Premium",
      description:
        "Te convertirás en la opción obvia para tus clientes ideales, cobrando lo que realmente vales.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Agenda tu Auditoría Estratégica",
      description:
        "Una llamada de 45 minutos donde analizaremos tu negocio actual, identificaremos los cuellos de botella y diseñaremos el roadmap exacto para tus próximos $20K-$54K.",
    },
    {
      number: "02",
      title: "Diagnóstico Personalizado",
      description:
        "Recibirás un análisis detallado de tus oportunidades de crecimiento, prioridades de acción y el plan específico que implementaremos juntos.",
    },
    {
      number: "03",
      title: "Comienza la Transformación",
      description:
        "Trabajamos 1-1 para implementar cada pieza del sistema: desde tu propuesta de ventas hasta la estructura operativa completa.",
    },
  ];

  return (
    <div className="text-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* === Objectives Section === */}
        <section className="space-y-16">
          {/* === Section Header === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#aca377] to-[#8a8555] mb-6 animate-pulse">
                <Target className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#aca377] to-white">
                Objetivo
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Para cuando termines de trabajar conmigo
              </p>
            </div>
          </RevealOnScroll>

          {/* === Objectives Grid === */}
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <RevealOnScroll
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * (i + 1) + 0.3}
              >
                <div className="group relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#aca377] transition-all duration-500 hover:shadow-[0_0_60px_rgba(172,163,119,0.25)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#aca377]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#aca377]/10 flex items-center justify-center text-[#aca377] group-hover:scale-110 group-hover:bg-[#aca377]/20 transition-all duration-500">
                      {obj.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-[#aca377] transition-colors duration-300">
                      {obj.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed">
                      {obj.description}
                    </p>

                    <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#aca377] to-transparent transition-all duration-700 rounded-full"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* === Final Statement === */}
          <RevealOnScroll direction="up" delay={0.7}>
            <div className="relative mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#aca377]/20 via-[#aca377]/5 to-[#aca377]/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-[#aca377]/50 rounded-3xl p-12 text-center">
                <p className="text-3xl md:text-4xl font-bold leading-tight">
                  Tendrás un{" "}
                  <span className="text-[#aca377]">negocio escalable</span> que
                  opera sin depender de ti,{" "}
                  <span className="text-[#aca377]">
                    genera resultados predecibles
                  </span>{" "}
                  y te posiciona como{" "}
                  <span className="text-[#aca377]">la autoridad</span> en tu
                  mercado.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* === Next Steps Section === */}
        <section className="space-y-16">
          {/* === Section Header + Steps Timeline Unified Reveal === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div>
              <div className="text-center space-y-6 mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#aca377] to-[#8a8555] mb-6">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#aca377] to-white">
                  Próximos Pasos
                </h2>
                <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  El camino es simple, directo y diseñado para tu éxito
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="group relative">
                    {i < steps.length - 1 && (
                      <div className="absolute left-[70px] top-[120px] w-1 h-[calc(100%+32px)] bg-gradient-to-b from-[#aca377] to-zinc-800"></div>
                    )}

                    <div className="flex gap-8 items-start">
                      <div className="flex-shrink-0 w-[140px] h-[140px] rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] flex items-center justify-center shadow-[0_0_40px_rgba(172,163,119,0.4)] group-hover:scale-110 transition-transform duration-500">
                        <span className="text-6xl font-black text-black">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 group-hover:border-[#aca377] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
                        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-[#aca377] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* === Final CTA === */}
          <RevealOnScroll direction="up" delay={0.7}>
            <div className="mt-16 text-center space-y-8">
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                No dejes que otro mes pase sin un plan claro. <br />
                <span className="text-[#aca377] font-semibold">
                  Da el primer paso hoy.
                </span>
              </p>

              <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
            </div>
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
};

export default ObjectivesNextSteps;
