import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.avif";
import { Mail } from "lucide-react";
// import cursor1 from "../public/cursor1.svg";
// import cursor2 from "../public/cursor2.svg";

// Import BOTH card components
import Person from "./Person";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

// Create a list of the pages/cards you want to display
const pages = [
  { id: 1, component: <Person /> },
  { id: 2, component: <About /> },
  { id: 3, component: <Services /> },
  { id: 4, component: <Contact /> },
];

const Background = () => {
  const [cursor, setCursor] = useState("url(/cursor1.svg), auto");

  useEffect(() => {
    document.body.style.cursor = cursor;
  }, [cursor]);

  return (
    <div className="bg-first h-screen w-screen flex items-center justify-center p-3">
      {/* The main container grid remains the same */}
      <div className="bg-[#161721] noise-on-card rounded-[40px] h-full w-full relative grid grid-rows-1 grid-cols-1">
        {/* Layer 1: Header/Footer (no changes) */}
        <div className="[grid-area:1/1] flex flex-col justify-between p-5">
          {/* Top section */}
          <div className="flex flex-row items-center justify-between z-30">
            <img
              loading="lazy"
              className="w-10 h-10 rounded-full bg-first hover:bg-second transition-all duration-300 border border-[#161721]"
              src={avatar}
              alt="Avatar"
            />
            <p
              onMouseEnter={() => setCursor("url(/cursor2.svg), auto")}
              onMouseLeave={() => setCursor("url(/cursor1.svg), auto")}
              className="bg-first hover:bg-second transition-all duration-300 hover:text-first p-2.5 sm:p-3 border border-[#161721] rounded-full"
            >
              <Mail size={18} strokeWidth={1.5} />
            </p>
          </div>
          {/* Footer section */}
          <div className="hidden sm:flex flex-row items-center justify-between text-first w-full text-xs ibm z-30 px-6">
            <p>&copy; 2025, SAM PATEL</p>
            <div className="flex items-center gap-4">
              <p>LICENSES</p>
            </div>
          </div>
        </div>

        {/* Layer 2: The background heading (no changes) */}
        <div className="[grid-area:1/1] w-full h-full hidden sm:flex items-center justify-center overflow-hidden">
          <motion.h1
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 600,
              transformOrigin: "bottom",
            }}
            className="text-first text-[12vw] sm:text-[10vw] md:text-[12vw] lg:text-[25vw] text-center leading-none whitespace-nowrap mx-5 select-none tracking-tight pt-36"
          >
            SAM PATEL
          </motion.h1>
        </div>

        <div className="[grid-area:1/1] w-full h-full z-20 overflow-y-scroll snap-y snap-proximity no-scrollbar">
          {pages.map((page, index) => (
            <div
              key={page.id}
              className={`h-screen w-full flex items-center justify-center flex-shrink-0`}
            >
              {page.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
