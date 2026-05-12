import RevealOnScroll from "../common/RevealOnScroll";
import Logo from "../common/Logo";
import Layout from "../layout/Layout";
import { heroContent } from "../data/hero/content";
import { ANIMATION_DELAYS } from "../constants/animations";

/**
 * Thank You page component displayed after successful form submission or booking.
 * Features the Logo, a title, subtitle, and YouTube video.
 * @returns {JSX.Element} The rendered thank you page
 */
function ThankYouPage() {
  return (
    <Layout>
      <section className="relative flex flex-col gap-9 overflow-hidden px-4 text-center text-white md:px-6 lg:px-8">
        {/* Content wrapper matching Hero structure */}
        <div className="relative z-10 flex flex-col gap-9">
          {/* Logo with animation delay - same as "/" */}
          <Logo
            src={heroContent.logo.src}
            alt={heroContent.logo.alt}
            link={heroContent.logo.link}
          />

          {/* Main Title */}
          <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_HEADLINE}>
            <h1 className="mt-12 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Último Paso Para Confirmar Tu Llamada
            </h1>
          </RevealOnScroll>

          {/* Subtitle */}
          <RevealOnScroll
            direction="up"
            delay={ANIMATION_DELAYS.HERO_SUBHEADLINE}
          >
            <p className="mx-auto max-w-2xl text-lg text-zinc-400 md:text-xl">
              Mira este video completo para entender nuestra
              metodología de trabajo.
            </p>
          </RevealOnScroll>

          {/* YouTube Video */}
          <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_IMAGE}>
            <div className="mx-auto w-full max-w-[900px]">
              <div
                className="overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))",
                  padding: "4px",
                }}
              >
                {/* Stable aspect ratio container */}
                <div
                  style={{
                    position: "relative",
                    paddingTop: "56.25%",
                    background: "#0a0a0a",
                    borderRadius: "1rem",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/VaWWRv9aioc"
                    title="Video de metodología - Obsidian Systems"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Steps Section */}
          <div className="mx-auto mt-8 w-full max-w-[900px] space-y-10 text-left">
            {/* PASO 1 */}
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="space-y-3">
                <h2
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  style={{ letterSpacing: "-2.1px" }}
                >
                  PASO 1:
                </h2>
                <p className="text-xl leading-relaxed font-medium text-white md:text-2xl">
                  Mira el video completo con mucha atención
                  <br />
                  <span className="text-zinc-300">
                    (de verdad es muy importante)
                  </span>
                </p>
              </div>
            </RevealOnScroll>

            {/* PASO 2 */}
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="space-y-4">
                <h2
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  style={{ letterSpacing: "-2.1px" }}
                >
                  PASO 2:
                </h2>
                <p className="text-xl leading-relaxed font-medium text-white md:text-2xl">
                  Estate atento al evento de tu calendario/email.
                  <br />
                  TOCA EL BOTÓN para recibir el enlace de la reunión por
                  WhatsApp.
                </p>
                <a
                  href="https://wa.link/ejq19j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg border border-emerald-500/50 bg-transparent px-6 py-3 text-lg font-semibold text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  TOCA AQUÍ PARA IR WHATSAPP
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ThankYouPage;
