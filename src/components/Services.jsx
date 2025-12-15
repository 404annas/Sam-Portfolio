import Marquee from "react-fast-marquee";
import star2 from "../assets/star2.svg";
import CardWrapper from "./CardWrapper";

// Services data
const servicesData = [
  { number: "01", title: "Digital Marketing Strategy", description: "Data-driven audience and revenue growth." },
  { number: "02", title: "Public Relations (PR)", description: "Building credibility and media presence." },
  { number: "03", title: "Brand Reputation Management", description: "Strengthening trust and brand authority." },
  { number: "04", title: "Branding & Identity", description: "Creating a clear, memorable brand presence." },
  { number: "05", title: "CRM & CMS Development", description: "Custom systems for customer and content management." },
  { number: "06", title: "AI & Automation", description: "Streamlining operations and scaling efficiency." },
  { number: "07", title: "Landing Page Development", description: "High-converting, performance-driven pages." },
  { number: "08", title: "Creator Monetization", description: "Turning reach into sustainable revenue." },
  { number: "09", title: "Sales Growth Strategy", description: "Scaling conversions and business growth." },
  { number: "10", title: "Growth Consulting", description: "Strategic guidance for long-term expansion." },
];

// Service Item
const ServiceItem = ({ number, title, description, isFirst }) => (
  <div
    className={`flex items-center justify-between gap-4 border-b border-[#745731] ${isFirst ? "pt-0 pb-3 sm:pb-6" : "py-3 sm:py-6"}`}
  >
    <div className="flex sm:flex-row flex-col items-start gap-2 sm:gap-4 px-4">
      <p className="ibm text-text-dark/50 text-xs sm:text-sm mt-1">{number}</p>
      <div>
        <h3 className="text-xl sm:text-xl w-[120%] text-third font-semibold tracking-wider uppercase">{title}</h3>
        <p className="ibm text-xs text-[#393B2C] mt-1 tracking-tight font-semibold max-w-[240px] uppercase">{description}</p>
      </div>
    </div>
    <img src={star2} alt="star" className="w-10 h-10 sm:w-12 sm:h-12 pr-4" />
  </div>
);

// Marquee Content
const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-seven uppercase mx-4">Services</span>
    <img src={star2} alt="star" className="w-4 h-4" />
  </div>
);

// Services Component
const Services = () => {
  return (
    <CardWrapper>
      {/* Scrollable Container */}
      <div className="flex flex-col max-h-[80vh] sm:max-h-none overflow-y-auto md:overflow-visible">
        {/* Header */}
        <div className="py-6">
          <p className="ibm text-xs text-text-dark tracking-widest px-4 border-b border-[#745731] pb-4">SERVICES</p>
        </div>

        {/* Services List */}
        <div>
          {servicesData.map((service, index) => (
            <ServiceItem key={service.number} {...service} isFirst={index === 0} />
          ))}
        </div>

        {/* Marquee Footer */}
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
