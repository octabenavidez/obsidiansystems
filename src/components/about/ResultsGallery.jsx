import RevealOnScroll from "../../common/RevealOnScroll";
import ModalImage from "react-modal-image";

const ResultsGallery = ({ images }) => {
  return (
    <RevealOnScroll direction="up" delay={1}>
      <div className="space-y-10 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          ¿Qué resultados voy a alcanzar?
        </h2>
        <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <ModalImage
                small={img}
                large={img}
                hideDownload={true}
                hideZoom={true}
                className="h-[450px] w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default ResultsGallery;
