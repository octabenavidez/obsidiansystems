import { testimonials } from "../data/testimonials";
import RevealOnScroll from "../common/RevealOnScroll";

const TestimonialsSection = () => {
  // const [activeVideo, setActiveVideo] = useState(null);
  const horizontals = testimonials.filter((t) => t.isHorizontal);
  const verticals = testimonials.filter((t) => !t.isHorizontal);

  const renderAchievement = (achievement) => {
    if (typeof achievement === "string") {
      return <span className="text-gray-300">{achievement}</span>;
    }
    return (
      <>
        <span className="text-gray-300">{achievement.text}</span>
        <span className="text-[#deb459cc]">{achievement.highlight}</span>
      </>
    );
  };

  return (
    <section className="px-4 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
              No me creas a mí, creele a ellos
            </h2>
            <p className="text-xl text-gray-400">
              Algunos Testimonios de Mis Clientes
            </p>
          </div>
        </RevealOnScroll>

        {/* === Testimonials List === */}

        {/* Horizontals first: now in two columns */}
        <div className="grid gap-6 lg:grid-cols-2">
          {horizontals.map((testimonial, index) => (
            <RevealOnScroll
              key={testimonial.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.15 * (index + 1)}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-zinc-900/70 p-6 shadow-xl ring-1 ring-zinc-800 transition-all duration-500">
                <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#deb45955] to-transparent opacity-40"></div>

                {/* Title above video */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {testimonial.name}
                  </h3>
                  <div className="h-0.5 flex-1 rounded-full bg-zinc-700/40"></div>
                </div>

                {/* Video */}
                <div className="mt-4 flex-1">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800/70 shadow-2xl ring-1 ring-zinc-700">
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=false&videoFoam=true`}
                      title={`Testimonio de ${testimonial.name}`}
                      allow="autoplay; fullscreen"
                      className="aspect-video h-full w-full"
                      style={{ border: "none", borderRadius: "0.75rem" }}
                    ></iframe>
                  </div>
                </div>

                {/* Achievements now below video */}
                <div className="mt-4 space-y-3 rounded-2xl bg-zinc-900/60 p-4 ring-1 ring-zinc-800/80">
                  {testimonial.achievements.map((achievement, i) => (
                    <p
                      key={i}
                      className="flex items-start gap-3 text-base leading-7 text-zinc-100 italic md:text-lg"
                    >
                      <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-[#deb459]" />
                      <span className="flex-1">
                        "{renderAchievement(achievement)}"
                      </span>
                    </p>
                  ))}
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "radial-gradient(600px 200px at 10% 10%, rgba(222,180,89,0.06), transparent 40%)",
                  }}
                ></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Verticals: stacked cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {verticals.map((testimonial, i) => (
            <RevealOnScroll
              key={testimonial.id}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.15 * (i + 1)}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-zinc-900/70 p-4 shadow-xl ring-1 ring-zinc-800 transition-all duration-500">
                <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#deb45955] to-transparent opacity-40"></div>

                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold tracking-tight text-white">
                    {testimonial.name}
                  </h3>
                  <div className="h-0.5 flex-1 rounded-full bg-zinc-700/40"></div>
                </div>

                <div className="mt-3 flex-1">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-800/70 shadow-2xl ring-1 ring-zinc-700">
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=false&videoFoam=true`}
                      title={`Testimonio de ${testimonial.name}`}
                      allow="autoplay; fullscreen"
                      className="aspect-9/16 h-full w-full"
                      style={{ border: "none", borderRadius: "0.75rem" }}
                    ></iframe>
                  </div>
                </div>

                <div className="mt-3 space-y-2 rounded-2xl bg-zinc-900/60 p-3 ring-1 ring-zinc-800/80">
                  {testimonial.achievements.map((achievement, idx) => (
                    <p
                      key={idx}
                      className="flex items-start gap-2 text-sm leading-6 text-zinc-200 italic"
                    >
                      <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-[#deb459]" />
                      <span className="flex-1">
                        "{renderAchievement(achievement)}"
                      </span>
                    </p>
                  ))}
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background:
                      "radial-gradient(600px 200px at 10% 10%, rgba(222,180,89,0.06), transparent 40%)",
                  }}
                ></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
