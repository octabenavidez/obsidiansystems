import {
  Crown,
  CheckCircle2,
  Layout,
  Smile,
  Rocket,
  ArrowRight,
  Calendar,
  Trophy,
  Shell,
} from "lucide-react";
import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";

const ObjectivesNextSteps = () => {
  const objectives = [
    {
      icon: <Crown className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Posicionado en tu mercado",
      description:
        "Ya no te miran como un NPC, ahora eres la única opción lógica en la cabeza de tu cliente y comienzas a cobrar por lo que vales.",
    },
    {
      icon: <Trophy className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Darás mejores resultados a tus clientes",
      description:
        "Tendrás todas las estructuras de servicio necesarias para aumentar tu capacidad de entrega y resultados.",
    },
    {
      icon: <Shell className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Ecosistema de contenido propio",
      description:
        "Convierte tu contenido en un sistema que atrae clientes premium y refuerza tu marca con una estrategia evergreen.",
    },
    {
      icon: <Smile className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Disfrutarás el proceso",
      description:
        "Aumentaremos tu enfoque y productividad para que escalar sea más claro, confiado y, sobre todo, disfrutable.",
    },
  ];

  const steps = [
    {
      number: "01",
      label: "TÚ",
      title: "Agenda la llamada 1-1",
      description:
        'En esa llamada no voy a venderte con "psicología oscura" ni nada por el estilo. Solo voy a ver que has construido hasta ahora, ver si eres apto para entrar y dado el caso que quieras trabajar 1-1 conmigo voy a mostrarte el link para que comencemos lo antes posible.',
    },
    {
      number: "02",
      label: "YO",
      title: "Armo tu BluePrint adaptado",
      description:
        "Cuando entres, nuestra primera llamada será para armar tu blueprint y próximas jugadas a seguir durante los siguientes meses que vas a estar trabajando 1-1 conmigo.",
    },
    {
      number: "03",
      label: "JUNTOS",
      title: "Comenzamos a ejecutar",
      description:
        "¡No hay más excusas! Ya la máquina se instaló, ahora vamos a ejecutarla durante 4 meses y agregar esos $11k - $54k predecibles siguiendo el paso a paso.",
    },
  ];

  return (
    <div className="px-4 py-24 text-white">
      <div className="mx-auto max-w-[95%] space-y-32 xl:max-w-[90%] 2xl:max-w-[85%]">
        {/* === Objectives Section === */}
        <section className="space-y-8 md:space-y-10">
          {/* === Section Header === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="space-y-4 text-center">
              <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                Objetivo
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl lg:text-2xl">
                Para cuando termines de trabajar conmigo
              </p>
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
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {objectives.map((obj, i) => (
              <RevealOnScroll
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * (i + 1) + 0.3}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-7 transition-all duration-500 hover:border-[#aca377] hover:shadow-[0_0_40px_rgba(172,163,119,0.2)] md:p-8 lg:p-9">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#aca377]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex h-full flex-col space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#aca377]/10 text-[#aca377] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#aca377]/20 md:h-16 md:w-16 lg:h-20 lg:w-20">
                        {obj.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#aca377] md:text-2xl lg:text-3xl">
                        {obj.title}
                      </h3>
                    </div>

                    <p className="flex-1 text-base leading-relaxed text-gray-400 md:text-lg lg:text-xl">
                      {obj.description}
                    </p>

                    <div className="mt-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-[#aca377] to-transparent transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* === Next Steps Section === */}
        <section className="space-y-10 pt-28">
          {/* === Section Header + Steps Timeline Unified Reveal === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div>
              <div className="mb-16 space-y-6 text-center">
                <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                  Próximos Pasos
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
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
                      <div className="relative flex h-[140px] w-[150px] shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-transform duration-500 group-hover:scale-110">
                        <span className="px-4 text-center text-5xl font-black text-black">
                          {step.number}
                        </span>
                      </div>

                      <div className="flex-1 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-500 group-hover:border-[#aca377] group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
                        <h3 className="mb-4 text-3xl font-bold text-white">
                          <span className="mr-3 text-[#aca377]">
                            {step.label}
                          </span>
                          <span className="text-gray-100">{step.title}</span>
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
            <div className="text-center">
              <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
            </div>
          </RevealOnScroll>
        </section>
      </div>
    </div>
  );
};

export default ObjectivesNextSteps;
