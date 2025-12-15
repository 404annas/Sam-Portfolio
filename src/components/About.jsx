import Marquee from "react-fast-marquee";
import star from "../assets/star2.svg";
import CardWrapper from "./CardWrapper";

const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-seven uppercase mx-4">
      PR, Marketing & Growth Specialist
    </span>
    <img src={star} alt="star" className="w-4 h-4" />
  </div>
);

const StatBlock = ({ value, label }) => (
  <div className="flex flex-col items-start justify-center py-4 px-3 sm:px-4">
    <p className="text-5xl text-third">{value}</p>
    <p className="ibm text-xs text-[#393B2C] tracking-tight mt-4 sm:mt-6 font-semibold">
      {label}
    </p>
  </div>
);

const About = () => {
  return (
    <CardWrapper>
      {/* Scroll container for small devices */}
      <div
        className="
          flex flex-col
          max-h-[100vh] overflow-y-auto
          md:max-h-none md:overflow-visible
        "
      >
        {/* Section 1: About Me */}
        <div className="text-[#2C2E28] px-4 sm:px-6 pt-6 sm:pt-8">
          <p className="ibm text-xs font-medium tracking-tight">ABOUT ME</p>
          <p className="text-2xl mt-4 leading-7 max-w-xs sm:max-w-sm font-medium text-third uppercase">
            I help creators and brands turn visibility into revenue through
            strategic monetization, PR, and digital marketing, supported by CRM
            and CMS development, AI solutions, and smart automation to drive real,
            measurable results.
          </p>
        </div>

        {/* Section 2: Stats Grid */}
        <div className="grid grid-cols-2 grid-rows-2 border-t border-forth mt-6">
          <div className="border-r border-b border-forth">
            <StatBlock value="300+" label="PROJECTS COMPLETED" />
          </div>
          <div className="border-b border-forth">
            <StatBlock value="16+" label="YEARS EXPERIENCE" />
          </div>
          <div className="border-r border-forth">
            <StatBlock value="97%" label="MODEL ACCURACY" />
          </div>
          <div>
            <StatBlock value="20+" label="INDUSTRIES EXPLORED" />
          </div>
        </div>

        {/* Section 3: Marquee Footer */}
        <div className="bg-six py-3 sm:py-4 mt-0">
          <Marquee speed={60} gradient={false}>
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </Marquee>
        </div>
      </div>
    </CardWrapper>
  );
};


export default About;
