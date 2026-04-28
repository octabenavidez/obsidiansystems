import GradientBadge from "../../common/GradientBadge";
import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";

/**
 * Clients Section Header component
 * @param {Object} props - Component properties
 * @param {string} props.title - Main title
 * @param {string} props.subtitle - Subtitle text
 * @param {string} props.description - Description text
 * @returns {JSX.Element} Rendered header component
 */
const ClientsHeader = ({ title, subtitle, description }) => {
  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.CLIENTS_HEADER}>
      <div className="mb-16 flex flex-col items-center space-y-6 pt-28 text-center">
        {/* Badge */}
        <GradientBadge className="px-6 text-xl">
          Clientes
        </GradientBadge>

        {/* Title with gold gradient */}
        <h2 className="pb-1 text-[24px] leading-[1.2em] font-bold tracking-[-0.7px] md:text-5xl lg:text-[52px]">
          {title}
          <br />
          {subtitle}
        </h2>

        {/* Description */}
        {description && (
          <p className="font-apple-garamond mx-auto max-w-[1090px] text-[18px] leading-[1.4em] font-light text-white italic md:text-[24px]">
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
};

export default ClientsHeader;
