import RevealOnScroll from "../../common/RevealOnScroll";

/**
 * Objectives Grid component
 * Displays a grid of business objectives with icons and hover effects
 * @param {Object} props - Component properties
 * @param {Array<{icon: JSX.Element, title: string, description: string}>} props.objectives - Array of objective objects
 * @returns {JSX.Element} Rendered objectives grid
 */
const ObjectivesGrid = ({ objectives }) => {
  return (
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
  );
};

export default ObjectivesGrid;
