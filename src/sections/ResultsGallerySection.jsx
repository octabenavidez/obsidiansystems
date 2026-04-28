import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import RevealOnScroll from "../common/RevealOnScroll";
import { ANIMATION_DELAYS } from "../constants/animations";
import { resultImages as galleryResultImages } from "../data/gallery/images";

/**
 * Results Gallery Section component displaying client results as images and videos
 * @returns {JSX.Element} Rendered results gallery section
 */
const ResultsGallerySection = () => {
  const [failedMedia, setFailedMedia] = useState(new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine all images for lightbox navigation (excluding videos and failed images)
  const allImages = galleryResultImages
    .filter(({ type }, i) => type !== "video" && !failedMedia.has(i))
    .map(({ src, alt }) => ({ src, alt }));

  /**
   * Open lightbox at specific image index
   * @param {number} index - Index of the image to open
   */
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  /**
   * Handle media loading errors for hero images
   * @param {number} index - Index of the failed media item
   */
  const handleMediaError = (index) => {
    console.error(
      `Failed to load media at index ${index}:`,
      galleryResultImages[index].src,
    );
    setFailedMedia((prev) => new Set(prev).add(index));
  };

  // Calculate image index for lightbox (accounting for videos and failed images)
  let galleryImageIndex = 0;

  return (
    <section className="mx-auto mt-8 max-w-[1100px]">
      <RevealOnScroll direction="up" delay={ANIMATION_DELAYS.HERO_GALLERY}>
        <div className="space-y-2 text-center">
          {/* First row - Gallery images/videos */}
          <div className="mx-auto my-10 grid w-[95%] grid-cols-1 gap-6 sm:grid-cols-2 md:w-full md:grid-cols-3 lg:grid-cols-5">
            {galleryResultImages.map(({ src, type }, i) => {
              if (failedMedia.has(i)) {
                return null;
              }

              if (type === "video") {
                return (
                  <div key={i} className="relative overflow-hidden">
                    <video
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                      className="w-full object-cover md:h-[345px]"
                      onError={() => handleMediaError(i)}
                      aria-label={galleryResultImages[i].alt || `Result showcase video ${i + 1}`}
                    />
                  </div>
                );
              }

              // For images, track the index for lightbox
              const currentImageIndex = galleryImageIndex;
              galleryImageIndex++;

              return (
                <div
                  key={i}
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(currentImageIndex)}
                >
                  <img
                    src={src}
                    alt={galleryResultImages[i].alt || `Result showcase image ${i + 1}`}
                    loading="lazy"
                    onError={() => handleMediaError(i)}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105 md:h-[345px]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>

      {/* Lightbox - no captions or titles */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={allImages}
        controller={{ closeOnBackdropClick: true }}
        render={{
          buttonPrev: allImages.length <= 1 ? () => null : undefined,
          buttonNext: allImages.length <= 1 ? () => null : undefined,
        }}
      />
    </section>
  );
};

export default ResultsGallerySection;
