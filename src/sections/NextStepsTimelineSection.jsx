import { useRef, useState, useEffect } from "react";
import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Next Steps Timeline section data
 */
const nextStepsData = {
  steps: [
    {
      number: "01",
      badge: "Primer paso",
      title: "Simplificar",
      description: (
        <>
          <p>
            Empezamos con una sesión 1:1 enfocada en analizar lo que has
            construido hasta ahora, para luego armar el plan exacto que
            seguiremos durante todo el programa para alcanzar tus objetivos.
          </p>
          <p>
            Apenas entres, activaremos nuestras estrategias de resultados
            rápidos para traerte leads, clientes y efectivo desde el inicio,
            asegurando un ROI lo suficientemente fuerte como para cubrir el pago
            de Consulting OS durante todo un año.
          </p>
          <p>
            Usaremos nuestra metodología de fundamentos para hacer tu oferta tan
            poderosa que prácticamente se vuelva: fácil de entender, fácil de
            comprar y fácil de entregar.
          </p>
          <p>
            Combinando entrenamientos y sesiones 1:1 afinaremos tu mensaje,
            posicionamiento, sistemas de ventas, entrega y estructuras
            operativas hasta que tu negocio funcione como si fuera una MacBook
            recién salida de la tienda: sellada y con tremendo potencial.
          </p>
          <p>
            Eso es la Fase 1: todo el primer mes acumulando victorias, orden y
            estructuras, para que el dinero que entre en tu cuenta haga que
            Consulting OS, en la práctica, se pague solo.
          </p>
        </>
      ),
    },
    {
      number: "02",
      badge: "Segundo paso",
      title: "Sistematizar",
      description: (
        <>
          <p>
            Ahora que ya instalamos todo y probablemente Consulting OS ya esté
            pagado, es momento de volvernos proactivos.
          </p>
          <p>
            Ya sin distracciones, activamos el ecosistema completo que diseñamos
            en la primera fase: oferta afilada, posicionamiento y sistemas de
            adquisición, conversión y entrega trabajando sin que nadie los
            frene. Los leads empiezan a llegar con más consistencia, las ventas
            se vuelven predecibles y el negocio deja de depender de picos
            aislados.
          </p>
          <p>Aquí no te dejamos ejecutando solo.</p>
          <p>
            Tendrás una sesión 1:1 por semana con Fran para aumentar claridad,
            enfoque y productividad mientras corren los sistemas. Además,
            accedes a Program OPS 50K: más de 10 horas de contenido y 115
            entregables diseñados para resolver los problemas que
            inevitablemente aparecen cuando creces. No hay relleno, ni soy yo
            leyendo documentos pelados, todo es accionable.
          </p>
          <p>
            Y si surge un bloqueo, no esperas a la siguiente llamada. Tienes
            consultorías ilimitadas con Fran cuando lo necesites y seguimiento
            continuo por chat durante todo el programa.
          </p>
          <p>
            Eso es la Fase 2: ejecutar con acompañamiento y convertir tu negocio
            en un sistema predecible, optimizado y que crece de forma
            exponencial.
          </p>
        </>
      ),
    },
    {
      number: "03",
      badge: "Tercer paso",
      title: "Escalar",
      description: (
        <>
          <p>
            Con todos los sistemas instalados y ejecutándose, ahora nos
            enfocamos en maximizar tus resultados.
          </p>
          <p>
            Aquí el objetivo es subir tu estándar de ejecución y optimizar lo
            que ya te está funcionando: aumentamos el volumen, mejoramos
            márgenes y empezamos a tomar decisiones basadas en datos, no en
            intuición.
          </p>
          <p>
            Tendrás guía personal mía todas las semanas. Seguiré desde cerca tu
            progreso, celebraremos cada resultado y ajustaremos la estrategia
            cuando sea necesario para mantener el momentum.
          </p>
          <p>
            Ya tienes todo el sistema creado. Tus playbooks de contenido, leads,
            ventas y entrega están instalados. No hace falta reinventar nada
            nuevo: solo ejecutar, mejorar y escalar sobre la estructura que está
            funcionando.
          </p>
          <p>
            El objetivo es claro: cerrar el programa con un negocio que te
            brinde la estructura y la claridad exacta para que puedas crecer de
            forma sostenida disfrutando el proceso.
          </p>
          <p>Eso es la Fase 3: escalar liderando un negocio que amas.</p>
        </>
      ),
    },
  ],
  ctaUrl: "https://cal.com/fran-di-giorno/admision-obsidian-systems",
};

