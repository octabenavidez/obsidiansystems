/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/**
 * RevealOnScroll
 * Reusable animation wrapper for scroll-triggered reveals.
 * If element is already visible on mount (above current scroll position), 
 * it shows immediately without animation.
 *
 * Usage:
 * <RevealOnScroll>
 *   <YourContent />
 * </RevealOnScroll>
 */

const RevealOnScroll = ({ children, direction = "bottom", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [wasVisibleOnMount, setWasVisibleOnMount] = useState(false);

  // Check if element is already scrolled past (completely above current scroll position)
  useEffect(() => {
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get element's bottom position relative to document
        const elementBottom = rect.bottom + scrollTop;
        
        // Only show immediately if element is completely above current scroll position
        // (meaning it was already scrolled past, not currently visible)
        if (elementBottom < scrollTop) {
          setWasVisibleOnMount(true);
        }
      }
    };

    // Check immediately
    checkVisibility();
    
    // Also check after a small delay to account for layout shifts and dynamic content
    const timeoutId = setTimeout(checkVisibility, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Define variants for different directions
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "bottom" ? 75 : direction === "top" ? -75 : 0,
      x: direction === "left" ? -75 : direction === "right" ? 75 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  // If element was already visible on mount, show it immediately
  if (wasVisibleOnMount) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
