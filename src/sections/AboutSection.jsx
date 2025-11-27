import RevealOnScroll from "../common/RevealOnScroll";
import ModalImage from "react-modal-image";
import ScheduleCallButton from "../common/ScheduleCallButton";
import { resultImages } from "../data/aboutImages";

import { Crown, Smile, Trophy, Shell, Check } from "lucide-react";
import fran1 from "../assets/images/fran1.webp";
import fran2 from "../assets/images/fran 2.webp";

const AboutSection = () => {
  const painPoints = [
    {
      title: "Posicionamiento y mensaje confuso",
      description:
        "Sabés que podrías posicionarte mejor, pero tu mensaje hoy no refleja lo que realmente sos capaz de lograr.",
    },
    {
      title: "Cero claridad sobre el siguiente paso",
      description:
        "Sientes falta de claridad sobre qué priorizar o cómo estructurar tu siguiente jugada para escalar tu negocio.",
    },
    {
      title: "Adquisición y oferta trabados",
      description:
        "Sentís que podrías vender más, pero algo en tu oferta o adquisición no termina de encajar.",
    },
    {
      title: "Desorden en tu entrega y servicio.",
      description:
        "Tu entrega y experiencia del cliente es buena, pero sabés que podría estar mucho más ordenada.",
    },
    {
      title: "Sin métricas ni sistemas para decidir",
      description:
        "No tenés métricas ni sistemas que te permitan tomar decisiones y escalar con previsibilidad.",
    },
    {
      title: "Contenido y comunicación débil.",
      description:
        "No tienes un ecosistema de contenido o nunca lograste mantener constancia en tu comunicación.",
    },
    {
      title: "Miedo a quedarte construyendo sin lanzar",
      description:
        'Te da miedo frenarte o quedarte por mucho tiempo "construyendo" sin lanzar.',
    },
    {
      title: "Quieres resultados, no información.",
      description:
        "No querés otro curso, ya los tienes a todos. Buscas a alguien que se meta 1-1 en tu negocio y te haga avanzar.",
    },
  ];

  const objectives = [
    {
      icon: <Crown className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Posicionado en tu mercado",
      description:
        "Ya no te miran como un NPC, ahora eres la única opción lógica en la cabeza de tu cliente y comienzas a cobrar por lo que vales.",
    },
    {
      icon: <Trophy className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Darás mejores resultados a tus clientes",
      description:
        "Tendrás todas las estructuras de servicio necesarias para aumentar tu capacidad de entrega y resultados.",
    },
    {
      icon: <Shell className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Ecosistema de contenido propio",
      description:
        "Crear un ecosistema de contenido evergreen que atrae clientes premium todos los días.",
    },
    {
      icon: <Smile className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" />,
      title: "Disfrutarás el proceso",
      description:
        "Aumentaremos tu enfoque y productividad para que escalar sea más claro, confiado y, sobre todo, disfrutable.",
    },
  ];

  return (
    <section className="overflow-hidden px-6 pt-28 text-white">
      <div className="mx-auto space-y-10 md:max-w-[90%]">
        {/* === Section Title === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Si estás aquí, es muy probable que algo de <br /> lo que voy a
              decir resuene fuerte con vos:
            </h2>
          </div>
        </RevealOnScroll>

        {/* === Description === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <p className="mt-4 text-center text-[20px] text-white md:text-[25px]">
            Eres un{" "}
            <span className="text-[22px] font-bold text-[#aca377] md:text-[27px]">
              Consultores B2B
            </span>{" "}
            que está facturando mínimamente <br />
            $10,000 USD al mes, y te identificas con lo siguiente:
          </p>
        </RevealOnScroll>

        {/* === Pain Points === */}
        <RevealOnScroll direction="up" delay={0.6}>
          <div className="mx-auto mt-10 grid gap-5 md:grid-cols-2 xl:max-w-[90%]">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-6 text-left transition-all duration-300 hover:border-[#aca377]/60 hover:shadow-[0_0_30px_rgba(172,163,119,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {point.title}
                    </p>
                    <div className="mt-1 h-0.5 w-12 rounded-full bg-[#aca377]/70 transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-200">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* === Objectives Section === */}
        <section className="mx-auto my-20 space-y-8 md:space-y-10 xl:max-w-[90%]">
          {/* === Section Header === */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="space-y-4 text-center">
              <h2 className="bg-gradient-to-r from-white via-[#aca377] to-white bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                Lo que quieres es claro:
              </h2>
              {/* <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl lg:text-2xl">
                Para cuando termines de trabajar conmigo
              </p> */}
            </div>
          </RevealOnScroll>

          {/* === Results Statement === */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#aca377]/20 via-[#aca377]/5 to-[#aca377]/20 blur-3xl"></div>
              <div className="relative rounded-3xl border border-[#aca377]/50 bg-gradient-to-br from-zinc-900 to-black p-8 text-center md:p-10">
                <h2 className="mb-4 bg-linear-to-r from-white via-[#aca377] to-white bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                  Resultados monetarios
                </h2>
                <p className="mx-auto max-w-6xl text-lg leading-relaxed text-gray-300 md:text-xl">
                  Vas a sumar y sostener entre{" "}
                  <span className="font-bold text-[#aca377]">USD 20.000 </span>{" "}
                  y <span className="font-bold text-[#aca377]">USD 54.000</span>{" "}
                  adicionales de facturación en tu{" "}
                  <span className="font-bold text-[#aca377]">
                    consultoría B2B,
                  </span>{" "}
                  llevando al máximo tu{" "}
                  <span className="text-[#aca377]">Adquisición</span> y tus{" "}
                  <span className="text-[#aca377]">Fundamentos</span> en un
                  programa de trabajo 1-1 conmigo durante 4 meses.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* === Objectives Grid === */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            {objectives.map((obj, i) => (
              <RevealOnScroll
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={0.1 * (i + 1) + 0.3}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-7 transition-all duration-500 hover:border-[#aca377] hover:shadow-[0_0_40px_rgba(172,163,119,0.2)] md:p-8 lg:p-9">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#aca377]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <div className="relative z-10 flex h-full flex-col space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#aca377]/10 text-[#aca377] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#aca377]/20 md:h-16 md:w-16 lg:h-20 lg:w-20">
                        {obj.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#aca377] md:text-2xl lg:text-3xl">
                        {obj.title}
                      </h3>
                    </div>

                    <p className="flex-1 text-base leading-relaxed text-gray-400 md:text-lg lg:text-xl">
                      {obj.description}
                    </p>

                    <div className="mt-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-[#aca377] to-transparent transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* === Results Section === */}
        <RevealOnScroll direction="up" delay={1}>
          <div className="space-y-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              ¿Qué resultados voy a alcanzar?
            </h2>
            <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:max-w-[85%]">
              {resultImages.map((img, i) => (
                <div key={i} className="relative overflow-hidden">
                  <ModalImage
                    small={img}
                    large={img}
                    hideDownload={true}
                    hideZoom={true}
                    className="h-[450px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* === Schedule Call Button ===  */}
        <RevealOnScroll direction="up" delay={0.6}>
          <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
        </RevealOnScroll>

        {/* === Story Section === */}
        <section className="mx-auto my-16 space-y-8 xl:max-w-[85%]">
          {/* Title */}
          <RevealOnScroll direction="up" delay={0.2}>
            <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              Antes de enseñarte mi método,{" "}
              <span className="text-[#aca377]">
                déjame contarte por qué funciona.
              </span>
            </h2>
          </RevealOnScroll>

          {/* Story Block 1 */}
          <div className="grid gap-6 md:grid-cols-[300px_1fr] md:items-start md:gap-8">
            <RevealOnScroll direction="right" delay={0.3}>
              <div className="relative mx-auto h-64 w-full max-w-xs overflow-hidden rounded-xl border border-[#aca377]/30 shadow-[0_0_20px_rgba(172,163,119,0.1)] md:h-72">
                <img
                  src={fran1}
                  alt="Francisco Di Giorno"
                  className="h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={0.4}>
              <div className="space-y-3 text-sm text-gray-300 md:text-base">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  Francisco Di Giorno
                </h3>
                <p>
                  Hace un año tenía lo que muchos llaman{" "}
                  <span className="font-bold text-white">"éxito"</span>.
                  Agencia, coaching, lanzamientos...
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
          <RevealOnScroll direction="up" delay={0.3}>
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
          <div className="grid gap-6 md:grid-cols-[1fr_300px] md:items-start md:gap-8">
            <RevealOnScroll direction="right" delay={0.3}>
              <div className="space-y-3 text-sm text-gray-300 md:text-base">
                <p>
                  En ese caos, conocí a un mentor del Reino Unido que me enseñó
                  a crear
                  <span className="text-[#aca377]">
                    {" "}
                    equipos, procesos, automatizaciones... todo.
                  </span>
                </p>
                <p className="font-bold text-white">Y me voló la cabeza.</p>
                <p>Me tardé meses en tener los mejores sistemas.</p>
                <p>
                  Pero me faltaba lo único que realmente hace que un negocio
                  escale:{" "}
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
            <RevealOnScroll direction="left" delay={0.4}>
              <div className="relative mx-auto h-64 w-full max-w-xs overflow-hidden rounded-xl border border-[#aca377]/30 shadow-[0_0_20px_rgba(172,163,119,0.1)] md:h-72">
                <img
                  src={fran2}
                  alt="Francisco trabajando"
                  className="h-full w-full object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Realization Block */}
          <RevealOnScroll direction="up" delay={0.3}>
            <div className="space-y-5 rounded-2xl border border-[#aca377]/20 bg-gradient-to-b from-[#aca377]/5 to-transparent p-6 md:p-8">
              <div className="space-y-3 text-center text-sm text-gray-300 md:text-base">
                <p>
                  Por mucho tiempo pensé que mi problema era el burnout...{" "}
                  <span className="font-bold text-white">
                    Pero no. Esos eran solo síntomas.
                  </span>
                </p>
                <p className="mx-auto max-w-3xl">
                  El verdadero problema fue haber creído que podía escalar
                  arreglando la operación antes de arreglar mi adquisición y mis
                  fundamentos.
                </p>
              </div>

              <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-4 md:p-5">
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

              <div className="space-y-3 text-sm text-gray-300 md:text-base">
                <p>
                  Tuve que vivir esto para abrir los ojos. Yo nunca había sido
                  el problema.{" "}
                  <span className="font-bold text-white">
                    Sino el intentar escalar sobre fundamentos débiles.
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
          <RevealOnScroll direction="up" delay={0.4}>
            <div className="grid gap-5 rounded-2xl border border-[#aca377]/30 bg-gradient-to-br from-[#aca377]/10 to-black p-6 md:grid-cols-2 md:items-center md:p-8">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white md:text-xl">
                  A partir de eso desarrollé el modelo que uso hoy:
                </h3>
                <p className="text-sm text-gray-300 md:text-base">
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
                      "Equipos simples",
                      "Audiencias que convierten",
                      "Márgenes altísimos",
                      "Cero cuellos de botella",
                      "Crecimiento predecible",
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

        {/* === SSE Method Section === */}
        <RevealOnScroll direction="up" delay={0.3}>
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
                      Optimizamos la oferta, el posicionamiento y la entrega
                      para que los fundamentos del negocio sean simples, claros
                      y rentables.
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
                      Documentamos procesos, delegamos tareas y montamos
                      sistemas para aumentar facturación sin depender de más
                      horas tuyas.
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
                Es hacer lo <span className="text-[#aca377]">correcto</span> en
                el orden <span className="text-[#aca377]">correcto</span>.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* === This is for you if Section === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="mx-auto my-20 max-w-[1300px]">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Green Card - This IS for you */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#34d399]/20 bg-gradient-to-br from-[#34d399]/10 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#34d399]/40">
                {/* Decorative Elements */}
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-[#34d399]/10 blur-2xl transition-all duration-500 group-hover:bg-[#34d399]/20"></div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#34d399]/5 blur-xl"></div>
                <div className="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-[#34d399]"></div>
                <div className="animation-delay-500 absolute right-8 bottom-8 h-1 w-1 animate-pulse rounded-full bg-[#34d399]/50"></div>
                <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#34d399]/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#34d399]/30 bg-[#34d399]/20 shadow-lg shadow-[#34d399]/20">
                      <Check className="h-7 w-7 text-[#34d399]" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#34d399] md:text-4xl">
                        Esto solo funcionará si:
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Eres consultor B2B haciendo entre $10K y $15K/mes",
                      "Tienes clientes, y das resultados, pero se siente desorganizado",
                      "Sentis que estás a un 10% de romperla",
                      "Queres simplicidad y foco, no complejidad",
                      "Queres volver tu negocio un sistema que crece contigo",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[#34d399]/5"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#34d399]/20 transition-colors group-hover/item:bg-[#34d399]/30">
                          <Check className="h-4 w-4 text-[#34d399] transition-transform group-hover/item:scale-110" />
                        </div>
                        <span className="text-base text-gray-300 transition-colors group-hover/item:text-white md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Red Card - This is NOT for you */}
              <div className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40">
                {/* Decorative Elements */}
                <div className="pointer-events-none absolute top-0 left-0 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-all duration-500 group-hover:bg-red-500/20"></div>
                <div className="pointer-events-none absolute right-0 bottom-0 h-24 w-24 rounded-full bg-red-400/5 blur-xl"></div>
                <div className="absolute top-4 left-4 h-2 w-2 animate-pulse rounded-full bg-red-400"></div>
                <div className="animation-delay-700 absolute bottom-8 left-8 h-1 w-1 animate-pulse rounded-full bg-red-400/50"></div>
                <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/20 shadow-lg shadow-red-500/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7 text-red-400"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m15 9-6 6"></path>
                        <path d="m9 9 6 6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-red-400 md:text-4xl">
                        Esto NO te va a funcionar si:
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Solo buscas 'hacer plata rápido'",
                      "No te importan tus clientes",
                      "No tenés valores",
                      "Buscas un coach motivacional",
                      "Queres copiar estrategias sin pensar",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-red-500/5"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 transition-colors group-hover/item:bg-red-500/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-red-400 transition-transform group-hover/item:scale-110"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </div>
                        <span className="text-base text-gray-300 transition-colors group-hover/item:text-white md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-8 text-center">
              <p className="text-base text-gray-400 md:text-lg">
                Si te identificas con la columna verde,{" "}
                <span className="font-semibold text-[#34d399]">
                  sigue leyendo.
                </span>
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* === Video Section ===  */}
        {/* <RevealOnScroll direction="up" delay={1}>
          <MediaDisplay
            src="https://4kwallpapers.com/images/wallpapers/business-barcode-2560x1080-16395.png"
            alt="Obsidian Systems preview"
            type="image"
            className="mt-4"
          />
        </RevealOnScroll> */}
      </div>
    </section>
  );
};

export default AboutSection;
