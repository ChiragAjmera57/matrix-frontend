import Image, { StaticImageData } from 'next/image'
import React from 'react'
import bitLog from '../../Asset/BitLogo.png'
interface ProductCartProps {
    vectorLine: StaticImageData; 
  }
export const ProductCard: React.FC<ProductCartProps> = ({ vectorLine }) => {
  return (
    <div className='border-4
    border-customGolden rounded-xl p-5 mx-3 mt-2 max-w-fit bg-black text-white'>
       <div className='flex justify-center productLogo'>
           <Image src={vectorLine} alt='logo' />

       </div>
       <p className='mb-2 text-center font-Inter'>Bita Marketplace</p>
       <hr className="border-1 border-customYellow my-4" />
        <p className='w-64 font-extralight text-center'>Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
      
      
   </div>
  )
}
