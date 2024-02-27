import Image from 'next/image'
import React from 'react'
import navLogo from '../../Asset/navLogo.png'
import houseImg from '../../Asset/house.png'

export const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="HeroSection">
     <div className="NavBar flex  flex-col lg:flex-row lg:justify-between lg:items-center py-4 lg:py-0">
  <div className="navLogo flex items-center">
    <div className="Logo mr-2">
      <Image alt="BITVERSE" src={navLogo} width="56" height="56" />
    </div>
    <div className="LogoName">
      <div className="LogoFirst">
        <span>BITVERSE</span>
      </div>
      <span>FINANCE</span>
    </div>
  </div>

  <div className="navbarText mt-4 lg:mt-0 lg:flex lg:items-center lg:justify-center">
    <ul className="flex flex-col lg:flex-row lg:space-x-4">
      <li className="navbarText-about lg:text-lg">About</li>
      <li className="navbarText-product lg:text-lg">Our Products</li>
      <li className="navbarText-token lg:text-lg">Token Utility</li>
      <li className="navbarText-roadmap lg:text-lg">Roadmap</li>
    </ul>

    <button className="mt-4 lg:mt-0 cntwlt lg:ml-6">Connect Wallet</button>
  </div>
</div>

      <div className="HeroHome">

        <div className="titleBox">
        <Image
                  src={houseImg}
                  width={320}
                  height={100}
                  alt="bitcoin-house"
                  className="house"
                />
          <div className="titleText">
            <span className="gateway">YOUR GATEWAY</span>
            
              <span className="to">TO</span>
              <span className="bottom-heading">

            <span className="defi on">DEFI ON
            
            </span>
            <span className="bitcoin"> BITCOIN</span>
              </span>
          </div>
        </div>
        
      </div>
    </div>
  </main>
  )
}
