import { Star, Play } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../data/testimonials";
import RevealOnScroll from "../common/RevealOnScroll";

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

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
    <section className="px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              No me creas a mí, creele a ellos
            </h2>
            <p className="text-xl text-gray-400">
              Algunos Testimonios de Mis Clientes
            </p>
          </div>
        </RevealOnScroll>

        {/* === Testimonials List === */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll
              key={testimonial.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.15 * (index + 1)}
            >
              <div className="group relative overflow-hidden rounded-2xl border-6 border-[#aca377] bg-gradient-to-br from-zinc-900 to-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(172,163,119,0.4)]">
                <div
                  className={`grid gap-6 p-6 lg:p-8 ${
                    testimonial.isHorizontal
                      ? "lg:grid-cols-2"
                      : "lg:grid-cols-3"
                  }`}
                >
                  {/* Video Section */}
                  <div
                    className={`flex items-center justify-center ${
                      testimonial.isHorizontal
                        ? "order-2"
                        : "order-1 col-span-1"
                    }`}
                  >
                    <div
                      className={`relative w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 shadow-lg ${
                        testimonial.isHorizontal
                          ? "aspect-video"
                          : "aspect-[9/16] max-w-[320px]"
                      }`}
                    >
                      <iframe
                        src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=false&videoFoam=true`}
                        title={`Testimonio de ${testimonial.name}`}
                        allow="autoplay; fullscreen"
                        className="absolute inset-0 h-full w-full"
                        style={{
                          border: "none",
                          borderRadius: "0.75rem",
                        }}
                      ></iframe>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`flex flex-col justify-center gap-6 ${
                      testimonial.isHorizontal
                        ? "order-1"
                        : "order-2 col-span-2"
                    }`}
                  >
                    {/* Rating Stars */}
                    <div className="mt-0.5 flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-8 w-8 fill-[#ffae00] text-[#ffae00]"
                        />
                      ))}
                    </div>

                    {/* Client Name */}
                    <div>
                      <h3 className="text-5xl font-bold capitalize">
                        {testimonial.name}
                      </h3>
                    </div>

                    {/* Achievements List */}
                    <div className="max-w-[620px]">
                      {testimonial.achievements.map((achievement, i) => (
                        <p
                          key={i}
                          className="text-xl leading-relaxed font-normal text-[#ffffffcc]"
                        >
                          {renderAchievement(achievement)}
                        </p>
                      ))}
                    </div>

                    {/* Satisfaction Badge */}
                    <div>
                      <p className="max-w-[460px] text-2xl font-bold tracking-wide text-[#ffffffcc]">
                        Satisfacción{" "}
                        <span className="text-[#deb459cc]">
                          {testimonial.satisfaction}
                        </span>{" "}
                        siguiendo nuestra metodología de coaching 1-1.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Border Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(172,163,119,0.1) 0%, transparent 50%, rgba(172,163,119,0.1) 100%)",
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
