import React from "react";
import Marquee from "react-fast-marquee";
import avatar from "../assets/avatar.avif"; // Your circular profile image
import star from "../assets/star2.svg"; // The star icon for the marquee

// Icons from lucide-react library
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import CardWrapper from "./CardWrapper";

// --- Data for the social links to keep the code clean and manageable ---
const socialLinks = [
  { icon: <Github size={24} />, href: "https://github.com" },
  { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
  { icon: <Twitter size={24} />, href: "https://twitter.com" },
  { icon: <Facebook size={24} />, href: "https://facebook.com" },
];

// --- A small, reusable component for the marquee content ---
const MarqueeContent = () => (
  <div className="flex items-center">
    <span className="ibm text-xs font-medium text-first uppercase mx-4">
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
          <div className="w-20 h-20 rounded-full bg-second flex items-center justify-center overflow-hidden">
            <img
              src={avatar}
              alt="Sam Patel"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <p className="ibm text-xs tracking-tight text-third mt-6">CONTACT</p>
          <p className="text-2xl mt-2">LET'S TALK</p>
        </div>

        {/* Section 2: Social Links Grid */}
        <div className="grid grid-cols-4 border-y border-black my-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              // Apply a right border to all but the very last icon
              className={`flex items-center justify-center h-24 hover:bg-second hover:text-first transition-all duration-300 ${
                index < socialLinks.length - 1 ? "border-r border-black" : ""
              }`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Section 3: Email Area, centered in the remaining space */}
        <div className="flex flex-col items-center text-center flex-grow justify-center pb-8">
          <p className="ibm text-xs tracking-tight">EMAIL ME</p>
          <p className="text-[32px] leading-none mt-2">HELLO@PATEL.COM</p>
        </div>
      </div>

      {/* Section 4: Marquee Footer */}
      <div className="bg-second py-3">
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
