import GradientBadge from "../common/GradientBadge";
import RevealOnScroll from "../common/RevealOnScroll";
import HorizontalTestimonialCard from "../components/testimonials/HorizontalTestimonialCard";
import VerticalTestimonialCard from "../components/testimonials/VerticalTestimonialCard";

// Data
import { testimonials } from "../data/testimonials/list";

/**
 * Testimonials Section component
 * Displays client testimonials in horizontal and vertical layouts
 * @returns {JSX.Element} Rendered Testimonials section
 */
const TestimonialsSection = () => {
  const horizontals = testimonials.filter((t) => t.isHorizontal);
  const verticals = testimonials.filter((t) => !t.isHorizontal);

  return (
    <section className="overflow-x-hidden px-4 pt-24 text-white">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mb-16 flex flex-col items-center space-y-6 text-center">
            {/* Badge */}
            <GradientBadge className="px-6 text-xl">
              Resultados
            </GradientBadge>

            {/* Title */}
            <h2 className="pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
              Testimonios de Clientes
            </h2>

            {/* Description */}
            <p className="font-apple-garamond mx-auto max-w-[900px] text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
              Lo que dicen nuestros clientes de{" "}
              <span className="whitespace-nowrap">trabajar conmigo.</span>
            </p>
          </div>
        </RevealOnScroll>

        {/* Horizontal Testimonials */}
        <div className="grid gap-6 lg:grid-cols-2" style={{ minWidth: 0 }}>
          {horizontals.map((testimonial, index) => (
            <HorizontalTestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              videoId={testimonial.videoId}
              achievements={testimonial.achievements}
              index={index}
            />
          ))}
        </div>

        {/* Vertical Testimonials */}
        <div
          className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ minWidth: 0 }}
        >
          {verticals.map((testimonial, i) => (
            <VerticalTestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              videoId={testimonial.videoId}
              achievements={testimonial.achievements}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
