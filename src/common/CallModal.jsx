import { useEffect } from "react";
import { X } from "lucide-react";

/**
 * CallModal
 *
 * Elegant modal component for scheduling calls, matching the site's premium aesthetic.
 *
 * Props:
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Function to close the modal
 * @param {string} [calendarLink] - Google Calendar link for scheduling
 * @param {string} [profileImage] - Profile image URL
 * @param {string} [profileImageAlt] - Profile image alt text
 * @param {string} [name] - Person's name
 * @param {string} [role] - Person's role/title
 * @param {string} [description] - Modal description text
 * @param {string} [availabilityText] - Optional availability indicator text
 */

const CallModal = ({
  isOpen,
  onClose,
  calendarLink = "https://cal.com/fran-di-giorno/admision-obsidian-systems",
  profileImage = "/src/assets/images/founder/founder-avatar-floating.jpg",
  profileImageAlt = "Fotografía de Fran Di Giorno, CEO de Consulting OS™, disponible para agendar llamada de admisión",
  name = "Fran Di Giorno",
  role = "CEO de Obsidian Systems",
  description = "Esta llamada será conmigo. No es una “auditoría”; es una evaluación para revisar lo que has construido y confirmar si cumples las condiciones para que trabajemos juntos.",
  availabilityText = "Solo estoy tomando pocas llamadas por día.",
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open (only on mobile where there's a backdrop)
  useEffect(() => {
    if (isOpen) {
      // Only block scroll on mobile
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - Only on mobile to avoid blocking */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden"
        onClick={onClose}
      />

      {/* Modal Content - Positioned at bottom right corner */}
      <div
        className="fixed right-4 bottom-24 z-50 w-[calc(100vw-2rem)] max-w-xs rounded-2xl border border-white/20 bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-black p-5 shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300 md:right-8 md:bottom-32 md:w-full md:max-w-sm md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 cursor-pointer rounded-full p-1.5 text-gray-400 transition-all duration-200 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={profileImage}
              alt={profileImageAlt}
              className="h-12 w-12 rounded-full border-2 border-white/50 object-cover"
            />
            <div className="absolute -right-0.5 -bottom-0.5 h-4 w-4 rounded-full border-2 border-[#0a0a0a] bg-green-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white">{name}</h3>
            <p className="text-[10px] text-gray-400 md:text-xs">{role}</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-lg leading-tight font-bold text-white md:text-xl">
          Agenda Una Llamada Con Fran
        </h2>

        {/* Description */}
        <p className="mb-4 text-xs leading-relaxed text-gray-300 md:text-sm">
          {description}
        </p>

        {/* Availability Indicator */}
        {availabilityText && (
          <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2">
            <span className="text-[10px] text-gray-300 md:text-xs">
              {availabilityText}
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white md:text-[10px]">
              1 h
            </span>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={calendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-gradient-to-r from-white/10 to-white/5 px-4 py-3 text-center text-xs font-bold text-white transition-all duration-300 hover:border-white hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] focus:ring-2 focus:ring-white/50 focus:outline-none md:px-5 md:py-3.5 md:text-sm"
        >
          <svg
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>Agenda tu llamada</span>
        </a>
      </div>
    </>
  );
};

export default CallModal;
