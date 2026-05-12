import { useEffect, useRef } from "react";
import RevealOnScroll from "../../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../../constants/animations";
import arrowImage from "../../assets/icons/flecha.png";

/**
 * HeroWistiaVideo component
 * Renders a Wistia video player for the Hero section with proper styling
 * @returns {JSX.Element} Rendered Wistia video player
 */
const HeroWistiaVideo = () => {
  const containerRef = useRef(null);

  return (
    <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_IMAGE}>
      <div className="relative mx-auto w-full max-w-[900px]" ref={containerRef}>
        {/* "Mira el video" indicator with arrow - container */}
        <div
          className="pointer-events-none absolute z-20 hidden md:block"
          style={{
            top: "110px", // Adjust vertical position of entire group
            right: "-130px", // Adjust horizontal position of entire group
          }}
          aria-hidden="true"
        >
          {/* Text label */}
          <span
            style={{
              fontFamily: "Benedict, cursive",
              fontSize: "30px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "rgb(255, 255, 255)",
              fontKerning: "normal",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "block",
              lineHeight: 0.4, // Remove extra vertical space
            }}
          >
            Mira el video
          </span>
          {/* Arrow image - positioned independently */}
          <img
            src={arrowImage}
            alt=""
            style={{
              userSelect: "none",
              width: "65px", // Arrow size
              marginTop: "0px", // Space between text and arrow (0 = pegados)
              marginLeft: "-25px", // Horizontal offset of arrow from text
            }}
          />
        </div>

        <div
          className="overflow-hidden rounded-2xl shadow-2xl"
          style={{
            padding: "4px",
          }}
        >
          {/* Stable aspect ratio container */}
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 Aspect Ratio
              background: "#0a0a0a",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {/* YouTube player */}
            <iframe
              src="https://www.youtube.com/embed/ektmo36QUdA"
              title="Video de Francisco Di Giorno - Consulting OS™"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default HeroWistiaVideo;
