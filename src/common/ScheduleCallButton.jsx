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
  label = "AGENDAR UNA LLAMADA →",
  className = "",
  newTab = true,
}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="relative flex h-[70px] w-full max-w-[532px] items-center justify-center rounded-[10px] border-4 border-[#aca377] bg-[#0f0f0f] text-center text-[36px] font-extrabold text-white no-underline transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "532px",
          width: "100%",
          height: "70px",
          backgroundColor: "#0f0f0f",
          border: "4px solid #aca377",
          borderRadius: "10px",
          color: "white",
          fontWeight: "800",
          fontSize: "36px",
          textDecoration: "none",
          boxShadow:
            "0 0.7px 0.7px -0.6px rgba(0,0,0,0.15), 0 1.8px 1.8px -1.2px rgba(0,0,0,0.14), 0 3.6px 3.6px -1.8px rgba(0,0,0,0.14), 0 6.8px 6.8px -2.5px rgba(0,0,0,0.13), 0 13.6px 13.6px -3.1px rgba(0,0,0,0.10), 0 30px 30px -3.7px rgba(0,0,0,0.05)",
        }}
      >
        {label}
      </a>
    </div>
  );
};

export default ScheduleCallButton;
