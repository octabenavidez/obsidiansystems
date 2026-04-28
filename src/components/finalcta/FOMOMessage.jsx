import { AlertCircle } from "lucide-react";
import RevealOnScroll from "../../common/RevealOnScroll";

/**
 * FOMO Message component
 * @param {Object} props - Component properties
 * @param {string} props.text - Message text
 * @returns {JSX.Element} Rendered FOMO message
 */
const FOMOMessage = ({ text }) => {
  return (
    <RevealOnScroll direction="up" delay={0.2}>
      <div className="mx-auto text-center">
        <div>
          <div className="mx-auto flex items-start justify-center gap-4 md:max-w-[60%]">
            <AlertCircle className="mt-2 h-8 w-8 flex-shrink-0 text-[#aca377]" />
            <h2 className="text-left text-lg leading-relaxed font-bold font-medium lg:text-2xl">
              <span className="text-[#aca377]">PD: </span>
              <span>{text}</span>
            </h2>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default FOMOMessage;
