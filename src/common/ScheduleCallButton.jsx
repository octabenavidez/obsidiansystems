/**
 * ScheduleCallButton
 *
 * Reusable call-to-action button component for booking strategy calls or meetings.
 *
 * Usage:
 * <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
 *
 * Props:
 * @param {string} href - The link destination (e.g., Cal.com, Calendly, etc.).
 * @param {string} [label="AGENDAR UNA LLAMADA →"] - The button text.
 * @param {string} [className=""] - Optional custom class names.
 * @param {boolean} [newTab=true] - Whether to open the link in a new tab.
 */

const ScheduleCallButton = ({
  href = "#",
  label = "QUIERO VER SI APLICO →",
  className = "",
  newTab = true,
}) => {
  return (
    <div className={`flex justify-center px-2 ${className}`}>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="relative flex h-[56px] w-full max-w-[532px] items-center justify-center rounded-[10px] border-2 border-[#aca377] bg-[#0f0f0f] px-4 text-center text-[18px] font-extrabold leading-tight text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-2xl md:h-[64px] md:border-[3px] md:text-[28px] lg:h-[70px] lg:border-4 lg:text-[36px]"
        style={{
          boxShadow:
            "0 0.7px 0.7px -0.6px rgba(0,0,0,0.15), 0 1.8px 1.8px -1.2px rgba(0,0,0,0.14), 0 3.6px 3.6px -1.8px rgba(0,0,0,0.14), 0 6.8px 6.8px -2.5px rgba(0,0,0,0.13), 0 13.6px 13.6px -3.1px rgba(0,0,0,0.10), 0 30px 30px -3.7px rgba(0,0,0,0.05)",
        }}
      >
        <span className="whitespace-nowrap">{label}</span>
      </a>
    </div>
  );
};

export default ScheduleCallButton;
