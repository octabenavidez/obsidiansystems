import { useState } from "react";
import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Silver gradient for borders
 */
const silverGradientBorder = "var(--color-silver-gradient)";

/**
 * Card background gradient
 */
const cardBackgroundGradient =
  "linear-gradient(90deg, #0b0b0b, #1c1c1c, #0b0b0b)";

/**
 * FAQ data
 */
const faqItems = [
  {
    question: "¿Qué tan rápido veré resultados?",
    answer:
      "El primer mes ya se ven los primeros resultados mientras instalamos todos los sistemas. A partir del segundo mes, y especialmente entre el mes 3 y 4, los resultados crecen de forma exponencial para quien ejecuta de manera consistente.",
  },
  {
    question: "¿Qué pasa si no tengo una marca personal activa?",
    answer:
      "No necesitás mucha audiencia ni tráfico. Sí necesitás al menos un sistema de adquisición funcionando. Tengo clientes con 1.000 seguidores facturando 40k. Esto no va de likes, va de aprovechar tus fortalezas y mejorar tu oferta.",
  },
  {
    question: "¿Cuánto tiempo debo dedicare para obtener resultados?",
    answer:
      "Es tu negocio. Yo me comprometo al máximo. Espero lo mismo de tu parte. El nivel de resultados siempre es proporcional al nivel de compromiso.",
  },
  {
    question: "¿Hay garantías o reembolsos?",
    answer:
      "No hay garantías ni reembolsos, solo trabajo con personas seguras de sí mismas. El que duda o avanza a medias sabotea el proceso y su inversión. Acá se entra a ejecutar, no a hacerse la víctima.",
  },
  {
    question: "¿Qué tan personalizada es la consultoría?",
    answer:
      "No es un curso ni una biblioteca de recursos. El valor NO está en los SOP's, sino en el trabajo 1 a 1 y metodologías que aplico sobre tu negocio. Todo se diseña según tu contexto, con acompañamiento 1-1 e iteración constante.",
  },
];

/**
 * FAQ Accordion Item component
 * @param {Object} props - Component properties
 * @param {string} props.question - FAQ question
 * @param {string} props.answer - FAQ answer
 * @param {boolean} props.isOpen - Whether the item is expanded
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element} Rendered accordion item
 */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="rounded-xl p-[1.5px] transition-all duration-300"
      style={{ background: silverGradientBorder }}
    >
      <div
        className="rounded-xl"
        style={{ background: cardBackgroundGradient }}
      >
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-light text-white md:text-2xl">
            {question}
          </span>
          <span
            className="ml-4 text-2xl text-white/60 transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="px-6 pb-5 text-base leading-relaxed font-extralight text-white/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * FAQ Section component
 * Displays frequently asked questions with accordion
 * @returns {JSX.Element} Rendered FAQ section
 */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 pt-16 text-white">
      <div className="mx-auto max-w-[1100px]">
        <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.CLIENTS_HEADER}>
          <div className="flex flex-col items-center space-y-6 text-center">
            {/* Badge */}
            <GradientBadge variant="silver" className="px-6 text-xl">
              FAQ
            </GradientBadge>

            {/* Title */}
            <h2 className="text-gradient-silver pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
              Preguntas frecuentes
            </h2>

            {/* Description */}
            <p className="font-apple-garamond mx-auto max-w-[740px] text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
              Hemos respondido a las preguntas más comunes a continuación para
              que tomes una decisión clara y racional.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mt-12 flex flex-col gap-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FAQSection;
