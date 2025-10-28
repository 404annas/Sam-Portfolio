import React from 'react';
import personImage from '../assets/person.avif';

const Person = () => {
    return (
        // Main card container
        <div className='bg-first ticket-shape w-[clamp(300px,30vw,450px)] h-[80vh] rounded-2xl flex flex-col custom-scrollbar overflow-y-auto'>

            {/* Inner container for padding */}
            <div className='px-6 py-4'>

                {/* Top Text */}
                <h2 className='text-third text-[99px] text-center leading-none'>
                    SAM
                    <br />
                    PATEL
                </h2>

                {/* Dotted Line */}
                <div className='border-b border-dotted border-black my-6'></div>

                {/* Image and Arrows Section */}
                <div className='relative aspect-square'>
                    {/* Red background */}
                    <div className='bg-second w-full h-full'></div>

                    {/* Person Image (Positioned absolutely on top of everything) */}
                    <img
                        src={personImage}
                        alt="Sam Patel"
                        className='absolute top-0 left-0 w-80 h-80 object-cover'
                    />
                </div>

                {/* Filler content to make the card scrollable */}
                <div className='h-[300px] mt-6 text-text-dark'>
                    <p className='ibm text-sm'>This is some scrollable content to demonstrate the custom scrollbar. You can replace this with your actual project details, bio, or anything else you want to display inside the card.</p>
                </div>

            </div>
        </div>
    );
};

export default Person;