import React from "react";
import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * ObjectiveSection component
 * Displays the main objective with a badge and title, mimicking the styling
 * of ClientsHeader.
 * @returns {JSX.Element} Rendered objective section component
 */
const ObjectiveSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.CLIENTS_HEADER}>
        <div className="mb-16 flex flex-col items-center space-y-6 pt-28 text-center text-white">
          {/* Badge */}
          <GradientBadge variant="silver" className="px-6 text-xl">
            Objetivo
          </GradientBadge>

          {/* Title */}
          <h2 className="pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
            ¿Cuál es el objetivo?
          </h2>

          {/* Description */}
          <div className="font-apple-garamond mx-auto mt-8 max-w-[1090px] space-y-6 text-center text-[18px] leading-[1.4em] font-light text-white italic md:space-y-8 md:text-[24px]">
            <p>
              El objetivo es simple: ayudarte a romper la barrera de los
              $20k-$30k/mes de tu consultoría con la estructura y claridad que
              necesitas para que escalar sea un proceso ordenado, predecible y
              alineado a tu manera de hacer las cosas.
            </p>
            <p>
              Así que, si tienes una consultoría, y esto te parece un buen
              resultado… estás en el lugar correcto.
              <br className="hidden md:block" />
              Porque seamos honestos un momento.
            </p>
            <p>
              Yo sé muy bien que NO querés un negocio ENORME y COMPLEJO.
              <br className="hidden md:block" />
              Queres tener una buena vida… pero con un negocio rentable que la
              financie.
            </p>
            <p>
              Así que déjame ayudarte a crearlo este 2026… ¿dale? <br />
              Presta mucha atención a esto (importa más de lo que parece)
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ObjectiveSection;
