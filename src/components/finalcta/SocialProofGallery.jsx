import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import RevealOnScroll from "../../common/RevealOnScroll";

/**
 * Social Proof Gallery component displaying photo albums
 * @param {Object} props - Component properties
 * @param {Array} props.photos - First row photos
 * @param {Array} props.widePhotos - Wide format middle row photos
 * @param {Array} props.largerPhotos - Bottom row photos
 * @returns {JSX.Element} Rendered social proof gallery
 */
const SocialProofGallery = ({ photos, widePhotos, largerPhotos }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine all photos for lightbox navigation
  const allPhotos = [...photos, ...widePhotos, ...largerPhotos].map(
    (photo) => ({ src: photo.src }),
  );

  /**
   * Open lightbox at specific image index
   * @param {number} index - Index of the image to open
   */
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  /**
   * Get the starting index offset for each photo group
   * @param {string} group - The group name ('photos', 'wide', 'larger')
   * @returns {number} The starting index for the group
   */
  const getIndexOffset = (group) => {
    switch (group) {
      case "photos":
        return 0;
      case "wide":
        return photos.length;
      case "larger":
        return photos.length + widePhotos.length;
      default:
        return 0;
    }
  };

  return (
    <RevealOnScroll direction="up" delay={0.4}>
      <div className="mx-auto md:max-w-[1100px]">
        <style>{`
          .react-photo-album img {
            transition: transform 0.3s ease;
            cursor: pointer;
          }
          .react-photo-album img:hover {
            transform: scale(1.05);
            z-index: 10;
          }
        `}</style>

        {/* Photo Album Row 1-3 */}
        <div>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={275}
            spacing={20}
            padding={0}
            rowConstraints={{ minPhotos: 1, maxPhotos: 4 }}
            render={{
              image: (props, context) => (
                <img
                  {...props}
                  onClick={() =>
                    openLightbox(getIndexOffset("photos") + context.index)
                  }
                />
              ),
            }}
          />
        </div>

        {/* Photo Album Wide Row */}
        <div className="mt-5">
          <RowsPhotoAlbum
            photos={widePhotos}
            targetRowHeight={155}
            spacing={20}
            render={{
              image: (props, context) => (
                <img
                  {...props}
                  onClick={() =>
                    openLightbox(getIndexOffset("wide") + context.index)
                  }
                />
              ),
            }}
          />
        </div>

        {/* Photo Album Bottom Row */}
        <div className="mt-5">
          <RowsPhotoAlbum
            photos={largerPhotos}
            targetRowHeight={155}
            spacing={20}
            render={{
              image: (props, context) => (
                <img
                  {...props}
                  onClick={() =>
                    openLightbox(getIndexOffset("larger") + context.index)
                  }
                />
              ),
            }}
          />
        </div>
      </div>

      {/* Lightbox - no captions or titles */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={allPhotos}
        controller={{ closeOnBackdropClick: true }}
      />
    </RevealOnScroll>
  );
};

export default SocialProofGallery;
