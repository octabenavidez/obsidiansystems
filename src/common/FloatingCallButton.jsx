import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import CallModal from "./CallModal";

/**
 * FloatingCallButton
 *
 * Fixed floating button component that opens a call scheduling modal.
 * Always visible at the bottom right corner of the screen.
 *
 * Props:
 * @param {string} [calendarLink] - Google Calendar link for scheduling
 * @param {string} [profileImage] - Profile image URL
 * @param {string} [name] - Person's name
 * @param {string} [role] - Person's role/title
 * @param {string} [description] - Modal description text
 * @param {string} [availabilityText] - Optional availability indicator text
 */

const FloatingCallButton = ({
  calendarLink = "https://cal.com/fran-di-giorno/auditoria-estrategica-obsidian-systems",
  profileImage = "/src/assets/images/fran.jpeg",
  name = "Fran Di Giorno",
  role = "CEO Obsidian Systems",
  description = "Esta llamada será conmigo. No es una “auditoría”; es una evaluación para revisar lo que has construido y confirmar si cumples las condiciones para que trabajemos juntos.",
  availabilityText = "Solo estoy tomando pocas llamadas por día.",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Pressed effect and automatic modal opening
  useEffect(() => {
    const PRESS_DURATION = 500; // 500 milliseconds of pressed effect
    const MODAL_DELAY = 60000; // 60 seconds total
    const PRESS_START = MODAL_DELAY - PRESS_DURATION; // Activate pressed effect before modal opens

    // Timer to activate the pressed effect
    const pressTimer = setTimeout(() => {
      setIsPressed(true);
    }, PRESS_START);

    // Timer to open the modal
    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
      setIsPressed(false); // Remove pressed effect when modal opens
    }, MODAL_DELAY);

    // Clean up timers if component unmounts before execution
    return () => {
      clearTimeout(pressTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setIsModalOpen(true);
          setIsPressed(false); // Remove pressed effect on manual click
        }}
        className={`fixed right-6 bottom-6 z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#aca377] to-[#d4c994] transition-all duration-300 focus:ring-2 focus:ring-[#aca377]/50 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:right-8 md:bottom-8 md:h-20 md:w-20 ${
          isPressed
            ? "scale-90 shadow-[0_2px_10px_rgba(172,163,119,0.3)]"
            : "scale-100 shadow-[0_4px_20px_rgba(172,163,119,0.4)] hover:scale-110 hover:shadow-[0_6px_30px_rgba(172,163,119,0.6)]"
        }`}
        aria-label="Open call scheduling modal"
      >
        <Phone
          className={`h-5 w-5 text-black transition-transform duration-300 md:h-6 md:w-6 ${
            isPressed ? "scale-90" : "scale-100"
          }`}
        />
      </button>

      {/* Modal */}
      <CallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendarLink={calendarLink}
        profileImage={profileImage}
        name={name}
        role={role}
        description={description}
        availabilityText={availabilityText}
      />
    </>
  );
};

export default FloatingCallButton;
