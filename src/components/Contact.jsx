import Marquee from "react-fast-marquee";
import avatar from "../assets/avatar.avif"; // Your circular profile image
import star from "../assets/star2.svg"; // The star icon for the marquee

import contactAvatar from "../assets/contact2.jfif"
import { FaWhatsapp } from "react-icons/fa";

// Icons from lucide-react library
import { Github, Linkedin, Instagram, Globe, Facebook, Mail, MessageCircle } from "lucide-react";
import CardWrapper from "./CardWrapper";

// --- Data for the social links to keep the code clean and manageable ---
const socialLinks = [
  { icon: <Mail size={24} />, href: "mailto:haris@tapoos.dev" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/company/techxudo/" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/harry.siyal/" },
  {
    icon: <FaWhatsapp size={24} />,
    href: "https://wa.me/447883185894"
  },
];



// --- A small, reusable component for the marquee content ---
const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-seven uppercase mx-4">
      Contact
    </span>
    <img src={star} alt="star" className="w-4 h-4" />
  </div>
);

const Contact = () => {
  return (
    // Main Card Container
    <CardWrapper>
      {/* Main content area, using flex-grow to push marquee to bottom */}
      <div className="flex-grow flex flex-col text-text-dark">
        {/* Section 1: Top Area with Profile Image and Title */}
        <div className="flex flex-col items-center text-center pt-8">
          {/* Circular Image */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={contactAvatar}
              alt="Sam Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="ibm text-xs tracking-tight text-third mt-6">CONTACT</p>
          <p className="text-2xl mt-2">LET'S TALK</p>
        </div>

        {/* Section 2: Social Links Grid */}
        <div className="grid grid-cols-4 border-y border-black mt-4 sm:mt-4 sm:mb-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              // Apply a right border to all but the very last icon
              className={`flex items-center justify-center h-24 hover:bg-six hover:text-seven transition-all duration-300 ${index < socialLinks.length - 1 ? "border-r border-black" : ""
                }`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Section 3: Email Area, centered in the remaining space */}
        <div className="flex flex-col items-center text-center flex-grow justify-center py-10 sm:py-8">
          <p className="ibm text-xs tracking-tight">EMAIL ME</p>
          <a href="mailto:haris@tapoos.dev" className="text-lg sm:text-2xl leading-none mt-2 uppercase text-third">haris@tapoos.dev</a>
        </div>
      </div>

      {/* Section 4: Marquee Footer */}
      <div className="bg-six py-3">
        <Marquee speed={60} gradient={false}>
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </Marquee>
      </div>
    </CardWrapper>
  );
};

export default Contact;
