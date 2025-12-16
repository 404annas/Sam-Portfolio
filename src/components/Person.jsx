import Marquee from "react-fast-marquee";
import personImage from "../assets/person.avif";
import star from "../assets/star2.svg";
import CardWrapper from "./CardWrapper";
import mainImage from "../assets/mainImage.jfif";

const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-[10px] text-xs font-medium text-seven uppercase mx-4">
      Brand Growth Strategist
    </span>
    <img src={star} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="ibm text-[10px] text-xs font-medium text-seven uppercase mx-4">
      Creator Monetization Expert
    </span>
    <img src={star} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="ibm text-[10px] text-xs font-medium text-seven uppercase mx-4">
      Digital Marketing Strategist
    </span>
    <img src={star} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="ibm text-[10px] text-xs font-medium text-seven uppercase mx-4">
      PR & Reputation Specialist
    </span>
    <img src={star} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
    <span className="ibm text-[10px] text-xs font-medium text-seven uppercase mx-4">
      Revenue Growth Consultant
    </span>
    <img src={star} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
  </div>
);

const Person = () => {
  return (
    <div className="relative ticket-shape flex justify-center items-center">
      <CardWrapper>
        <div className="flex-grow custom-scrollbar overflow-y-auto">
          <div className="relative z-10 px-4 sm:px-6 py-4 sm:py-6">
            {/* Name */}
            <h2
              className="
                text-third text-[61px] lg:text-[72px]
                text-center leading-none whitespace-nowrap
              "
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              HARIS SAJJAD
            </h2>

            {/* Dotted Line */}
            <div className="dotted-line-lg my-8 ml-2"></div>

            {/* Image Section */}
            <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto">
              {/* <div className="absolute inset-0 bg-second"></div> */}
              <img
                src={mainImage}
                alt="Sam Patel"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Marquee Section */}
          <div className="mt-4">
            <div className="relative z-10 bg-second py-3 sm:py-4">
              <Marquee speed={60} gradient={false}>
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
              </Marquee>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Person;
