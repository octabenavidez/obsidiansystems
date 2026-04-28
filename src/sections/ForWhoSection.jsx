import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
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
 * Muted silver/gray style for secondary text
 */
const mutedTextStyle = {
  color: "#9ca3af",
};

/**
 * Silver gradient for card borders
 */
const silverGradientBorder =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Muted border style
 */
const mutedBorder = "linear-gradient(135deg, #333333, #1a1a1a, #333333)";

/**
 * Card background gradient
 */
const cardBackgroundGradient = "#111111";

/**
 * Check icon with silver circular border
 */
const CheckIcon = () => (
  <div
    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full p-[1.5px]"
    style={{ background: silverGradientBorder }}
  >
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111111]">
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={4}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
);

/**
 * X icon with muted circular border
 */
const XIcon = () => (
  <div
    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full p-[1.5px]"
    style={{ background: mutedBorder }}
  >
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111111]">
      <svg
        className="h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={4}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
);

/**
 * "Para quién es esto" items
 */
const forWhoItems = [
  "Eres un consultor high ticket y hacés entre $10k-$15k/mes.",
  "Eres valioso: tienes habilidades y puedes ayudar a otros a crecer.",
  "Ya tenes clientes y resultados, pero querés conseguir más.",
  "Estás dispuesto a ejecutar y sostener estándares altos durante 4-6 meses aunque duela.",
  "Querés ordenar tu negocio, y escalar quedándote con más ganancia, evitando la complejidad.",
];

/**
 * "Para quién no es esto" items
 */
const notForWhoItems = [
  "Eres principiante: o no eres consultor y no llegaste de forma consistente los $10K USD mensuales.",
  "Necesitás sí o sí una garantía y una promesa para tomar acción, pd: acá no usamos con ninguna de las dos.",
  "No querés comprometerte con tu negocio y buscas una niñera que te haga todo por vos.",
  "Irresponsable e inmaduro: Has trabajado con 7 mentores y “todos ellos” fueron el problema.",
  "Te encanta complicarte la vida: buscando más volumen, más agendas, más equipo (pero menos ganancia).",
];

/**
 * For Who Section component
 * Displays who Consulting OS is for and who it's not for
 * @returns {JSX.Element} Rendered section
 */
const ForWhoSection = () => {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <RevealOnScroll
          direction="up"
          delay={ANIMATION_DELAYS.OBJECTIVES_NEXT_STEPS_TITLE}
        >
          {/* Header */}
          <div className="mb-16 flex flex-col items-center space-y-6 text-center">
            {/* Badge */}
            <GradientBadge className="px-1 text-xl">
              ¿Para quién es?
            </GradientBadge>

            {/* Title */}
            <h2 className="pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
              No somos para todos...
            </h2>

            {/* Description with Consulting OS™ in silver gradient */}
            <p className="font-apple-garamond mx-auto max-w-[1200px] text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
              Pero si estás acá, probablemente no seas como la mayoría.{" "}
              <br className="hidden md:inline" />
              Por eso dejemos en claro para quién es esto y quién debería
              evitarlo por completo:
            </p>
          </div>

          {/* Qualification Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Left Card - Para quién no es esto */}
            <div
              className="h-full rounded-2xl border border-white/10 p-[1.5px]"
              style={{ background: cardBackgroundGradient }}
            >
              <div className="flex h-full flex-col rounded-2xl p-6 md:p-12">
                {/* Card Title */}
                <h3 className="mb-3 text-2xl font-bold text-white/70 italic md:text-4xl">
                  Para quién no es esto...
                </h3>

                {/* Separator line */}
                <div className="mb-6 h-[1px] w-full bg-white/10" />

                {/* Items list */}
                <ul className="space-y-6">
                  {notForWhoItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <XIcon />
                      <span className="text-sm leading-relaxed text-white italic md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-8 text-center text-sm font-light text-white/70 italic md:text-base">
                  Si te sentís identificado con esto, esto no es para ti.
                </p>
              </div>
            </div>

            {/* Right Card - Para quién es esto */}
            <div
              className="flex h-full flex-col rounded-2xl p-[3px] shadow-[0_0_40px_rgba(255,255,255,0.07)]"
              style={{ background: silverGradientBorder }}
            >
              <div
                className="flex h-full flex-col rounded-2xl p-6 md:p-12"
                style={{ background: cardBackgroundGradient }}
              >
                {/* Card Title */}
                <h3
                  className="mb-3 text-2xl font-bold italic md:text-4xl"
                  style={silverGradientStyle}
                >
                  Para quién es esto...
                </h3>

                {/* Separator line */}
                <div
                  className="mb-6 h-[3.5px] w-full"
                  style={{ background: silverGradientBorder }}
                />

                {/* Items list */}
                <ul className="space-y-6">
                  {forWhoItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed font-medium text-white italic md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className="mt-auto pt-8 text-center text-sm font-bold italic md:text-base"
                  style={silverGradientStyle}
                >
                  Si te sentís identificado con esto… Bienvenido.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ForWhoSection;
