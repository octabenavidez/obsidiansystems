import RevealOnScroll from "../common/RevealOnScroll";

/**
 * Footer
 *
 * Footer component with copyright and social media links.
 * Displays copyright on the left and Instagram/YouTube icons on the right.
 */

const Footer = () => {
  return (
    <footer className="mb-5 w-full text-white md:py-8">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="flex items-center justify-center px-12 md:px-24">
          {/* Copyright text */}
          <p className="text-sm font-light md:text-sm">
            © Obsidian Systems 2025
          </p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
