import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Individual Client Card component
 * @param {Object} props - Component properties
 * @param {string} props.imagen - Client image URL
 * @param {string} props.nombre - Client name
 * @param {string} props.position - Image object position
 * @returns {JSX.Element} Rendered client card
 */
const ClientCard = ({ imagen, nombre, position }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-gradient-to-br from-zinc-900 to-black transition-all duration-500 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={imagen}
            alt={nombre}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: position || "center" }}
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
        </div>

        {/* Name Label */}
        <div className="absolute right-0 bottom-0 left-0 p-4">
          <div className="relative">
            <h3 className="mb-0.5 transform text-lg font-bold text-white transition-transform duration-300 group-hover:translate-y-[-3px]">
              {nombre}
            </h3>
            <div className="h-0.5 w-12 origin-left scale-x-0 transform rounded-full bg-gradient-to-r from-white via-gray-400 to-white transition-transform duration-500 group-hover:scale-x-100"></div>
          </div>
        </div>

        {/* Shine Effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

/**
 * Clients Grid component displaying all client cards
 * @param {Object} props - Component properties
 * @param {Array<{imagen: string, nombre: string, position?: string}>} props.clients - Array of client data
 * @returns {JSX.Element} Rendered clients grid
 */
const ClientsGrid = ({ clients }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {clients.map((cliente, i) => (
        <RevealOnScroll
          key={i}
          direction={i % 2 === 0 ? "left" : "right"}
          delay={ANIMATION_DELAYS.CLIENTS_GRID_ITEM * (i + 1)}
        >
          <ClientCard
            imagen={cliente.imagen}
            nombre={cliente.nombre}
            position={cliente.position}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
};

export default ClientsGrid;
