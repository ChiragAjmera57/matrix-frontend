import Image from 'next/image'
import React from 'react'
import group from '../../Asset/Group.png'
export const BottomIcon = () => {
  return (
    <div className='bg-black p-2 m-auto flex  justify-center flex-col items-center'>
        <div className='scroll-animation bg-gradient-to-r from-customLightYellow to-customYellow rounded-full p-3 w-fit '>
            <Image src={group}  alt=''/>
        </div>
        <p className='text-white'>2023 All rights reserved</p>
    </div>
  )
}
