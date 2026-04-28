import { useState, useEffect, useRef } from "react";

/**
 * Individual Timeline Step component
 * Renders a single step in the roadmap with appropriate layout based on side
 */
const TimelineStep = ({ step, index, visibility, isActive, stepRef }) => {
  const isCenter = step.side === "center";
  const isLeft = step.side === "left";

  if (isCenter) {
    return (
      <div
        ref={stepRef}
        className="relative py-20 transition-all duration-700"
        style={{
          opacity: visibility,
          transform: `translateY(${(1 - visibility) * 40}px)`,
        }}
      >
        <div className="relative z-10 flex justify-center pl-16 md:pl-0">
          <div
            className={`relative w-full max-w-2xl rounded-xl border-2 bg-black p-8 text-center transition-all duration-500 ${
              isActive
                ? "scale-105 border-[#aca377] shadow-[0_0_40px_rgba(172,163,119,0.5)]"
                : "border-[#aca377]/60"
            }`}
          >
            {/* White background to hide line */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-black"></div>

            <h3 className="mb-3 text-3xl font-bold text-[#aca377] md:text-4xl">
              {step.title}
            </h3>
            <p className="mb-4 text-sm font-medium text-gray-400">
              {step.subtitle}
            </p>
            <p className="text-base leading-relaxed text-white">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={stepRef}
      className="relative py-20 transition-all duration-700"
      style={{
        opacity: visibility,
        transform: `translateY(${(1 - visibility) * 40}px)`,
      }}
    >
      <div className="relative pl-16 md:pl-0">
        {/* Dot - Left on mobile, center on desktop - SAME SIZE ALWAYS */}
        <div className="absolute top-8 left-6 z-20 flex -translate-x-1/2 items-center justify-center md:top-1/2 md:left-1/2 md:-translate-y-1/2">
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-2 bg-black transition-all duration-500 ${
              isActive
                ? "border-[#aca377] shadow-[0_0_20px_rgba(172,163,119,0.8)]"
                : visibility > 0.5
                  ? "border-[#aca377]"
                  : "border-gray-700"
            }`}
          >
            <div
              className={`h-3 w-3 rounded-full transition-all duration-500 ${
                isActive || visibility > 0.5 ? "bg-[#aca377]" : "bg-gray-700"
              }`}
            ></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          {/* Left Side */}
          <div>
            {isLeft && (
              <StepContent
                step={step}
                isActive={isActive}
                visibility={visibility}
                align="right"
              />
            )}
          </div>

          {/* Right Side */}
          <div>
            {!isLeft && (
              <StepContent
                step={step}
                isActive={isActive}
                visibility={visibility}
                align="left"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Helper component for step content to avoid duplication
 */
const StepContent = ({ step, isActive, visibility, align }) => (
  <div
    className={`space-y-4 ${align === "right" ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
  >
    {/* Title Box */}
    <div
      className={`relative overflow-hidden rounded-xl border bg-black p-6 transition-all duration-500 ${
        isActive
          ? "scale-105 border-[#aca377] shadow-[0_0_30px_rgba(172,163,119,0.4)]"
          : visibility > 0.5
            ? "border-[#aca377]/40 hover:border-[#aca377]/70"
            : "border-gray-800"
      }`}
    >
      {/* Background to hide line */}
      <div className="absolute inset-0 -z-10 bg-black"></div>

      <h3
        className={`text-2xl font-bold transition-colors duration-500 md:text-3xl ${
          isActive || visibility > 0.5 ? "text-[#aca377]" : "text-gray-600"
        }`}
      >
        {step.title}
      </h3>
    </div>

    {/* Description Text */}
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-400">{step.subtitle}</p>
      <p className="text-base leading-relaxed text-white">{step.description}</p>
    </div>
  </div>
);

/**
 * Timeline Roadmap component with scroll-triggered progressive animations.
 * Displays a vertical timeline showing the process roadmap with animated line fill.
 * @returns {JSX.Element} Animated timeline component
 */
const TimelineRoadmap = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const timelineSteps = [
    {
      title: "Reset",
      subtitle: "Análisis de sit. actual (negocio - persona)",
      description:
        "Empezamos desde cero. Analizamos tu situación actual, tanto a nivel negocio como personal, para entender dónde estás y hacia dónde quieres ir.",
      side: "center",
    },
    {
      title: "Fundamentos",
      subtitle: "Nicho - Avatar - Oferta - Servicio",
      description:
        "Reforzamos fundamentos de nicho, cliente ideal, tu oferta y organizamos tu entrega de servicio para que sea más simple, dé mejores resultados y puedas delegar lo necesario.",
      side: "left",
    },
    {
      title: "Estrategia",
      subtitle:
        "Creamos tu Adquisición / Conversión adaptada a lo que mejor te funciona.",
      description:
        "Diseñamos tu sistema de adquisición y conversión personalizado, adaptado a tus fortalezas y al mercado que quieres conquistar.",
      side: "right",
    },
    {
      title: "Sistemas",
      subtitle: "Procesos - Operaciones",
      description:
        "Implementamos procesos y sistemas operativos que te permitan escalar sin depender de tu tiempo 24/7.",
      side: "left",
    },
    {
      title: "1a1 semanal de Inputs",
      subtitle: "Revisión 1-1 semanal para iterar con inputs",
      description:
        "Sesiones semanales individuales donde revisamos tus inputs, ajustamos estrategias y te doy feedback directo para acelerar resultados.",
      side: "right",
    },
    {
      title: "1a1 semanal de escalado",
      subtitle: "Revisión 1-1 semanal para afinar procesos del negocio",
      description:
        "Sesiones enfocadas en optimizar y escalar tus procesos, asegurando que tu negocio crezca de forma sostenible y predecible.",
      side: "left",
    },
  ];

  const [stepVisibility, setStepVisibility] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Calculate the height to the last step's dot
      const lastStepRef = stepRefs.current[stepRefs.current.length - 1];
      if (lastStepRef) {
        const lastStepRect = lastStepRef.getBoundingClientRect();
        const timelineContainerTop = timelineRef.current
          .querySelector(".relative.pt-32")
          .getBoundingClientRect().top;
        // Calculate height from container top to the dot position (top-8 on mobile, center on desktop)
        const dotOffset =
          window.innerWidth >= 768 ? lastStepRect.height / 2 : 32; // 32px = top-8
        const calculatedHeight =
          lastStepRect.top - timelineContainerTop + dotOffset;
        setLineHeight(calculatedHeight);
      }

      // Calculate progress (0 to 1)
      const progress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - timelineTop) / (timelineHeight + windowHeight / 2),
        ),
      );

      setScrollProgress(progress);

      // Calculate visibility for each step
      const visibilityArray = stepRefs.current.map((ref, index) => {
        if (!ref) return 0;

        const stepRect = ref.getBoundingClientRect();
        const stepTop = stepRect.top;
        const stepBottom = stepRect.bottom;
        const stepCenter = stepTop + stepRect.height / 2;

        // Check if step is in center (active)
        if (stepCenter < windowHeight / 2 && stepCenter > 0) {
          setActiveStep(index);
        }

        // Calculate visibility percentage based on position in viewport
        // Starts fading in when entering from bottom (80% viewport)
        // Starts fading out when leaving from top (20% viewport)
        if (stepBottom < windowHeight * 0.2) {
          // Element is leaving viewport from top - fade out
          const fadeOutProgress = Math.max(
            0,
            stepBottom / (windowHeight * 0.2),
          );
          return fadeOutProgress;
        } else if (stepTop > windowHeight * 0.8) {
          // Element hasn't entered viewport yet - invisible
          return 0;
        } else if (stepTop > windowHeight * 0.5) {
          // Element is entering from bottom - fade in
          const fadeInProgress =
            1 - (stepTop - windowHeight * 0.5) / (windowHeight * 0.3);
          return Math.max(0, Math.min(1, fadeInProgress));
        } else {
          // Element is fully visible
          return 1;
        }
      });

      setStepVisibility(visibilityArray);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className="mx-auto my-32 max-w-6xl space-y-12 px-6">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Así vas a vivir el proceso desde dentro{" "}
          <span className="text-[#aca377]">"Roadmap 50K"</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative pt-32 pb-20">
        {/* Background line (gray) - Left on mobile, center on desktop */}
        <div
          className="absolute top-0 left-6 w-1 bg-gray-800/50 md:left-1/2 md:-translate-x-1/2"
          style={{
            height: lineHeight > 0 ? `${lineHeight}px` : "100%",
          }}
        ></div>

        {/* Animated progress line - Left on mobile, center on desktop */}
        <div
          className="absolute top-0 left-6 w-1 bg-linear-to-b from-[#aca377] via-[#aca377]/70 to-[#aca377] transition-all duration-300 ease-out md:left-1/2 md:-translate-x-1/2"
          style={{
            height:
              lineHeight > 0
                ? `${(Math.min(scrollProgress * 100, 100) * lineHeight) / 100}px`
                : `${scrollProgress * 100}%`,
          }}
        ></div>

        {/* Timeline Steps */}
        <div className="space-y-0">
          {timelineSteps.map((step, index) => (
            <TimelineStep
              key={index}
              step={step}
              index={index}
              visibility={stepVisibility[index] || 0}
              isActive={activeStep === index}
              stepRef={(el) => (stepRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineRoadmap;
