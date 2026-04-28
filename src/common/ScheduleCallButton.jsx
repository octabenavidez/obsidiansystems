import arrowImage from "../assets/icons/flecha.png";

/**
 * ScheduleCallButton
 *
 * Reusable call-to-action button component for booking strategy calls or meetings.
 *
 * Usage:
 * <ScheduleCallButton href="https://example.com" />
 * <ScheduleCallButton href="https://example.com" showArrow arrowText="ya viste el video?" />
 *
 * Props:
 * @param {string} href - The link destination (e.g., Cal.com, Calendly, etc.).
 * @param {string} [label="Agendar llamada"] - The button text.
 * @param {string} [className=""] - Optional custom class names.
 * @param {boolean} [newTab=true] - Whether to open the link in a new tab.
 * @param {boolean} [showArrow=false] - Whether to show the arrow and text indicator.
 * @param {string} [arrowText="ya viste el video?"] - Text to display with the arrow.
 */

const ScheduleCallButton = ({
  href = "#",
  label = "Entrar a Consulting OS",
  className = "",
  newTab = true,
  showArrow = false,
  arrowText = "ya viste el video?",
  isOpen = true, // Admissions are open
}) => {
  const displayLabel = isOpen ? label : "Plazas Cerradas";
  const isDisabled = !isOpen;
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`relative transition-all duration-300 ${!isDisabled ? "hover:scale-105" : ""}`}
      >
        {/* Arrow indicator - only shown when showArrow is true and not disabled */}
        {showArrow && !isDisabled && (
          <div
            className="pointer-events-none absolute z-20 hidden md:block"
            style={{
              top: "120%",
              left: "-140px",
              transform: "translateY(-50%)",
            }}
            aria-hidden="true"
          >
            <div className="flex flex-col items-center">
              {/* Arrow image - on top */}
              <img
                src={arrowImage}
                alt=""
                style={{
                  userSelect: "none",
                  marginLeft: "40px",
                  width: "60px",
                  transform: "scaleY(-1) scaleX(-1)",
                }}
              />
              {/* Text label - below */}
              <span
                style={{
                  fontFamily: "Benedict, cursive",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "rgb(255, 255, 255)",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              >
                {arrowText}
              </span>
            </div>
          </div>
        )}

        {/* Gradient border wrapper */}
        <div
          className={`rounded-[12px] p-[2px] transition-all duration-500 md:p-[3px]`}
          style={{
            background: isDisabled
              ? "linear-gradient(135deg, #3a3a3a, #1a1a1a, #3a3a3a, #1a1a1a, #3a3a3a)"
              : "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)",
          }}
        >
          {isDisabled ? (
            <div
              className="relative inline-flex h-[56px] cursor-not-allowed items-center justify-center rounded-[10px] bg-[#0a0a0a] px-8 text-center text-[18px] leading-tight font-extralight text-white/40 no-underline shadow-inner shadow-black/80 md:h-[64px] md:px-5 md:text-[26px]"
              aria-disabled="true"
            >
              <span className="tracking-wide whitespace-nowrap">
                {displayLabel}
              </span>
            </div>
          ) : (
            <a
              href={href}
              target={newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="relative inline-flex h-[56px] items-center justify-center rounded-[10px] bg-[#0f0f0f] px-8 text-center text-[18px] leading-tight font-extralight text-white no-underline transition-shadow duration-300 hover:shadow-2xl md:h-[64px] md:px-5 md:text-[26px]"
              style={{
                boxShadow:
                  "0 0.7px 0.7px -0.6px rgba(0,0,0,0.15), 0 1.8px 1.8px -1.2px rgba(0,0,0,0.14), 0 3.6px 3.6px -1.8px rgba(0,0,0,0.14), 0 6.8px 6.8px -2.5px rgba(0,0,0,0.13), 0 13.6px 13.6px -3.1px rgba(0,0,0,0.10), 0 30px 30px -3.7px rgba(0,0,0,0.05)",
              }}
            >
              <span className="whitespace-nowrap">{displayLabel}</span>
            </a>
          )}
        </div>
      </div>

      {/* FOMO Subtext */}
      {isDisabled && (
        <div className="mt-5 flex flex-col items-center text-center">
          <p className="bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-300 bg-clip-text text-[15px] font-light tracking-wide text-transparent md:text-[17px]">
            Llegamos a nuestra capacidad máxima operativa.
          </p>
          <p className="mt-1 text-[13px] font-extralight tracking-wider text-white/50 italic md:text-[15px]">
            Nos vemos en abril.
          </p>
        </div>
      )}
    </div>
  );
};

export default ScheduleCallButton;