// Common silver gradient style for text
const silverGradientStyle = {
  background:
    "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/**
 * Silver gradient for card borders
 */
const silverGradientBorder =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Card background gradient
 */
const cardBackgroundGradient =
  "linear-gradient(90deg, #0b0b0b, #1c1c1c, #0b0b0b)";

/**
 * Animated Connector Line component - Progressively fills as user scrolls through the line
 * @param {Object} props - Component properties
 * @param {number} props.index - Step index for unique identification
 * @returns {JSX.Element} Rendered animated connector line
 */
const AnimatedConnectorLine = ({ index }) => {
  const lineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    /**
     * Handles scroll to calculate and update line progress
     * The progress is calculated based on how much of the line has been "scrolled through"
     */
    const handleScroll = () => {
      const rect = line.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The trigger point where we start measuring progress (center of screen)
      const triggerPoint = windowHeight * 0.5;

      // Progress is based on how far the trigger point has traveled through the line
      // When line.top is at trigger point, progress = 0%
      // When line.bottom is at trigger point, progress = 100%
      if (rect.top >= triggerPoint) {
        // Line hasn't reached the trigger point yet
        setProgress(0);
      } else if (rect.bottom <= triggerPoint) {
        // Line has completely passed the trigger point
        setProgress(100);
      } else {
        // Calculate progress based on how far through the line we've scrolled
        const lineHeight = rect.height;
        const distanceTraveled = triggerPoint - rect.top;
        const calculatedProgress = Math.min(
          100,
          Math.max(0, (distanceTraveled / lineHeight) * 100),
        );
        setProgress(calculatedProgress);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className="relative mt-4 mb-6 w-[6px] grow overflow-hidden md:mt-5 md:mb-10"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "3px",
      }}
    >
      {/* Animated progress fill */}
      <div
        className="absolute top-0 left-0 w-full transition-all duration-150 ease-out"
        style={{
          height: `${progress}%`,
          background:
            "linear-gradient(180deg, #ffffff, #8c8c8c, #ffffff, #7a7a7a, #ffffff)",
          borderRadius: "3px",
          boxShadow:
            progress > 0
              ? "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)"
              : "none",
        }}
      />
    </div>
  );
};

/**
 * Individual Step Card component - Vertical timeline with info card
 * Uses scroll-based progressive opacity for smooth reveal/hide effect
 * @param {Object} props - Component properties
 * @param {string} props.number - Step number (e.g., "01", "02", "03")
 * @param {string} props.badge - Badge text (e.g., "Primer paso")
 * @param {string} props.title - Step title
 * @param {string} props.description - Step description
 * @param {number} props.index - Step index for connector line
 * @param {number} props.totalSteps - Total number of steps
 * @returns {JSX.Element} Rendered step card
 */
