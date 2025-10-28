import React from "react";
import Marquee from "react-fast-marquee";
import personImage from "../assets/person.avif";
import star from "../assets/star2.svg";

// MarqueeContent component remains the same...
const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-first uppercase mx-4">
      Data Scientist
    </span>
    <img src={star} alt="star" className="w-4 h-4" />
  </div>
);

const Person = () => {
  return (
    // THIS IS THE NEW WRAPPER. Its only job is to hold the cutouts.
    <div className="relative ticket-shape">
      {/* The original card container is now inside the wrapper. */}
      {/* It keeps overflow-hidden to round the corners of its content. */}
      <div className="bg-first noise-on-card lg:w-[clamp(300px,30vw,390px)] w-[360px] 2xl:h-[68vh] xl:h-[85vh]  md:h-[70px]  rounded-2xl flex flex-col overflow-hidden">
        {/* Scrollable Area */}
        <div className="flex-grow custom-scrollbar overflow-y-auto">
          <div className="relative z-10 px-6 py-4">
            {/* Top Text */}
            <h2
              className="text-third text-[82px] text-center leading-none whitespace-nowrap"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              SAM PATEL
            </h2>

            {/* Dotted Line */}
            <div className="dotted-line-lg my-8"></div>

            {/* Image Section */}
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-second"></div>
              <img
                src={personImage}
                alt="Sam Patel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Marquee */}
          <div className="mt-4">
            <div className="relative z-10 bg-second py-4 mt-auto">
              <Marquee speed={60} gradient={false}>
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
