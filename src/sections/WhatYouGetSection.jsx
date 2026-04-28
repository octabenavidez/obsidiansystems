import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

// Images
import iconProgramOps from "../assets/images/what-you-get-images/icons/apple-imac-2021.svg";
import innerCircleImg from "../assets/images/what-you-get-images/Consulting OS™.png";
import verifiedBadgeImg from "../assets/images/what-you-get-images/7f092f83-da54-4655-8921-cf16e67c1e18.png";
import bonus1Img from "../assets/images/what-you-get-images/bonus1.png";
import ongoingSupportImg from "../assets/images/what-you-get-images/ongoingsupport.jpeg";
import ongoingSupportMobileImg from "../assets/images/what-you-get-images/ongoingsupport_mobile.jpeg";
import bonus3Img from "../assets/images/what-you-get-images/bonus3.png";

// Bottom card icons
import iconBlueprint from "../assets/images/what-you-get-images/icons/width_200 (5).png";
import iconFoundations from "../assets/images/what-you-get-images/icons/width_200 (9).png";
import iconDelivery from "../assets/images/what-you-get-images/icons/width_200 (4).png";
import iconCommunication from "../assets/images/what-you-get-images/icons/width_200 (6).png";
import iconMarketDominance from "../assets/images/what-you-get-images/icons/width_200 (2).png";
import iconMarketing from "../assets/images/what-you-get-images/icons/width_200 (3).png";
import iconAcquisition from "../assets/images/what-you-get-images/icons/width_200 (10).png";
import iconClosing from "../assets/images/what-you-get-images/icons/width_200 (11).png";
import iconHiring from "../assets/images/what-you-get-images/icons/width_200.png";
import iconDelegation from "../assets/images/what-you-get-images/icons/width_200 (1).png";
import iconOperations from "../assets/images/what-you-get-images/icons/width_200 (8).png";

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
 * Silver gradient style for text — light variation for bonus titles
 */
