import Marquee from "react-fast-marquee";
import star from "../assets/star2.svg";
import star2 from "../assets/star.svg";
import CardWrapper from "./CardWrapper";

// --- servicesData array remains the same ---
const servicesData = [
  {
    number: "01",
    title: "DATA ANALYSIS",
    description: "UNCOVER MEANINGFUL TRENDS AND INSIGHTS FROM DATASETS.",
  },
  {
    number: "02",
    title: "MACHINE LEARNING",
    description: "BUILD PREDICTIVE MODELS TO SOLVE BUSINESS PROBLEMS.",
  },
  {
    number: "03",
    title: "DATA VISUALIZATION",
    description: "CREATE CLEAR, IMPACTFUL CHARTS AND DASHBOARDS.",
  },
  {
    number: "04",
    title: "STATISTICAL MODELING",
    description: "IMPLEMENT RIGOROUS METHODS TO ENSURE ACCURATE RESULTS.",
  },
];

// --- ServiceItem component remains the same ---
const ServiceItem = ({ number, title, description, isFirst }) => (
  <div
    className={`flex items-center justify-between gap-4 border-b border-[#745731] ${isFirst ? "pt-0 pb-3 sm:pb-6" : "py-3 sm:py-6"
      }`}
  >
    <div className="flex sm:flex-row flex-col items-start gap-2 sm:gap-4 px-4">
      <p className="ibm text-text-dark/50 text-xs sm:text-sm mt-1">{number}</p>
      <div>
        <h3 className="text-xl sm:text-2xl text-third font-semibold tracking-wider">
          {title}
        </h3>
        <p className="ibm text-xs text-[#393B2C] mt-1 tracking-tight font-semibold max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
    <img src={star2} alt="star" className="w-10 h-10 sm:w-14 sm:h-14 pr-4" />
  </div>
);

// --- MarqueeContent component remains the same ---
const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-third uppercase mx-4">
      Services
    </span>
    <img src={star2} alt="star" className="w-4 h-4" />
  </div>
);

const Services = () => {
  return (
    // Main Card Container - no changes here
    <CardWrapper>
      {/* Scrollable Area - The Marquee will now be moved inside this div */}
      <div className="flex-grow custom-scrollbar overflow-y-auto">
        {/* Header */}
        <div className="py-6">
          <p className="ibm text-xs text-text-dark tracking-widest px-4 border-b border-[#745731] pb-4 ">
            SERVICES
          </p>
        </div>

        {/* Services List */}
        <div>
          {servicesData.map((service, index) => (
            <ServiceItem
              key={service.number}
              {...service}
              isFirst={index === 0}
            />
          ))}
        </div>

        <div className="bg-six py-4 mt-4">
          <Marquee speed={60} gradient={false}>
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </Marquee>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Services;
