import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedCard = ({ children }) => {
    const ref = useRef(null);

    // Track the scroll progress of this specific component
    const { scrollYProgress } = useScroll({
        target: ref,
        // Animate from when the start of the card enters the viewport
        // to when the end of the card leaves the viewport
        offset: ["start end", "end start"]
    });

    // Map scroll progress to different visual properties

    // The card will rotate from 60deg to 0deg (center) and then to -60deg
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);

    // The card will scale from 80% to 100% (center) and back to 80%
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);

    // The card will fade in at the beginning and fade out at the end
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                rotateX,
                scale,
                opacity,
                transformOrigin: "bottom", // Ensures the card pivots from its bottom edge
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;