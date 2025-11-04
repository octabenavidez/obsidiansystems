import { Users } from "lucide-react";
import { clientes } from "../data/clients";
import RevealOnScroll from "../common/RevealOnScroll";

const ClientsSection = () => {
  return (
    <section className="px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mb-16 space-y-4 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <Users className="h-10 w-10 text-[#aca377]" />
            </div>
            <h2 className="text-5xl leading-tight font-bold tracking-tight md:text-6xl">
              Algunos Clientes
              <br />
              Que Trabajan Conmigo
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Clients Grid === */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {clientes.map((cliente, i) => (
            <RevealOnScroll
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1 * (i + 1)}
            >
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black transition-all duration-500 hover:border-[#aca377] hover:shadow-[0_0_40px_rgba(172,163,119,0.3)]">
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={cliente.imagen}
                      alt={cliente.nombre}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
                  </div>

                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div className="relative">
                      <h3 className="mb-1 transform text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {cliente.nombre}
                      </h3>
                      <div className="h-1 w-16 origin-left scale-x-0 transform rounded-full bg-[#aca377] transition-transform duration-500 group-hover:scale-x-100"></div>
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
    </section>
  );
};

export default ClientsSection;
