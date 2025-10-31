import { Users } from "lucide-react";
import { clientes } from "../data/clients";
import RevealOnScroll from "../common/RevealOnScroll";

const ClientsSection = () => {

  return (
    <section className=" text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-10 h-10 text-[#aca377]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Algunos Clientes
              <br />
              Que Trabajan Conmigo
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Clients Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {clientes.map((cliente, i) => (
            <RevealOnScroll
              key={i}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.1 * (i + 1)}
            >
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#aca377] transition-all duration-500 hover:shadow-[0_0_40px_rgba(172,163,119,0.3)]">
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={cliente.imagen}
                      alt={cliente.nombre}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-1 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                        {cliente.nombre}
                      </h3>
                      <div className="w-16 h-1 bg-[#aca377] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
