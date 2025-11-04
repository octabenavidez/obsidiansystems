/**
 * Footer
 * 
 * Footer component with copyright and social media links.
 * Displays copyright on the left and Instagram/YouTube icons on the right.
 */

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-6 md:py-8">
      <div className="flex items-center justify-between px-12 md:px-24">
        {/* Copyright text */}
        <p className="text-sm md:text-xl font-light">
          © Obsidian Systems 2025
        </p>

        {/* Social media links */}
        <div className="flex items-center gap-8 md:gap-12">
          <a
            href="https://www.instagram.com/frandigiorno_/?hl=es-la#/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity duration-200 text-sm md:text-xl font-light hover:underline"
            aria-label="Instagram" 
          >
            <img src="/src/assets/icons/instagram.svg" className="md:w-6 md:h-6 w-4 h-4" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@frandigiorno_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity duration-200 text-sm md:text-xl font-light hover:underline"
            aria-label="YouTube"
          >
            <img src="/src/assets/icons/youtube.svg" className="md:w-6 md:h-6 w-4 h-4" alt="Instagram" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

