import React from 'react';
import { motion } from 'framer-motion';

const MobileFooterPage = () => {
    return (
        // This container is only visible on screens SMALLER than lg (`lg:hidden`)
        <div className="flex lg:hidden flex-col items-center justify-center h-full w-full text-first relative">

            {/* The "SAM PATEL" heading for mobile */}
            <motion.h1
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: 600,
                    transformOrigin: "bottom",
                }}
                className="text-[20vw] text-center leading-none select-none"
            >
                SAM PATEL
            </motion.h1>

            {/* The footer links, positioned at the bottom of the screen */}
            <div className="absolute bottom-5 w-full flex flex-col items-center text-xs ibm gap-2 text-first">
                <p>&copy; 2025, SAM PATEL</p>
                <div className="flex items-center gap-4">
                    <p>LICENSES</p>
                    <p>POWERED BY WEBFLOW</p>
                </div>
            </div>

        </div>
    );
};

export default MobileFooterPage;