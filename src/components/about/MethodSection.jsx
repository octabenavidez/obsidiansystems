import RevealOnScroll from "../../common/RevealOnScroll";
import { Check } from "lucide-react";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Method Section component
 * Explains the SSE (Simplify, Systematize, Scale) method
 * @returns {JSX.Element} Rendered method section
 */
const MethodSection = () => {
  return (
    <>
      {/* === SSE Method Section === */}
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.ABOUT_METHOD}>
        <div className="mx-auto mt-26 max-w-4xl space-y-6">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold text-white md:text-5xl">
            El Método SSE:
            <br />
            <span className="text-[#aca377]">
              Simplificar → Sistematizar → Escalar
            </span>
          </h2>

          {/* Steps */}
          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/5 to-black p-5 transition-all duration-300 hover:border-[#aca377]/60">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-[#aca377] md:text-3xl">
                    Simplificar (Fundamentos y Entrega)
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 md:text-lg">
                    Optimizamos la oferta, el posicionamiento y la entrega para
                    que los fundamentos del negocio sean simples, claros y
                    rentables.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#aca377] px-3 py-1 text-xs font-bold text-black">
                  PASO 1
                </span>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/5 to-black p-5 transition-all duration-300 hover:border-[#aca377]/60">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-[#aca377] md:text-3xl">
                    Sistematizar (Adquisición & Ventas)
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 md:text-lg">
                    Creamos un sistema de adquisición y ventas adaptado al
                    negocio, con pasos claros para generar y cerrar
                    oportunidades todos los meses.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#aca377] px-3 py-1 text-xs font-bold text-black">
                  PASO 2
                </span>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative overflow-hidden rounded-xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/5 to-black p-5 transition-all duration-300 hover:border-[#aca377]/60">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-[#aca377] md:text-3xl">
                    Escalar (Con Procesos y Sistemas)
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 md:text-lg">
                    Documentamos procesos, delegamos tareas y montamos sistemas
                    para aumentar facturación sin depender de más horas tuyas.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#aca377] px-3 py-1 text-xs font-bold text-black">
                  PASO 3
                </span>
              </div>
            </div>
          </div>

          {/* Footer Text */}
          <div className="space-y-2 pt-4 text-center">
            <p className="text-sm text-gray-400 md:text-base">
              Escalar no es hacer más.
            </p>
            <p className="text-base font-medium text-white md:text-lg">
              Es hacer lo <span className="text-[#aca377]">correcto</span> en el
              orden <span className="text-[#aca377]">correcto</span>.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </>
  );
};

export default MethodSection;
