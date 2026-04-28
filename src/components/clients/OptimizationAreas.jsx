/**
 * Optimization Areas component for investment plan
 * @param {Object} props - Component properties
 * @param {string} props.title - Section title
 * @param {string[]} props.areas - Array of optimization areas
 * @returns {JSX.Element} Rendered optimization areas section
 */
const OptimizationAreas = ({ title, areas }) => {
  return (
    <div className="my-8">
      {/* Section Title with Dividers */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/20"></div>
        <span className="text-xs font-semibold text-white md:text-sm">
          {title}
        </span>
        <div className="h-px flex-1 bg-white/20"></div>
      </div>

      {/* Areas List */}
      <div className="space-y-2">
        {areas.map((area, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-center transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <p className="text-sm font-medium text-white md:text-base">
              {area}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationAreas;
