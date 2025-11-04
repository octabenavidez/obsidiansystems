import RevealOnScroll from "../common/RevealOnScroll";

/**
 * Footer
 *
 * Footer component with copyright and social media links.
 * Displays copyright on the left and Instagram/YouTube icons on the right.
 */

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] py-6 text-white md:py-8">
      <RevealOnScroll direction="up" delay={0.2}>
        <div className="flex items-center justify-between px-12 md:px-24">
          {/* Copyright text */}
          <p className="text-sm font-light md:text-xl">
            © Obsidian Systems 2025
          </p>

          {/* Social media links */}
          <div className="flex items-center gap-8 md:gap-12">
            <a
              href="https://www.instagram.com/frandigiorno_/?hl=es-la#/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-white transition-opacity duration-200 hover:underline hover:opacity-70 md:text-xl"
              aria-label="Instagram"
            >
              <img
                src="/src/assets/icons/instagram.svg"
                className="h-4 w-4 md:h-6 md:w-6"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@frandigiorno_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-light text-white transition-opacity duration-200 hover:underline hover:opacity-70 md:text-xl"
              aria-label="YouTube"
            >
              <img
                src="/src/assets/icons/youtube.svg"
                className="h-4 w-4 md:h-6 md:w-6"
                alt="YouTube"
              />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
};

export default Footer;
