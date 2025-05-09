import Image from "next/image"
import { HeadImage, ThumbnailBg2 } from "./TantalizerCaseStudy"
import logo from "../images/rock-reality/rock-logo.png"
import headImage from "../images/rock-reality/Rock Realty Main.png"
import tabScreen from "../images/rock-reality/Frame 131.png"
import frame114 from "../images/rock-reality/Frame 114 (1).png"
import frame115 from "../images/rock-reality/Frame 115 (1).png"
import ProjectPage from "../images/rock-reality/PROJECTS PAGE.png"
import investmentPage from "../images/rock-reality/INVESTMENT PAGE.png"
import imageFooter from "../images/rock-reality/Scene 12 1 (1).png"
import LearnMore from "./LearnMore"
import Footer from "./Footer"


const RockRealtyDesign = () => {
  return (
    <div className="p-8 bg-black text-white text-[20px] overflow-hidden">

           <Image src={logo} className="mx-auto md:w-36 lg:w-[10rem]" width={120} height={120} alt="tantalizerLogo"/>
             <span className={`text-amber-100 flex justify-center pt-4 text-[1rem] md:text-2xl font-brunoAce text-center`}>ROCK REALTY LIMITED - 2024</span>
                  <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-4 lg:mb-8">
                       <p>
                         <span className="font-bold text-3xl md:text-4xl lg:text-5xl font-figtree">Real Estate Website</span> <br />
                         <span className="italic text-2xl md:text-3xl lg:text-4xl font-figtree">Redesign</span>
                       </p>
             
                       <HeadImage imageUrl={headImage} />
                   </section>

                   <div className="mt-8 mb-8">
                     <h1 className="ml-[2rem] font-bold text-2xl mb-2 font-figtree">HOMEPAGE</h1>
                     <Image src={tabScreen} alt="image" />
                   </div>

                   <div className="flex gap-[2.5rem] mt-[2rem] justify-center">
                       <ThumbnailBg2 imageUrl={frame114} />
                       <ThumbnailBg2 imageUrl={frame115} />
                    </div>

                    <div className="mt-8 mb-8">
                     <h1 className="ml-[2rem] font-bold text-2xl mb-2 font-figtree">PROJECT PAGE</h1>
                     <Image src={ProjectPage} alt="image" />
                   </div>
                   <div className="mt-8 mb-8">
                     <h1 className="ml-[2rem] font-bold text-2xl mb-2 font-figtree">INVESTMENT PAGE</h1>
                     <Image src={investmentPage} alt="image" />
                   </div>

                   <LearnMore />

                   <Footer projectName="Courier Servivce App for Delievry" projectImage={imageFooter} projectLink="/kwats"/>


    </div>
  )
}

export default RockRealtyDesign