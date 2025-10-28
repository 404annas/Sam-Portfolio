import React, { useState, useEffect } from 'react';
import avatar from "../assets/avatar.avif";
import { Mail } from 'lucide-react';
import cursor2 from "../assets/cursor-2.svg";
import cursor1 from "../assets/cursor1.svg";
// Import the new Person component
import Person from './Person';

const Background = () => {
  const [cursor, setCursor] = useState(`url(${cursor1}), auto`);

  useEffect(() => {
    document.body.style.cursor = cursor;
  }, [cursor]);

  return (
    <div className='bg-first h-screen w-screen flex items-center justify-center p-3'>
      <div className='bg-[#1A1A1A] noise-overlay rounded-[40px] h-full w-full relative flex flex-col justify-between p-5 overflow-hidden'>

        {/* Top section */}
        <div className='flex flex-row items-center justify-between z-10'>
          <img
            loading='lazy'
            className='w-10 h-10 rounded-full bg-first hover:bg-second transition-all duration-300'
            src={avatar}
            alt='Avatar'
          />
          <p
            onMouseEnter={() => setCursor(`url(${cursor2}), auto`)}
            onMouseLeave={() => setCursor(`url(${cursor1}), auto`)}
            className='bg-first hover:bg-second transition-all duration-300 hover:text-first p-3 rounded-full'
          >
            <Mail size={18} strokeWidth={1.5} />
          </p>
        </div>

        {/* 
          CENTER SECTION:
          This is where we place the Person component.
          The 'flex-grow' and layout classes will center it perfectly.
        */}
        <div className='flex-grow flex items-center justify-center'>
          <Person />
        </div>

        {/* Footer section */}
        <div className='flex flex-row items-center justify-between text-first w-full px-5 text-xs ibm z-10'>
          <p>&copy; 2025, SAM PATEL</p>
          <div className='flex items-center gap-4'>
            <p>LICENSES</p>
            <p>POWERED BY WEBFLOW</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Background;