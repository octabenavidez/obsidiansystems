/**
 * Deliverable Card component for investment plan
 * @param {Object} props - Component properties
 * @param {string} props.num - Deliverable number
 * @param {string} props.title - Deliverable title
 * @param {string} props.desc - Deliverable description
 * @param {boolean} props.highlight - Whether to highlight this card
 * @returns {JSX.Element} Rendered deliverable card
 */
const DeliverableCard = ({ num, title, desc, highlight }) => {
  return (
    <div
      className={`rounded-2xl border ${
        highlight
          ? "border-white/40 bg-white/10"
          : "border-white/10 bg-black/40"
      } p-4 shadow-[0_4px_12px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-white/40`}
    >
      <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-white/60">
        {num}
      </p>
      <p className="text-sm text-gray-100 md:text-base">
        <span className="font-bold">{title}</span> {desc}
      </p>
    </div>
  );
};

/**
 * Investment Deliverables component
 * @param {Object} props - Component properties
 * @param {string} props.sectionTitle - Section title
 * @param {string} props.badge - Badge text
 * @param {Array<{num: string, title: string, desc: string, highlight?: boolean}>} props.deliverables - Array of deliverables
 * @returns {JSX.Element} Rendered deliverables section
 */
const InvestmentDeliverables = ({ sectionTitle, badge, deliverables }) => {
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold tracking-[0.3em] text-white/60 md:text-sm">
          {sectionTitle}
        </p>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {deliverables.map((item) => (
          <DeliverableCard
            key={item.num}
            num={item.num}
            title={item.title}
            desc={item.desc}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentDeliverables;
