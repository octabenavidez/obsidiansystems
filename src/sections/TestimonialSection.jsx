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
    <section className=" text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === Section Header === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
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
              <div className="group relative bg-gradient-to-br from-zinc-900 to-black border-6 border-[#aca377] rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(172,163,119,0.4)] transition-all duration-500">
              <div
                className={`grid gap-6 p-6 lg:p-8 ${
                  testimonial.isHorizontal
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-3"
                }`}
              >
                {/* Video Section - Primero para videos verticales, segundo para horizontales */}
                <div
                  className={`flex justify-center items-center ${
                    testimonial.isHorizontal ? "order-2" : "col-span-1 order-1"
                  }`}
                >
                  <div
                    className={`relative w-full rounded-xl overflow-hidden bg-zinc-800 shadow-lg border border-zinc-700 ${
                      testimonial.isHorizontal
                        ? "aspect-video"
                        : "max-w-[320px] aspect-[9/16]"
                    }`}
                  >
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/${testimonial.videoId}?seo=false&videoFoam=true`}
                      title={`Testimonio de ${testimonial.name}`}
                      allow="autoplay; fullscreen"
                      className="absolute inset-0 w-full h-full"
                      style={{
                        border: "none",
                        borderRadius: "0.75rem",
                      }}
                    ></iframe>
                  </div>
                </div>

                {/* Content Section - Segundo para videos verticales, primero para horizontales */}
                <div
                  className={`flex flex-col justify-center gap-6 ${
                    testimonial.isHorizontal
                      ? "order-1"
                      : "col-span-2 order-2"
                  }`}
                >
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 fill-[#ffae00] text-[#ffae00]"
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
                        className="text-xl text-[#ffffffcc] font-normal leading-relaxed"
                      >
                        {renderAchievement(achievement)}
                      </p>
                    ))}
                  </div>

                  {/* Satisfaction Badge */}
                  <div>
                    <p className="text-2xl max-w-[460px] text-[#ffffffcc] font-bold tracking-wide">
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
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
