import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import avatarImage from "../assets/avatarImage2.jfif";

import avatar from "../assets/avatar.avif";
import { Mail } from "lucide-react";

import Person from "./Person";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Works from "./Works";

const pages = [
  { id: 1, component: <Person /> },
  { id: 2, component: <About /> },
  { id: 3, component: <Services /> },
  { id: 4, component: <Works /> },
  { id: 5, component: <Contact /> },
];

const FOLD_AMOUNT = 45;

const Background = () => {
  const [cursor, setCursor] = useState("url(/cursor1.svg), auto");
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const totalPages = pages.length;

  useEffect(() => {
    document.body.style.cursor = cursor;

    // ✅ Prevent horizontal scroll globally
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
    };
  }, [cursor]);

  return (
    <div className="bg-first h-screen w-screen flex items-center justify-center p-3 overflow-x-hidden">
      <div
        className="bg-[#161721] rounded-[40px] h-full w-full relative z-0 grid grid-rows-1 grid-cols-1 overflow-hidden"
      >
        {/* Header and Footer */}
        <div className="[grid-area:1/1] flex flex-col justify-between p-5">
          <div className="flex flex-row items-center justify-between z-30">
            <img
              loading="lazy"
              className="w-12 h-12 rounded-full bg-first hover:bg-six transition-all duration-300 border border-[#161721]"
              src={avatarImage}
              alt="Avatar"
            />
            <a href="mailto:haris@tapoos.dev" target="_blank"
              onMouseEnter={() => setCursor("url(/cursor2.svg), auto")}
              onMouseLeave={() => setCursor("url(/cursor1.svg), auto")}
              className="bg-first hover:bg-six transition-all duration-300 hover:text-seven p-2.5 sm:p-3 border-[#161721] rounded-full"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="hidden lg:flex flex-row items-center justify-between text-first w-full text-xs ibm z-30 px-6">
            <p className="">Haris Sajjad</p>
            <div className="">
              <p>Tapoos | Techxudo | PR Media</p>
            </div>
          </div>
        </div>

        {/* Background Heading */}
        <div className="[grid-area:1/1] w-full h-full hidden lg:flex items-center justify-center overflow-hidden">
          <motion.h1
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 600,
              transformOrigin: "bottom",
            }}
            className="text-first text-[12vw] sm:text-[10vw] md:text-[12vw] lg:text-[22vw] text-center leading-none whitespace-nowrap mx-5 select-none tracking-tight pt-48"
          >
            HARIS SAJJAD
          </motion.h1>
        </div>

        {/* 3D Scrolling Cards */}
        <div
          ref={scrollRef}
          className="[grid-area:1/1] w-full h-full z-20 overflow-y-auto overflow-x-hidden no-scrollbar"
          style={{ scrollbarGutter: "stable" }}
        >
          {pages.map((page, index) => {
            const inputRange = [
              (index - 1) / (totalPages - 1),
              index / (totalPages - 1),
              (index + 1) / (totalPages - 1),
            ];
            const outputRange = [FOLD_AMOUNT, 0, -FOLD_AMOUNT];
            const rotateX = useTransform(scrollYProgress, inputRange, outputRange);

            return (
              <div
                key={page.id}
                style={{ perspective: "1000px" }}
                className="h-screen w-full flex-shrink-0 overflow-x-hidden overflow-y-hidden" /* <-- FIX APPLIED HERE */
              >
                <motion.div
                  style={{
                    rotateX,
                    transformOrigin: "center",
                  }}
                  className="w-full h-full flex items-center justify-center overflow-x-hidden"
                >
                  {page.component}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Background;