const silverGradientTextLight = {
  background:
    "linear-gradient(135deg, #ffffff, #a0a0a0, #ffffff, #c0c0c0, #ffffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Silver gradient — premium (for Bonus cards: thicker border + glow)
 */
const silverGradientBorderPremium =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Silver gradient for borders
 */
const silverGradientBorder =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Card background gradient
 */
const cardBackgroundGradient =
  "radial-gradient(circle at 0% 0%, #0b0b0b, #111111, #0b0b0b)";

/**
 * Premium inner background for Bonus cards (silver shimmer radial)
 */
const bonusCardBackground =
  "radial-gradient(ellipse at top, #1e1e1e 0%, #111111 60%, #0b0b0b 100%)";

/**
 * Border gradient for icon/image containers
 */
const containerBorderGradient =
  "linear-gradient(90deg, #0b0b0b, #1c1c1c, #0b0b0b)";

/**
 * Extra top cards data (placeholder)
 */
const extraTopCards = [
  {
    image: bonus1Img,
    title: "Planificador de Alto Rendimiento",
    accessLabel: "Bonus 1:",
    description:
      "Sistema de organización que te da claridad absoluta sobre qué ejecutar, cuándo hacerlo y por qué, alineando tareas, prioridades y objetivos financieros.",
  },
  {
    image: bonus3Img,
    title: "OPS Frameworks",
    accessLabel: "Bonus 2:",
    description:
      "Acceso a playbooks probados de generación de leads, ventas, entrega y contratación para reducir errores costosos y acelerar resultados bajo frameworks validados.",
  },
  {
    image: innerCircleImg,
    title: "Inner Circle",
    accessLabel: "Bonus 3:",
    description:
      "Entorno de pares que aprenden, ejecutan y enseñan. Acá solo hay personas que tratan de llegar a la cima juntos.",
    hasImageBorder: true,
  },
  {
    image: ongoingSupportImg,
    mobileImage: ongoingSupportMobileImg,
    title: "Ongoing Support",
    accessLabel: "Bonus 4:",
    description:
      "Seguimiento intensivo con sesiones 1:1 semanales, consultorías ilimitadas adicionales y acceso directo por chat para asegurar progreso constante, mantener el momentum y evitar recaídas.",
  },
];

/**
 * Bottom cards data (with icon images)
 */
const bottomCards = [
  {
    icon: iconBlueprint,
    title: "Blueprint",
    deliverableLabel: "Entregable #1:",
    description:
      "Sesión individual con Fran para crear el paso a paso que vamos a seguir durante los meses del programa.",
  },
  {
    icon: iconFoundations,
    title: "Foundations Method",
    deliverableLabel: "Entregable #2:",
    description:
      "Reforzamos tus fundamentos de nicho, avatar, oferta y posicionamiento.",
  },
  {
    icon: iconDelivery,
    title: "Delivery System",
    deliverableLabel: "Entregable #3:",
    description:
      "Estandarización de la entrega de servicio para dar mejores resultados de forma más simple. Sin sacrificar calidad.",
  },
  {
    icon: iconCommunication,
    title: "Communication Angles",
    deliverableLabel: "Entregable #4:",
    description:
      "Creación de ángulos alineados a tu mensaje, ideología y dolores de tu cliente ideal para aumentar resonancia y autoridad.",
  },
  {
    icon: iconMarketDominance,
    title: "Market Dominance",
    deliverableLabel: "Entregable #5:",
    description:
      "Definición clara de tu dominio en el mercado y contra qué competís (según tu ética y valores).",
  },
  {
    icon: iconMarketing,
    title: "Marketing Ecosystem",
    deliverableLabel: "Entregable #6:",
    description:
      "Plan claro de qué contenido crear en cada medio y en qué orden para atraer clientes premium.",
  },
  {
    icon: iconAcquisition,
    title: "Acquisition System",
    deliverableLabel: "Entregable #7:",
    description:
      "Creación de un sistema personalizado de generación de leads basado en tus fortalezas y resultados.",
  },
  {
    icon: iconClosing,
    title: "Closing Leads Method",
    deliverableLabel: "Entregable #8:",
    description:
      "Proceso de cierre claro adaptado para vender sin presión falsa, manipulación, ni calls extremadamente largos.",
  },
  {
    icon: iconHiring,
    title: "Hiring Process",
    deliverableLabel: "Entregable #9:",
    description:
      "Sistema para atraer, evaluar y contratar a las personas correctas sin perder tiempo ni bajar estándares.",
  },
  {
    icon: iconDelegation,
    title: "Delegation Framework",
    deliverableLabel: "Entregable #10:",
    description:
      "Identificación de qué delegar, cuándo y a quién, sin perder control y manteniendo un alto rendimiento de todos en tu empresa.",
  },
  {
    icon: iconOperations,
    title: "Operations Arc",
    deliverableLabel: "Entregable #11:",
    description:
      "Incluye instalación de sistemas, automatizaciones, CRM, métricas, etc. Para que tomes mejores decisiones basadas en números.",
  },
  {
    icon: iconProgramOps,
    title: "Program OPS 50K",
    deliverableLabel: "Entregable #12:",
    description:
      "+10hs de contenido y 115 entregables para solucionar tus futuros problemas. (0 relleno, todo es accionable)",
  },
];

/**
 * Top Card Component (with image)
 */
const TopCard = ({
  image,
  title,
  accessLabel,
  description,
  hasImageBorder,
}) => (
  <div
    className="group relative rounded-xl p-[3px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.12)]"
    style={{ background: silverGradientBorderPremium }}
  >
    <div
      className="flex h-full flex-col rounded-xl p-4 md:p-8"
      style={{ background: bonusCardBackground }}
    >
      {/* Image */}
      {hasImageBorder ? (
        <div
          className="relative mb-4 rounded-lg p-[1.5px]"
          style={{ background: containerBorderGradient }}
        >
          <div
            className="flex h-56 items-center justify-center rounded-lg md:h-44"
            style={{ background: cardBackgroundGradient }}
          >
            <div
              className="overflow-hidden rounded-full p-[2px]"
              style={{ background: silverGradientBorder }}
            >
              <img
                src={image}
                alt={title}
                className="h-20 w-20 rounded-full object-cover md:h-32 md:w-32"
              />
            </div>
          </div>
          {/* Verified badge */}
          <img
            src={verifiedBadgeImg}
            alt="Verified"
            className="absolute top-7 right-[calc(50%-70px)] h-8 w-8"
          />
        </div>
      ) : (
        <div
          className="mb-4 rounded-lg p-[1.5px]"
          style={{ background: containerBorderGradient }}
        >
          <div
            className="overflow-hidden rounded-lg"
            style={{ background: cardBackgroundGradient }}
          >
            <img
              src={image}
              alt={title}
              className="h-56 w-full object-cover md:h-44"
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h3
        className="mb-2 pb-1 text-lg font-bold md:text-3xl"
        style={silverGradientTextLight}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed font-extralight text-white/80 italic md:text-lg">
        <span style={silverGradientTextLight} className="font-bold italic">
          {accessLabel}
        </span>{" "}
        {description}
      </p>
    </div>
  </div>
);

/**
 * Bottom Card Component (with icon image)
 */
const BottomCard = ({
  icon,
  image,
  title,
  deliverableLabel,
  description,
  isImage,
  hasImageBorder,
}) => (
  <div
    className="rounded-xl p-[1.5px] opacity-80 transition-opacity duration-300"
    style={{ background: silverGradientBorder }}
  >
    <div className="flex h-full flex-col rounded-xl bg-[#111111] p-4 md:p-6">
      {/* Icon or Image with gradient border and background */}
      {isImage ? (
        hasImageBorder ? (
          <div
            className="relative mb-4 rounded-lg p-[1.5px]"
            style={{ background: containerBorderGradient }}
          >
            <div
              className="flex h-56 items-center justify-center rounded-lg md:h-44"
              style={{ background: cardBackgroundGradient }}
            >
              <div
                className="overflow-hidden rounded-full p-[2px]"
                style={{ background: silverGradientBorder }}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-20 w-20 rounded-full object-cover md:h-32 md:w-32"
                />
              </div>
            </div>
            {/* Verified badge */}
            <img
              src={verifiedBadgeImg}
              alt="Verified"
              className="absolute top-7 right-[calc(50%-70px)] h-8 w-8"
            />
          </div>
        ) : (
          <div
            className="mb-4 rounded-lg p-[1.5px]"
            style={{ background: containerBorderGradient }}
          >
            <div
              className="overflow-hidden rounded-lg"
              style={{ background: cardBackgroundGradient }}
            >
              <img
                src={image}
                alt={title}
                className="h-56 w-full object-cover md:h-44"
              />
            </div>
          </div>
        )
      ) : (
        <div
          className="mb-4 rounded-lg p-[1.5px]"
          style={{ background: containerBorderGradient }}
        >
          <div
            className="flex h-56 items-center justify-center rounded-lg md:h-44"
            style={{ background: cardBackgroundGradient }}
          >
            <img src={icon} alt={title} className="h-16 w-16 md:h-24 md:w-24" />
          </div>
        </div>
      )}

      {/* Title */}
      <h3
        className="mb-2 text-lg font-bold md:text-2xl"
        style={silverGradientStyle}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed font-extralight text-white/80 italic md:text-lg">
        <span className="font-bold text-white italic">{deliverableLabel}</span>{" "}
        {description}
      </p>
    </div>
  </div>
);

/**
 * What You Get Section component
 * Displays what's included in Consulting OS
 * @returns {JSX.Element} Rendered section
 */
const WhatYouGetSection = () => {
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
              Esto obtendrás
            </GradientBadge>

            {/* Title */}
            <h2 className="pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
              Qué Obtendrás dentro de
              <br />
              <span style={silverGradientStyle} className="font-bold">
                Consulting OS™
              </span>
            </h2>

            {/* Description */}
            <p className="font-apple-garamond mx-auto max-w-[900px] text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
              0 relleno. 0 funnels raros. Solo metodologías, estructuras y
              acompañamiento directo de alguien que realmente lo está
              ejecutando.
            </p>
          </div>

          {/* Bottom Row - Cards with SVG icons */}
          <div className="mx-auto grid max-w-[320px] grid-cols-1 gap-3 md:max-w-none md:grid-cols-3 md:gap-6">
            {bottomCards.map((card, index) => (
              <BottomCard key={index} {...card} />
            ))}
          </div>

          {/* Bonus Card header */}
          <div className="mx-auto mt-8 max-w-[320px] md:max-w-none">
            <div
              className="rounded-xl p-[3px] shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              style={{ background: silverGradientBorderPremium }}
            >
              <div className="rounded-xl bg-[#111111] py-6 text-center">
                <h3
                  className="mb-3 text-xl font-bold tracking-wide md:text-3xl"
                  style={silverGradientTextLight}
                >
                  Bonus de programa
                </h3>
              </div>
            </div>
          </div>

          {/* Extra Top Cards (First 3) */}
          <div className="mx-auto mt-8 grid max-w-[320px] grid-cols-1 gap-3 md:max-w-none md:grid-cols-3 md:gap-6">
            {extraTopCards.slice(0, 3).map((card, index) => (
              <TopCard key={`extra-${index}`} {...card} />
            ))}
          </div>

          {/* Full Width 4th Bonus */}
          <div className="mx-auto mt-4 max-w-[320px] md:mt-6 md:max-w-none">
            <div
              className="rounded-xl p-[3px] shadow-[0_0_30px_rgba(255,255,255,0.07)]"
              style={{ background: silverGradientBorderPremium }}
            >
              <div className="flex flex-col items-center gap-6 rounded-xl bg-[#111111] p-6 lg:p-8">
                {/* Image Section */}
                <div className="w-full">
                  <div
                    className="h-full rounded-lg p-[1.5px]"
                    style={{ background: containerBorderGradient }}
                  >
                    <div
                      className="h-full overflow-hidden rounded-lg"
                      style={{ background: cardBackgroundGradient }}
                    >
                      {extraTopCards[3].mobileImage && (
                        <img
                          src={extraTopCards[3].mobileImage}
                          alt={extraTopCards[3].title}
                          className="block h-64 w-full object-cover md:hidden"
                        />
                      )}
                      <img
                        src={extraTopCards[3].image}
                        alt={extraTopCards[3].title}
                        className={`w-full object-cover md:h-80 lg:h-96 ${extraTopCards[3].mobileImage ? "hidden md:block" : "h-64"}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex w-full flex-col justify-center pt-2 text-left md:pt-4">
                  <h3
                    className="mb-3 pb-2 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl"
                    style={silverGradientTextLight}
                  >
                    {extraTopCards[3].title}
                  </h3>
                  <p className="text-lg leading-relaxed font-extralight text-white/80 italic md:text-xl lg:text-2xl">
                    <span
                      style={silverGradientTextLight}
                      className="pr-2 font-bold italic"
                    >
                      {extraTopCards[3].accessLabel}
                    </span>
                    {extraTopCards[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Limit Text */}
          <p className="mx-auto mt-12 max-w-[320px] text-center text-xl font-extralight text-white/80 italic md:max-w-none">
            P.D. Apenas te unas, tendrás acceso a todo: desde los entregables
            hasta los bonuses de forma instantánea.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
