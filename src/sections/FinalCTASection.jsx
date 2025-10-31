import { AlertCircle } from "lucide-react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import ModalImage from "react-modal-image";
import ScheduleCallButton from "../common/ScheduleCallButton";
import RevealOnScroll from "../common/RevealOnScroll";
import { photos, hero, largerPhotos } from "../data/finalCTAImages";

const FinalCTASection = () => {

  return (
    <section className="text-white px-4 py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* === FOMO Message === */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="text-center mx-auto">
            <div>
              <div className="flex items-start justify-center gap-4">
                <AlertCircle className="w-8 h-8 text-[#aca377] flex-shrink-0 mt-2" />
                <h2 className="text-2xl lg:text-3xl font-medium leading-relaxed text-left">
                  <span className="text-[#aca377] font-bold">PD: </span>
                  <span className="font-bold">
                    Esto NO es FOMO: literalmente solo trabajo con 5 clientes por
                    trimestre. Cuando entra, asumo su negocio como propio para
                    garantizar resultados increíbles lo más pronto posible.
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
          <div className="max-w-6xl mx-auto">
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
          <div className="text-center space-y-8">
            <h2 className="text-xl lg:text-2xl justify-center font-medium">
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
