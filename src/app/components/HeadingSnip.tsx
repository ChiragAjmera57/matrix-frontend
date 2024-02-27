import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HeadingSnipProps {
  vectorLine: StaticImageData; 
  title: string; 
}

export const HeadingSnip: React.FC<HeadingSnipProps> = ({ vectorLine,title }) => {
  return (
    <div className='heading text-center'>
      <p className='text-5xl font-Kanit font-extrabold'>Our <span className='text-customYellow relative'>{title}</span></p>
      <Image className='absolute mr-auto ml-auto right-0 left-32' src={vectorLine} alt="Picture of the author" />
      <p className='font-Inter mt-6 text-xl font-medium text-center text-white text-animation'>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
    </div>
  );
};
