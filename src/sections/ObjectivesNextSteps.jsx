import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";

import { Crown, Smile, Trophy, Shell, Check } from "lucide-react";

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
      <div className="mx-auto max-w-[95%] space-y-32 2xl:max-w-[60%]">
        {/* === This is for you if Section === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="mx-auto my-20">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Green Card - This IS for you */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#34d399]/20 bg-gradient-to-br from-[#34d399]/10 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#34d399]/40">
                {/* Decorative Elements */}
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#34d399]/10 blur-2xl transition-all duration-500 group-hover:bg-[#34d399]/20"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#34d399]/5 blur-xl"></div>

                <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#34d399]/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#34d399]/30 bg-[#34d399]/20 shadow-lg shadow-[#34d399]/20">
                      <Check className="h-7 w-7 text-[#34d399]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#34d399] md:text-4xl">
                        Esto solo funcionará si:
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Eres consultor B2B haciendo entre $10K y $15K/mes.",
                      "Tienes clientes, y das resultados, pero tu entrega de servicio se siente desorganizada por dentro.",
                      "Estás dispuesto a ejecutar rápido, iterar con cabeza y sostener estándares altos.",
                      "Buscas simplicidad, foco y estructuras que realmente muevan la aguja.",
                      "Valorás más la reputación y los resultados de tus clientes por encima de todo.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[#34d399]/5"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#34d399]/20 transition-colors group-hover/item:bg-[#34d399]/30">
                          <Check className="h-4 w-4 text-[#34d399] transition-transform group-hover/item:scale-110" />
                        </div>
                        <span className="text-base text-gray-300 transition-colors group-hover/item:text-white md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Red Card - This is NOT for you */}
              <div className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40">
                {/* Decorative Elements */}
                <div className="pointer-events-none absolute top-0 left-0 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-all duration-500 group-hover:bg-red-500/20"></div>
                <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 rounded-full bg-red-400/5 blur-xl"></div>
                <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/20 shadow-lg shadow-red-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7 text-red-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-red-400 md:text-4xl">
                        Esto NO te va a funcionar si:
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Solo querés “hacer plata rápido” sin trabajar en serio.",
                      "Buscás fórmulas mágicas, funnels copiados y blueprints genéricos.",
                      "Cambiás de estrategia cada dos semanas y nunca ejecutás en profundidad.",
                      "Te atraen el FOMO, el hype y las tácticas turbias para venderle a cualquiera.",
                      "Te molesta la meritocracia y preferís culpar al contexto antes que asumir responsabilidad.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-red-500/5"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 transition-colors group-hover/item:bg-red-500/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-red-400 transition-transform group-hover/item:scale-110"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </div>
                        <span className="text-base text-gray-300 transition-colors group-hover/item:text-white md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-8 text-center">
              <p className="text-base text-gray-400 md:text-lg">
                Si te identificas con la columna verde,{" "}
                <span className="font-semibold text-[#34d399]">
                  sigue leyendo.
                </span>
              </p>
            </div>
          </div>
        </RevealOnScroll>

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