const StepCard = ({ number, badge, title, description, index, totalSteps }) => {
  const isLast = index === totalSteps - 1;
  const cardRef = useRef(null);
  const hasBeenSeen = useRef(false);
  const [visibility, setVisibility] = useState({ opacity: 0, y: 50 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    /**
     * Handles scroll to calculate progressive opacity and transform
     * Cards fade in when entering from bottom, stay visible once seen,
     * and only fade out when scrolling back up (exiting from bottom of viewport)
     */
    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Entry zone: element enters from bottom of viewport
      const entryStart = windowHeight * 0.95; // Start fading in at 95% of viewport
      const entryEnd = windowHeight * 0.6; // Fully visible at 60% of viewport

      let opacity = 0;
      let y = 50;

      if (rect.top >= entryStart) {
        // Card is below viewport
        // Only show as hidden if it hasn't been seen yet OR if user is scrolling back up
        opacity = 0;
        y = 50;
        // Reset hasBeenSeen if card goes completely below viewport (user scrolled up)
        hasBeenSeen.current = false;
      } else if (rect.top > entryEnd && rect.top < entryStart) {
        // Card is entering - fade in progressively
        const entryProgress = (entryStart - rect.top) / (entryStart - entryEnd);
        opacity = Math.min(1, Math.max(0, entryProgress));
        y = 50 * (1 - entryProgress);
      } else {
        // Card has entered and is fully visible
        opacity = 1;
        y = 0;
        hasBeenSeen.current = true;
      }

      setVisibility({ opacity, y });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Split number into "0" and the second digit
  const zeroDigit = number.charAt(0);
  const secondDigit = number.charAt(1);

  return (
    <div
      ref={cardRef}
      className="flex w-full items-stretch gap-6 transition-all duration-150 ease-out min-[1440px]:relative min-[1440px]:block md:gap-16"
      style={{
        opacity: visibility.opacity,
        transform: `translateY(${visibility.y}px)`,
      }}
    >
      {/* Left side - Number and connector line */}
      <div className="flex w-16 shrink-0 flex-col items-center min-[1440px]:absolute min-[1440px]:top-0 min-[1440px]:left-[calc(50%-550px-162px)] min-[1440px]:h-full md:w-28">
        {/* Step Number - All in silver gradient */}
        <div className="py-4 text-4xl font-bold md:py-5 md:text-7xl lg:text-8xl">
          <span style={silverGradientStyle}>{zeroDigit}</span>
          <span style={silverGradientStyle}>{secondDigit}</span>
        </div>

        {/* Vertical connector line with progress animation */}
        {!isLast && <AnimatedConnectorLine index={index} />}
      </div>

      {/* Right side - Info Card */}
      <div className="flex-1 pb-16 min-[1440px]:mx-auto min-[1440px]:max-w-[1100px] min-[1440px]:flex-none md:pb-24 lg:pb-32">
        <div
          className="w-full rounded-xl p-[2px]"
          style={{ background: silverGradientBorder }}
        >
          <div
            className="relative rounded-xl p-5 md:p-8"
            style={{ background: cardBackgroundGradient }}
          >
            {/* Badge - Silver gradient border */}
            <div
              className="mb-4 inline-block rounded-full p-[1px] md:mb-5"
              style={{ background: silverGradientBorder }}
            >
              <span className="block rounded-full bg-[#0a0a0a]/90 px-3 py-1 text-xs font-light text-white/80 italic md:px-4 md:py-1.5 md:text-base">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-light text-white md:mb-4 md:text-3xl lg:text-4xl">
              {title}
            </h3>

            {/* Description */}
            <div className="space-y-4 text-sm leading-relaxed font-extralight text-white/80 md:text-lg lg:text-xl">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Next Steps Timeline Section component
 * Displays the 3-step process for working together
 * @returns {JSX.Element} Rendered next steps timeline section
 */
const NextStepsTimelineSection = () => {
  const { title, subtitle, steps, ctaUrl } = nextStepsData;

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px] space-y-10">
        <RevealOnScroll
          direction="up"
          delay={ANIMATION_DELAYS.OBJECTIVES_NEXT_STEPS_TITLE}
        >
          <div>
            {/* Header */}
            <div className="mb-16 flex flex-col items-center text-center">
              <GradientBadge className="px-[10px] py-[6px]">
                La Metodología
              </GradientBadge>
              <h2
                className="mt-6 pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Consulting OS™
              </h2>
              <p className="mb-4 text-2xl font-bold text-white/90 md:text-5xl">
                3 simples pasos
              </p>
              <p className="font-apple-garamond mx-auto text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
                Esto es lo que haremos. El plan es simple:
              </p>
            </div>

            {/* Steps - Vertical timeline with info cards */}
            <div className="mx-auto flex max-w-[1200px] flex-col gap-0">
              {steps.map((step, i) => (
                <StepCard
                  key={i}
                  number={step.number}
                  badge={step.badge}
                  title={step.title}
                  description={step.description}
                  index={i}
                  totalSteps={steps.length}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default NextStepsTimelineSection;
