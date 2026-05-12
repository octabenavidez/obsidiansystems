import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";
import profileImage from "../assets/images/founder/founder-profile.jpeg";
import trustImage from "../assets/images/founder/principle-trust.jpg";
import congruenceImage from "../assets/images/founder/principle-congruence-2.jpg";
import controlImage from "../assets/images/founder/principle-control-2.jpg";

/**
 * ModelSection component
 * Displays the "El modelo" section with explanation about Consulting OS™
 * @returns {JSX.Element} Rendered model section component
 */
const ModelSection = () => {
  return (
    <section className="mt-4 px-4 py-16 md:px-6 lg:px-8">
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_CTA}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
          {/* Badge with gradient border */}
          <GradientBadge className="px-6 text-xl">Sobre mi</GradientBadge>

          {/* Main Heading */}
          <h2 className="text-gradient-silver text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
            Francisco Di Giorno
          </h2>

          {/* Content Box (Image on left, text on right) */}
          <div className="mt-6 mb-6 w-full max-w-[1100px] md:mt-10">
            <div className="flex h-full flex-col gap-8 md:flex-row md:items-stretch">
              {/* Left side: Image */}
              <div className="flex w-full flex-col justify-start md:w-[45%] lg:w-[40%]">
                <div className="border-silver-gradient h-full rounded-2xl p-[2px] transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-black">
                    <img
                      src={profileImage}
                      alt="Retrato de Francisco Di Giorno, fundador de Consulting OS™ y experto en escalado de negocios B2B"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Content */}
              <div className="bg-card-gradient relative flex w-full flex-col justify-center space-y-5 rounded-2xl p-6 text-left md:w-[55%] md:p-8 lg:w-[60%]">
                <p className="font-apple-garamond text-gradient-light text-[15px] font-bold md:text-[24px] md:leading-relaxed lg:whitespace-nowrap">
                  No voy a aburrirte con mi historia, mejor hablemos de números.
                </p>

                <p className="font-apple-garamond text-gradient-light text-[15px] font-normal md:text-[20px] md:leading-relaxed">
                  Durante los últimos tres años he recopilado miles de datos y
                  descubierto exactamente qué hace que un negocio escale.
                </p>

                <p className="font-apple-garamond text-gradient-light text-[15px] font-normal md:text-[20px] md:leading-relaxed">
                  Estuve en muchas industrias, físicas, digitales,
                  tradicionales, corporativas... Y los fundamentos se repiten en
                  cada negocio, porque cada negocio es único, pero no tan único
                  como para escaparse de los principios.
                </p>

                <p className="font-apple-garamond text-gradient-light text-[15px] font-normal md:text-[20px] md:leading-relaxed">
                  El último año (2025) hemos generado{" "}
                  <span className="text-gradient-silver font-bold">
                    $1,3 Millones de dólares
                  </span>{" "}
                  en resultados totales para nuestros clientes dentro de
                  Consulting OS™.
                </p>

                <p className="font-apple-garamond text-gradient-light text-[15px] font-normal md:text-[20px] md:leading-relaxed">
                  Y he pasado estos últimos 12 meses probando, refinando y
                  validando estructuras y metodologías en mi negocio y el de mis
                  clientes.
                </p>

                <p className="font-apple-garamond text-gradient-light text-[15px] font-normal md:text-[20px] md:leading-relaxed">
                  Y 2026 es el año donde finalmente abro el acceso de forma
                  oficial.
                </p>

                <div className="font-apple-garamond text-gradient-light mt-2 border-t border-white/10 pt-4 text-center italic md:text-left">
                  <p className="text-[17px] font-normal md:text-[22px]">
                    Si quieres ver las estructuras y metodologías, sigue
                    leyendo. Pero antes…
                  </p>
                  <p className="mt-2 text-[17px] font-normal md:text-[22px]">
                    Quiero contarte la verdad detrás de por qué realmente
                    funcionan:
                  </p>
                  <p className="mt-4 text-[17px] font-normal tracking-wide not-italic md:text-[22px]">
                    Todo trabajo lo hago siguiendo estos 3 principios
                    no-negociables:
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === Principle Card 1: Confianza === */}
          <div className="border-silver-gradient mt-8 w-full max-w-[1100px] rounded-2xl p-[2px]">
            <div className="bg-card-gradient rounded-2xl p-4 md:px-10 md:py-8">
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                {/* Left side - Text content */}
                <div className="flex-1 text-left">
                  <h3 className="text-gradient-light mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    Confianza
                  </h3>
                  <div className="max-w-[430px] space-y-4">
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Este es un negocio de reputación. Todo lo que hacemos hoy
                      construye (o destruye) la posibilidad de seguir haciendo
                      negocios mañana.
                    </p>
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Sabemos que, dentro de 5, 10 o 15 años alguien va a buscar
                      quiénes fuimos, cómo trabajamos y cómo tratamos a la
                      gente.
                    </p>
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Si ahí no hay una buena historia, resultados o respeto por
                      el cliente, las oportunidades se extinguen.
                    </p>
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Sin confianza no hay continuidad.
                    </p>
                  </div>
                </div>

                {/* Right side - Image with badge inside */}
                <div className="relative h-full md:max-w-[450px]">
                  {/* Image wrapper with silver gradient border */}
                  <div className="border-silver-gradient h-full rounded-xl p-[2px]">
                    <div
                      className="relative h-full overflow-hidden rounded-xl"
                      style={{ aspectRatio: "2.5 / 2" }}
                    >
                      <img
                        src={trustImage}
                        alt="Francisco Di Giorno utilizando su teléfono móvil frente a un ventanal escénico, simbolizando el Principio 1: Confianza"
                        className="h-full w-full rounded-xl object-cover"
                      />
                      {/* Badge with silver gradient border - inside image */}
                      <div className="border-silver-gradient absolute top-3 left-3 rounded-full p-[1px]">
                        <span className="block rounded-full bg-[#0a0a0a]/80 px-4 py-1.5 text-sm font-light text-white/80 italic backdrop-blur-sm">
                          Principio 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === Principle Cards Row: Congruencia & Control === */}
          <div className="grid w-full max-w-[1100px] grid-cols-1 gap-4 md:grid-cols-2">
            {/* === Principle Card 2: Congruencia === */}
            <div className="border-silver-gradient rounded-2xl p-[2px]">
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl md:min-h-[480px]">
                {/* Background Image */}
                <img
                  src={congruenceImage}
                  alt="Francisco Di Giorno diseñando arquitecturas empresariales en una pizarra con un valle montañoso de fondo, ilustrando el Principio 2: Congruencia"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                {/* Badge with silver gradient border */}
                <div className="border-silver-gradient absolute top-3 left-3 rounded-full p-[1px]">
                  <span className="block rounded-full bg-[#0a0a0a]/80 px-4 py-1.5 text-sm font-light text-white/80 italic backdrop-blur-sm">
                    Principio 2
                  </span>
                </div>

                {/* Text content - positioned at bottom with gradient background */}
                <div className="absolute right-0 bottom-0 left-0 flex h-[260px] flex-col justify-start bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 pt-8 text-left md:h-[280px] md:pt-16">
                  <h3 className="text-gradient-light mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                    Congruencia
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Hacemos exactamente lo que decimos y decimos solo lo que
                      estamos dispuestos a hacer.
                    </p>
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Todo lo hacemos siguiendo un criterio simple: <br />
                      <span className="font-bold">aprender</span>,{" "}
                      <span className="font-bold">aplicar</span> y{" "}
                      <span className="font-bold">enseñar</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* === Principle Card 3: Control === */}
            <div className="border-silver-gradient rounded-2xl p-[2px]">
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl md:min-h-[480px]">
                {/* Background Image */}
                <img
                  src={controlImage}
                  alt="Francisco Di Giorno contemplando el horizonte desde amplios ventanales, representando el Principio 3: Control y visión estratégica"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Badge with silver gradient border */}
                <div className="border-silver-gradient absolute top-3 left-3 rounded-full p-[1px]">
                  <span className="block rounded-full bg-[#0a0a0a]/80 px-4 py-1.5 text-sm font-light text-white/80 italic backdrop-blur-sm">
                    Principio 3
                  </span>
                </div>

                {/* Text content - positioned at bottom with gradient background */}
                <div className="absolute right-0 bottom-0 left-0 flex h-[260px] flex-col justify-start bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 pt-8 pb-8 text-left md:h-[280px] md:pt-16">
                  <h3 className="text-gradient-light mb-3 text-2xl font-bold tracking-tight md:text-3xl">
                    Control
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Asumimos responsabilidad sobre lo que está bajo nuestro
                      control. Liderar un entorno de verdad implica hacerse
                      cargo del rumbo y éxito de{" "}
                      <span className="font-bold">todos</span>.
                    </p>
                    <p className="text-gradient-light text-sm leading-relaxed font-normal italic md:text-base">
                      Esa es la mentalidad de{" "}
                      <span className="font-bold">liderazgo</span> que solo
                      tienen los mejores entornos de personas de{" "}
                      <span className="font-bold">alto nivel</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ModelSection;
