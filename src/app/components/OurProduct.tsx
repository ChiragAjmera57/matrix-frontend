import React from 'react'
import { HeadingSnip } from './HeadingSnip'
import vectorLine from '../../Asset/VectorLineYellow.png'
import { ProductCard } from './ProductCard'
import cartLogo from '../../Asset/cartLogo.png'
import changeCoin from '../../Asset/changeCoin.png'
import chain from '../../Asset/chain.png'
import rocket from '../../Asset/rocket.png'
import coins from '../../Asset/coins.png'
import square from '../../Asset/squares.png'
import Image from 'next/image'
export const OurProduct = () => {
  return (
    <div className='relative scroll-animation'>
      <div className='w-2/3 m-auto  flex-wrap pt-8'>
        <HeadingSnip title='Products' vectorLine={vectorLine} />
        <div className='main flex flex-wrap mt-8 m-auto'>
       <ProductCard vectorLine={cartLogo}  />
       <ProductCard vectorLine={changeCoin}  />
       <ProductCard vectorLine={chain}  />
       <div className='mt-5 flex w-full m-auto justify-center'>
       <ProductCard vectorLine={rocket}  />
       <ProductCard vectorLine={coins}  />
       </div>
        </div>
       
        <div className='bottom'></div>
    </div>
    <div className='absolute bottom-3 continuously-animation'>
          <Image src={square} alt='' />
        </div>
    </div>
    
  )
}
