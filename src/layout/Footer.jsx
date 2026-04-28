import RevealOnScroll from "../common/RevealOnScroll";
import Logo from "../common/Logo";
import { heroContent } from "../data/hero/content";

/**
 * Silver gradient for the divider line
 */
const silverGradientDivider =
  "linear-gradient(135deg, #ffffff, #686868, #ffffff, #747474, #ffffff)";

/**
 * Footer
 *
 * Footer component with logo, gradient divider, and copyright text.
 */
const Footer = () => {
  return (
    <footer className="mt-10 w-full px-4 pb-12 text-white">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
          {/* Logo */}
          <Logo
            src={heroContent.logo.src}
            alt={heroContent.logo.alt}
            showAnimation={false}
          />

          {/* Gold gradient divider line */}
          <div
            className="h-[1px] w-full"
            style={{ background: silverGradientDivider }}
          />

          {/* Copyright text */}
          <p className="text-center text-lg font-extralight text-white/80">
            © {new Date().getFullYear()} Francisco Di Giorno | Todos los
            derechos reservados
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
