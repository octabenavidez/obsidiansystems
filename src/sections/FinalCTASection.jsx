import { AlertCircle } from "lucide-react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import ModalImage from "react-modal-image";
import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";
import { photos, hero, largerPhotos } from "../data/finalCTAImages";

const FinalCTASection = () => {
  return (
    <section className="px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* === FOMO Message === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="mx-auto text-center">
            <div>
              <div className="flex items-start justify-center gap-4">
                <AlertCircle className="mt-2 h-8 w-8 flex-shrink-0 text-[#aca377]" />
                <h2 className="text-left text-2xl leading-relaxed font-medium lg:text-3xl">
                  <span className="font-bold text-[#aca377]">PD: </span>
                  <span className="font-bold">
                    Esto NO es FOMO: literalmente solo trabajo con 5 clientes
                    por trimestre. Cuando entra, asumo su negocio como propio
                    para garantizar resultados increíbles lo más pronto posible.
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* === Primary CTA Button === */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="text-center">
            <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
          </div>
        </RevealOnScroll>

        {/* === Social Proof Gallery === */}
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="mx-auto max-w-6xl">
            <style>{`
            .react-photo-album img {
              transition: transform 0.3s ease;
            }
            .react-photo-album img:hover {
              transform: scale(1.05);
              z-index: 10;
            }
            .react-photo-album [class*="__MainImageDiv"] {
              display: block !important;
              width: 100% !important;
              height: 100% !important;
            }
            .react-photo-album [class*="__MainImageDiv"] img {
              display: block !important;
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }
            .__react_modal_image__caption{
              display: flex;
              justify-content: center;
            }
          `}</style>
            {/* Photo Album Row 1-3 */}
            <div className="mt-5">
              <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={320}
                spacing={4}
                padding={0}
                rowConstraints={{ minPhotos: 1, maxPhotos: 4 }}
                render={{
                  image: (props, context) => (
                    <ModalImage
                      small={context.photo.src}
                      large={context.photo.src}
                      hideDownload={true}
                      hideZoom={true}
                      className={props.className}
                      style={{
                        ...props.style,
                      }}
                    />
                  ),
                }}
              />
            </div>

            {/* Photo Album Hero Row */}
            <div className="mt-5">
              <RowsPhotoAlbum
                photos={hero}
                targetRowHeight={180}
                spacing={4}
                render={{
                  image: (props, context) => (
                    <ModalImage
                      small={context.photo.src}
                      large={context.photo.src}
                      hideDownload={true}
                      hideZoom={true}
                      className={props.className}
                      style={{
                        ...props.style,
                      }}
                    />
                  ),
                }}
              />
            </div>

            {/* Photo Album Bottom Row */}
            <div className="mt-5">
              <RowsPhotoAlbum
                photos={largerPhotos}
                targetRowHeight={180}
                spacing={4}
                render={{
                  image: (props, context) => (
                    <ModalImage
                      small={context.photo.src}
                      large={context.photo.src}
                      hideDownload={true}
                      hideZoom={true}
                      className={props.className}
                      style={{
                        ...props.style,
                      }}
                    />
                  ),
                }}
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* === Final CTA === */}
        <RevealOnScroll direction="up" delay={0.5}>
          <div className="space-y-8 text-center">
            <h2 className="justify-center text-xl font-medium lg:text-2xl">
              ¿Hace falta que te lo diga?
            </h2>
            <ScheduleCallButton href="https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems?overlayCalendar=true" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FinalCTASection;
