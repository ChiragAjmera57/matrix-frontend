import React from 'react'
import bitLogo from '../../Asset/BitLogo.png'
import Image from 'next/image'
import gtImage from '../../Asset/gtArrow.png'
export const TokenCard = () => {
  return (
    <div className='border-4 border-customGolden
    rounded-lg  p-10 mx-3 mt-5 max-w-fit bg-black text-white'>
       <div className='mb-7 flex justify-center'>
           <Image src={bitLogo} alt='logo' />

       </div>
       <p className='mb-2 font-bold'>Bitcoin</p>
       <table className='table-auto p-5'>
               <tbody>
                   <tr className='mb-2 '>
                       <td className='font-extralight'>Symbol</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr className='mb-2'>
                       <td className='font-extralight'>Decimal</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr  className='mb-2'>
                       <td className='font-extralight'>Market cap</td>
                       <td className='font-extralight'>Btc</td>
                   </tr>
                   <tr>
                       <td className='font-extralight'>Chain</td>
                       <td className='font-extralight'>Bitcoin</td>
                   </tr>
               </tbody>
       </table>
       <button className='bg-gradient-to-r from-customLightYellow to-customYellow mx-6 mt-2 rounded-full text-sm  p-1 text-center  bg-customGolden'>
           <div className='border-2 text-black  font-bold text-sm px-5 py-1 border-white rounded-full '>
               <p className='flex items-center justify-between'>Details <span className='mx-2'>
                <Image src={gtImage} alt='' />
                </span></p>
           </div>
       </button>
   </div>
  )
}
