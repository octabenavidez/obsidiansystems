import RevealOnScroll from "../../common/RevealOnScroll";
import { Check } from "lucide-react";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Story Section component
 * Tells the founder's story and the "why" behind the method
 * @param {Object} props - Component properties
 * @param {string} props.image1 - URL for the first image (Francisco)
 * @param {string} props.image2 - URL for the second image (Working)
 * @param {string} props.overlayImage - URL for the overlay image (Systems)
 * @returns {JSX.Element} Rendered story section
 */
const StorySection = ({ image1, image2, overlayImage }) => {
  return (
    <section className="mx-auto my-16 space-y-4">
      {/* Title */}
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.ABOUT_STORY_TITLE}>
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          Antes de enseñarte mi método,{" "}
          <span className="text-[#aca377]">
            déjame contarte por qué funciona.
          </span>
        </h2>
      </RevealOnScroll>

      {/* Story Block 1 */}
      <div className="grid gap-6 md:grid-cols-[400px_1fr] md:items-center md:gap-8 lg:grid-cols-[450px_1fr]">
        <RevealOnScroll
          direction="right"
          delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK}
        >
          <div className="relative mx-auto h-80 w-full overflow-hidden rounded-xl border border-[#aca377]/30 shadow-[0_0_20px_rgba(172,163,119,0.1)] md:h-[420px]">
            <img
              src={image1}
              alt="Francisco Di Giorno"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          direction="left"
          delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK + 0.1}
        >
          <div className="space-y-4 text-base text-gray-300 md:text-lg lg:text-xl">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Francisco Di Giorno
            </h3>
            <p>
              Hace un año tenía lo que muchos llaman{" "}
              <span className="font-bold text-white">"éxito"</span>. Agencia,
              coaching, lanzamientos...
            </p>
            <p>
              <span className="text-[#aca377]">
                Y aun así trabajaba 12-14 hs al día, todos los días.
              </span>{" "}
              El negocio dependía exclusivamente de mí.
            </p>
            <p>
              Tenía poco margen, cero libertad y un pensamiento que me
              perseguía:{" "}
              <span className="text-white italic">
                "¿Vale trabajar todo el día para avanzar tan poco?"
              </span>
            </p>
            <p className="font-bold text-white">Justo ahí toqué fondo.</p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Transition */}
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK}>
        <div className="rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-5 text-center md:p-6">
          <p className="text-base font-medium text-gray-200 md:text-lg">
            Fue el momento exacto en que me di cuenta:{" "}
            <span className="mt-2 block font-bold text-red-400">
              No importaba cuánto trabajara... el negocio no escalaba.
            </span>
          </p>
        </div>
      </RevealOnScroll>

      {/* Story Block 2 */}
      <div className="grid gap-6 md:grid-cols-[1fr_400px] md:items-center md:gap-8 lg:grid-cols-[1fr_450px]">
        <RevealOnScroll
          direction="right"
          delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK}
        >
          <div className="space-y-4 text-base text-gray-300 md:text-lg lg:text-xl">
            <p>
              En ese caos, conocí a un mentor de Estados Unidos que me enseñó a
              crear
              <span className="text-[#aca377]">
                {" "}
                equipos, procesos, automatizaciones... todo.
              </span>
            </p>
            <p className="font-bold text-white">Y me voló la cabeza.</p>
            <p>Me tardé meses en tener los mejores sistemas.</p>
            <p>
              Pero me faltaba lo único que realmente hace que un negocio escale:{" "}
              <span className="font-bold text-white">
                Un motor de adquisición y una oferta fuerte.
              </span>
            </p>
            <p>
              Y en ese momento lo entendí:{" "}
              <span className="font-bold text-red-400">
                Los sistemas NO iban a salvar mi negocio.
              </span>
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll
          direction="left"
          delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK + 0.1}
        >
          <div className="relative mx-auto w-full">
            {/* Main Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-xl border border-[#aca377]/30 shadow-[0_0_20px_rgba(172,163,119,0.1)] md:h-[420px]">
              <img
                src={image2}
                alt="Francisco trabajando"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlay Image - Sistemas */}
            <div className="absolute -right-6 -bottom-6 z-10 h-32 w-auto md:-left-24 md:h-40">
              <img
                src={overlayImage}
                alt="Sistemas Consulting OS™"
                className="h-full w-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Realization Block */}
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK}>
        <div className="space-y-5 rounded-2xl border border-[#aca377]/20 bg-gradient-to-b from-[#aca377]/5 to-transparent p-6 md:p-8">
          <div className="space-y-3 text-center text-sm text-gray-300 md:text-base">
            <p>
              Por mucho tiempo pensé que mi problema era el burnout, la falta de
              tiempo…{" "}
              <span className="font-bold text-white">
                Pero no. Esos eran solo síntomas.
              </span>
            </p>
            <p className="mx-auto max-w-3xl">
              El verdadero problema fue haber creído que podía escalar
              arreglando la OPERACIÓN antes de arreglar mi ADQUISICIÓN y mis
              FUNDAMENTOS.
            </p>
          </div>

          <div className="mx-auto mb-10 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="mb-2 text-sm font-bold text-white md:text-base">
              Ese mismo error frena hoy a casi todos los consultores B2B:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-left text-xs text-gray-300 md:text-sm">
              {[
                "Más SOPs",
                "Un COO",
                "Automatizar todo",
                "Más complejidad",
                "Construir antes de lanzar",
                "Backend gigante",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-red-400">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-white md:text-xl">
              Pero la verdad es simple:{" "}
              <span className="text-[#aca377]">
                Si tu oferta y tu adquisición están rotas, tu negocio entero
                está roto.
              </span>
            </h3>
          </div>

          <div className="space-y-3 text-center text-sm text-gray-300 md:text-base">
            <p>
              Tuve que vivir esto para abrir los ojos. Yo nunca había sido el
              problema.{" "}
              <span className="block font-bold text-white">
                Sino el estar descuidando lo único que mueve la aguja en los
                negocios.
              </span>
            </p>
            <p>
              No necesitaba más sistemas ni automatizaciones complejas.
              Necesitaba:
            </p>
            <ul className="mx-auto grid max-w-md grid-cols-1 gap-1.5 text-left font-medium text-white md:grid-cols-3">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-[#aca377]" />{" "}
                <span className="text-xs md:text-sm">
                  Simplificar fundamentos
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-[#aca377]" />{" "}
                <span className="text-xs md:text-sm">
                  Sistematizar adquisición
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-[#aca377]" />{" "}
                <span className="text-xs md:text-sm">
                  Escalar con procesos simples
                </span>
              </li>
            </ul>
            <p className="text-center text-lg font-bold text-[#aca377] md:text-xl">
              Ese fue el clic que cambió mi negocio para siempre.
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* Final Conclusion */}
      <RevealOnScroll
        direction="up"
        delay={ANIMATION_DELAYS.ABOUT_STORY_BLOCK + 0.1}
      >
        <div className="grid justify-center gap-5 rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-6 md:p-8">
          <div className="space-y-3">
            <h3 className="text-center text-lg font-bold text-white md:text-xl">
              A partir de eso desarrollé el modelo que uso hoy:
            </h3>
            <p className="text-center text-sm text-gray-300 md:text-base">
              Escalar maximizando lo único que realmente mueve la aguja:{" "}
              <span className="text-lg font-bold text-[#aca377]">
                Adquisición + Fundamentos.
              </span>
            </p>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-white">
                Y cuando hacés eso, todo se vuelve más simple:
              </p>
              <ul className="space-y-1 text-xs text-gray-300 md:text-sm">
                {[
                  "Un negocio sin cuellos de botella",
                  "Márgenes altísimos",
                  "Equipos simples",
                  "Audiencias convertibles",
                  "Y una probabilidad de éxito enorme para tu cliente",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#aca377]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-[#aca377]/20 bg-black/40 p-5 text-center">
            <p className="text-sm text-gray-400">No cambió mi deseo.</p>
            <p className="mt-1 text-xl font-bold tracking-widest text-white uppercase md:text-2xl">
              Cambió el <span className="text-[#aca377]">vehículo</span>.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default StorySection;
