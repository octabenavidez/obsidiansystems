import RevealOnScroll from "../common/RevealOnScroll";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Silver gradient style for text
 */
const silverGradientStyle = {
  background:
    "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Silver gradient for borders
 */
const silverGradientBorder =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Card background gradient
 */
const cardBackgroundGradient =
  "linear-gradient(90deg, #0b0b0b, #1c1c1c, #0b0b0b)";

// Helper to format text with Consulting OS™ gradient and "Plazas Cerradas" highlight
const formatTextWithGradient = (text) => {
  if (typeof text !== "string") return text;
  const parts = text.split(
    /(Consulting OS™|Plazas Abiertas|Estamos aceptando nuevos consultores\.)/g,
  );
  return parts.map((part, index) => {
    if (part === "Consulting OS™") {
      return (
        <span key={index} style={silverGradientStyle} className="font-bold">
          Consulting OS™
        </span>
      );
    }
    if (part === "Plazas Abiertas") {
      return (
        <span
          key={index}
          className="rounded-sm px-1 font-bold text-white not-italic"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            boxDecorationBreak: "clone",
          }}
        >
          Plazas Abiertas
        </span>
      );
    }
    if (part === "Estamos aceptando nuevos consultores.") {
      return (
        <span key={index} className="font-bold">
          {part}
        </span>
      );
    }
    return part;
  });
};

/**
 * How To Enter Section component
 * Displays CTA section with silver gradient border
 * @param {Object} props
 * @param {string} props.title - Title text
 * @param {string|string[]} props.description - Description text or array of paragraphs
 * @returns {JSX.Element} Rendered section
 */
const HowToEnterSection = ({
  title = "Cómo entrar a Consulting OS™",
  description = [
    "Si encajás con lo que hacemos, esta puede ser la relación más valiosa que tengas en tu negocio.",
    " Solo trabajo con pocos consultores. Priorizo la calidad sobre la cantidad.",
    "Agenda una llamada conmigo para trabajar conmigo y crear tu plan de acción para escalar.",
  ],
}) => {
  return (
    <section className="px-4 py-24 text-white">
      <div className="mx-auto max-w-[1100px]">
        <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.CLIENTS_HEADER}>
          {/* Card with silver gradient border */}
          <div
            className="rounded-xl p-[2px]"
            style={{ background: silverGradientBorder }}
          >
            <div
              className="flex flex-col items-center justify-center rounded-xl px-8 py-12 text-center md:px-16"
              style={{ background: cardBackgroundGradient }}
            >
              {/* Title */}
              <h2 className="mb-6 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
                {formatTextWithGradient(title)}
              </h2>

              {/* Description */}
              <div className="mx-auto mb-10 flex max-w-[900px] flex-col gap-2 text-[16px] leading-[1.4em] font-light text-white/80 italic md:text-[20px]">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <p key={index}>{formatTextWithGradient(paragraph)}</p>
                  ))
                ) : (
                  <p>{formatTextWithGradient(description)}</p>
                )}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center">
                <ScheduleCallButton
                  href="https://cal.com/fran-di-giorno/admision-obsidian-systems"
                  className="my-0"
                />
                <p className="mt-4 text-center text-xs font-light italic text-white/40 md:text-sm">
                  Nuestras puertas cierran hasta agotar cupos.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default HowToEnterSection;
