import { Users } from "lucide-react";
import { clientes } from "../data/clients";
import RevealOnScroll from "../common/RevealOnScroll";

const ClientsSection = () => {
  return (
    <section className="px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mb-16 space-y-4 pt-28 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Users className="h-10 w-10 text-[#aca377]" />
            </div>
            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              Algunos Clientes
              <br />
              Que Trabajan Conmigo
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Clients Grid === */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {clientes.map((cliente, i) => (
            <RevealOnScroll
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1 * (i + 1)}
            >
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900 to-black transition-all duration-500 hover:border-[#aca377] hover:shadow-[0_0_30px_rgba(172,163,119,0.25)]">
                  <div className="relative h-[300px] overflow-hidden sm:h-[320px]">
                    <img
                      src={cliente.imagen}
                      alt={cliente.nombre}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: cliente.position || "center" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
                  </div>

                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <div className="relative">
                      <h3 className="mb-0.5 transform text-lg font-bold text-white transition-transform duration-300 group-hover:translate-y-[-3px]">
                        {cliente.nombre}
                      </h3>
                      <div className="h-0.5 w-12 origin-left scale-x-0 transform rounded-full bg-[#aca377] transition-transform duration-500 group-hover:scale-x-100"></div>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(172,163,119,0.1) 0%, transparent 50%, rgba(172,163,119,0.1) 100%)",
                    }}
                  ></div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* === Investment Plans Section === */}
      <RevealOnScroll direction="up" delay={0.5}>
        <div className="mx-auto mt-32 max-w-4xl">
          {/* Title */}
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
            Qué Incluye
          </h2>
          <p className="mb-12 text-center text-base text-gray-400 md:text-lg">
            Mi plan es simple: yo me voy a comprometer al mismo nivel que tú
            decidas comprometerte en el negocio.
          </p>

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#aca377]/70 bg-gradient-to-br from-[#aca377]/15 to-black p-6 shadow-[0_0_30px_rgba(172,163,119,0.25)] md:p-8">
            {/* ENTREGABLES PRINCIPALES */}
            <div className="mb-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#aca377]/70 md:text-sm">
                  ENTREGABLES PRINCIPALES
                </p>
                <span className="rounded-full border border-[#aca377]/30 px-3 py-1 text-xs font-semibold text-[#aca377]">
                  6 ACCESOS
                </span>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  {
                    num: "01",
                    title: "BluePrint Adaptado:",
                    desc: "Sesión individual con Fran. Para crear el roadmap que vamos a seguir durante los meses del programa.",
                  },
                  {
                    num: "02",
                    title: "Bóveda OPS 50K:",
                    desc: "+10 Hrs de Entregables Pre-grabados para solucionar cada futuro problema que pueda surgir.",
                  },
                  {
                    num: "03",
                    title: "Acompañamiento:",
                    desc: "2 sesiones 1-1 por semana con Fran. Para aumentar claridad de acciones, enfoque y productividad.",
                  },
                  {
                    num: "04",
                    title: "Hermandad:",
                    desc: "Podés hablar con total seguridad 24/7 directamente al chat privado de Fran (respondo muy rápido)",
                  },
                  {
                    num: "05",
                    title: "Duración:",
                    desc: "120 días de consultoría donde trabajo directamente sobre tu negocio. No hay asistentes, no hay coaches. Solo tú y yo.",
                  },
                  {
                    num: "06",
                    title: "Procesos:",
                    desc: "Incluye instalación de sistemas, automatizaciones, CRM en Airtable, métricas, etc. Para que puedas escalar en paz.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className={`rounded-2xl border ${
                      item.highlight
                        ? "border-[#aca377]/60 bg-[#aca377]/10"
                        : "border-[#aca377]/25 bg-black/40"
                    } p-4 shadow-[0_4px_12px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#aca377]/60`}
                  >
                    <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-[#aca377]/70">
                      {item.num}
                    </p>
                    <p className="text-sm text-gray-100 md:text-base">
                      <span className="font-bold">{item.title}</span>{" "}
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ÁREAS QUE OPTIMIZARÉ */}
            <div className="my-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#aca377]/30"></div>
                <span className="text-xs font-semibold text-[#aca377] md:text-sm">
                  ÁREAS QUE OPTIMIZARÉ
                </span>
                <div className="h-px flex-1 bg-[#aca377]/30"></div>
              </div>

              <div className="space-y-2">
                {[
                  "Fundamentos / Oferta / Entrega",
                  "Posicionamiento / Mensaje",
                  "Adquisición / Marketing",
                  "Sistemas de Nutrición: TOF + MOF + BOF",
                  "Conversión / Ventas",
                  "Equipo / Talento / Alto Rendimiento",
                ].map((area, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#aca377]/30 bg-black/40 px-4 py-3 text-center transition-all duration-300 hover:border-[#aca377]/70 hover:bg-[#aca377]/10"
                  >
                    <p className="text-sm font-medium text-[#f4f0db] md:text-base">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>



            {/* Disclaimer */}
            <p className="mt-6 text-center text-sm text-gray-400 md:text-base">
              Limitado a 3 cupos por mes.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ClientsSection;
