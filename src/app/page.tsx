/* eslint-disable @next/next/no-page-custom-font */
import Image from "next/image";
import { Roadmap } from "./components/Roadmap";
import { Ourtoken } from "./components/Ourtoken";
import { OurProduct } from "./components/OurProduct";
import { ContactUsBox } from "./components/ContactUsBox";
import union from "../Asset/Union.png";
import { BottomIcon } from "./components/BottomIcon";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className=" bg-gradient-to-r from-YellowLightShade to-customLightDark">
        <OurProduct />
        <div className="relative">
          <Ourtoken />
          <div className="relative top-20 z-20 continuously-animation">
            <Image src={union} alt="" />
          </div>
          <ContactUsBox />
        </div>
        <BottomIcon />
      </div>
    </main>
  );
}
