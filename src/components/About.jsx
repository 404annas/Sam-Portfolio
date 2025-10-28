import React from 'react';
import Marquee from "react-fast-marquee";
import star from '../assets/star2.svg'; // We can reuse the star icon

// A small, reusable component for the marquee content
const MarqueeContent = () => (
    <div className='flex items-center'>
        <span className='ibm text-xs font-medium text-first uppercase mx-4'>Background</span>
        <img src={star} alt="star" className='w-4 h-4' />
    </div>
);

// A reusable component for the stat blocks to keep code clean
const StatBlock = ({ value, label }) => (
    <div className='flex flex-col items-start justify-center py-4 px-4'>
        <p className='text-5xl text-third'>{value}</p>
        <p className='ibm text-xs text-[#393B2C] tracking-tight mt-6 font-semibold'>{label}</p>
    </div>
);

const About = () => {
    return (
        // Main Card Container with noise and rounded corners
        <div className='bg-first noise-on-card w-[clamp(300px,30vw,380px)] h-[85vh] rounded-2xl flex flex-col overflow-hidden'>

            {/* Main content area */}
            <div className='flex-grow flex flex-col'>

                {/* Section 1: About Me */}
                <div className='text-[#2C2E28] px-4 pt-6'>
                    <p className='ibm text-xs font-medium tracking-tight'>ABOUT ME</p>
                    <p className='text-2xl mt-4 leading-7 max-w-xs font-medium'>
                        I'M SAM PATEL, A DATA SCIENTIST WHO LOVES USING DATA TO SOLVE COMPLEX PROBLEMS AND DELIVER CLEAR, IMPACTFUL INSIGHTS.
                    </p>
                </div>

                {/* Section 2: Stats Grid */}
                <div className='flex-grow grid grid-cols-2 grid-rows-2 border-t border-forth mt-4'>
                    {/* We add borders to create the grid lines */}
                    <div className='border-r border-b border-forth'>
                        <StatBlock value="110+" label="PROJECTS COMPLETED" />
                    </div>
                    <div className='border-b border-forth'>
                        <StatBlock value="12+" label="YEARS EXPERIENCE" />
                    </div>
                    <div className='border-r border-forth'>
                        <StatBlock value="95%" label="MODEL ACCURACY" />
                    </div>
                    <div className=''>
                        <StatBlock value="20+" label="INDUSTRIES EXPLORED" />
                    </div>
                </div>
            </div>

            {/* Section 3: Marquee Footer */}
            <div className='bg-second py-3'>
                <Marquee speed={60} gradient={false}>
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                </Marquee>
            </div>

        </div>
    );
};

export default About;