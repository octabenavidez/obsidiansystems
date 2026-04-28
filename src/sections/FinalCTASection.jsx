import SocialProofGallery from "../components/finalcta/SocialProofGallery";
import { photos, widePhoto, largerPhotos } from "../data/gallery/images";

/**
 * Final CTA Section component
 * Displays FOMO message, social proof gallery, and final call to action
 * @returns {JSX.Element} Rendered FinalCTA section
 */
const FinalCTASection = () => {
  return (
    <section className="px-4 text-white">
      <div className="space-y-12">
        {/* === Social Proof Gallery === */}
        <SocialProofGallery
          photos={photos}
          widePhotos={widePhoto}
          largerPhotos={largerPhotos}
        />

        {/* Disclaimer */}
        <p className="mx-auto max-w-[1100px] text-center text-sm leading-relaxed font-extralight text-white/80 italic">
          Todos los resultados de esta página son de clientes existentes dentro
          de <span className="text-white">Consulting OS™</span>. Estas
          personas compartieron sus experiencias de forma completamente
          voluntaria y sus resultados vienen de seguir una metodología adaptada
          a su negocio. Tus resultados pueden variar según factores como tu
          experiencia previa, esfuerzo, habilidades, capacidad de enfocarse,
          condiciones del mercado y la implementación de las estrategias que
          brindamos dentro del servicio. No afirmamos que estos resultados sean
          alcanzables por igual por todas las personas, después de todo, cada
          negocio es distinto.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
