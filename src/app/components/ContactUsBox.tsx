import Image from 'next/image'
import React from 'react'
import email from '../../Asset/email.png'
import twitter from '../../Asset/twitter shape.png'
import insta from '../../Asset/insta.png'
import union from '../../Asset/Union.png'

export const ContactUsBox = () => {
  return (
    <div className='bg-black w-full flex justify-center p-5 relative '>
        <div className='border-2 rounded-2xl border-customGolden flex px-24 py-12 justify-between w-1/2 mt-auto items-center scroll-animation'>
            <div className=''>
                <p className='text-white text-xl font-bold'>Join our <span className='block text-customYellow'>Community</span></p>
            </div>
            <div className='flex  p-3  justify-between w-1/3 '>
                <div className='bg-gradient-to-r from-customLightYellow to-customYellow mx-2 flex justify-center items-center p-3 bg-gray-300 rounded-full overflow-hidden'>
                <Image src={email} alt='' />
                </div>
                <div className='bg-gradient-to-r from-customLightYellow to-customYellow mx-2 flex justify-center items-center p-3 bg-gray-300 rounded-full overflow-hidden'>
                <Image src={twitter} alt='' />
                </div>
                <div className='bg-gradient-to-r from-customLightYellow to-customYellow mx-2 flex justify-center items-center p-3 bg-gray-300 rounded-full overflow-hidden'>
                <Image src={insta} alt='' />
                </div>
            </div>
            
        </div>
       
    </div>
  )
}
