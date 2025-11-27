
import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";

const ObjectivesNextSteps = () => {
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
        {/* === Next Steps Section === */}
        <section className="space-y-10 pt-28">
          {/* === Section Header + Steps Timeline Unified Reveal === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div>
              <div className="mb-16 space-y-6 text-center">
                <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
                  Próximos Pasos
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
                  El camino es simple, directo y diseñado para tu éxito
                </p>
              </div>
              <div className="mx-auto max-w-4xl space-y-8 md:space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="group relative">
                    {/* Mobile: Vertical connector line centered */}
                    {i < steps.length - 1 && (
                      <>
                        <div className="absolute top-[100px] left-1/2 hidden h-[calc(100%+16px)] w-1 -translate-x-1/2 bg-gradient-to-b from-[#aca377] to-zinc-800 md:hidden"></div>
                        {/* Desktop: Horizontal connector line */}
                        <div className="absolute top-[70px] left-[75px] hidden h-[calc(100%+32px)] w-1 bg-gradient-to-b from-[#aca377] to-zinc-800 md:block"></div>
                      </>
                    )}

                    {/* Mobile Layout: Vertical Stack */}
                    <div className="flex flex-col items-center gap-6 md:hidden">
                      {/* Number Badge - Mobile */}
                      <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#aca377] to-[#8a8555] shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-transform duration-500 group-hover:scale-110">
                        <span className="text-center text-4xl font-black text-black">
                          {step.number}
                        </span>
                      </div>

                      {/* Content Card - Mobile */}
                      <div className="w-full rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 transition-all duration-500 group-hover:border-[#aca377] group-hover:shadow-[0_0_40px_rgba(172,163,119,0.2)]">
                        <div className="mb-3 text-center">
                          <span className="text-lg font-bold text-[#aca377]">
                            {step.label}
                          </span>
                        </div>
                        <h3 className="mb-4 text-center text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-base leading-relaxed text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Layout: Horizontal */}
                    <div className="hidden items-start gap-8 md:flex">
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
