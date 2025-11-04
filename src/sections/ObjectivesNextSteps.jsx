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
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Crecimiento Sostenible",
      description:
        "Escalarás de $10K a $50K+ mensuales con un sistema probado que no depende de tu presencia constante.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automatización Inteligente",
      description:
        "Implementarás procesos que funcionan mientras duermes: adquisición, conversión y entrega automatizadas.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Estructura Sólida",
      description:
        "Tendrás un negocio con fundamentos claros: equipo eficiente, métricas precisas y operaciones predecibles.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
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
    <div className="px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl space-y-32">
        {/* === Objectives Section === */}
        <section className="space-y-16">
          {/* === Section Header === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="space-y-6 text-center">
              <div className="mb-6 inline-flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#aca377] to-[#8a8555]">
                <Target className="h-10 w-10 text-black" />
              </div>
              <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-6xl leading-tight font-bold tracking-tight text-transparent md:text-7xl">
                Objetivo
              </h2>
              <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-gray-400">
                Para cuando termines de trabajar conmigo
              </p>
            </div>
          </RevealOnScroll>

          {/* === Objectives Grid === */}
          <div className="grid gap-6 md:grid-cols-2">
            {objectives.map((obj, i) => (
              <RevealOnScroll
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * (i + 1) + 0.3}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 transition-all duration-500 hover:border-[#aca377] hover:shadow-[0_0_60px_rgba(172,163,119,0.25)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#aca377]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#aca377]/10 text-[#aca377] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#aca377]/20">
                      {obj.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#aca377]">
                      {obj.title}
                    </h3>

                    <p className="text-lg leading-relaxed text-gray-400">
                      {obj.description}
                    </p>

                    <div className="h-1 w-0 rounded-full bg-gradient-to-r from-[#aca377] to-transparent transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* === Final Statement === */}
          <RevealOnScroll direction="up" delay={0.7}>
            <div className="relative mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-[#aca377]/20 via-[#aca377]/5 to-[#aca377]/20 blur-3xl"></div>
              <div className="relative rounded-3xl border border-[#aca377]/50 bg-gradient-to-br from-zinc-900 to-black p-12 text-center">
                <p className="text-3xl leading-tight font-bold md:text-4xl">
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
              <div className="mb-16 space-y-6 text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#aca377] to-[#8a8555]">
                  <Calendar className="h-10 w-10 text-black" />
                </div>
                <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-6xl font-bold tracking-tight text-transparent md:text-7xl">
                  Próximos Pasos
                </h2>
                <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-gray-400">
                  El camino es simple, directo y diseñado para tu éxito
                </p>
              </div>
              <div className="mx-auto max-w-4xl space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="group relative">
                    {i < steps.length - 1 && (
                      <div className="absolute top-[120px] left-[70px] h-[calc(100%+32px)] w-1 bg-gradient-to-b from-[#aca377] to-zinc-800"></div>
                    )}

                    <div className="flex items-start gap-8">
                      <div className="flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-transform duration-500 group-hover:scale-110">
                        <span className="text-6xl font-black text-black">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-500 group-hover:border-[#aca377] group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
                        <h3 className="mb-4 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-[#aca377]">
                          {step.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-400">
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
            <div className="mt-16 space-y-8 text-center">
              <p className="mx-auto max-w-3xl text-2xl text-gray-300">
                No dejes que otro mes pase sin un plan claro. <br />
                <span className="font-semibold text-[#aca377]">
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
