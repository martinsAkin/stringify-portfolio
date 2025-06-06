import { MenuIcon } from "./Sidebar"
import maskedImage from "../images/Masked Photo.png"
import menuIcon from "../images/LAJ_logo.png"
import greyImage1 from '../images/recentCards (3).png'
import greyImage2 from '../images/recentCards (5).png'
import greyImage3 from '../images/recentCards (2).png'
import coloredImage1 from '../images/recentCards (4).png'
import coloredImage2 from '../images/recentCards (6).png'
import coloredImage3 from '../images/recentCards (1).png'
import mobileLogo from '../images/mobile.png'
import devicesLogo from '../images/devices.png'
import layerLogo from '../images/layer.png'
import editLogo from '../images/pen-tool.png'
import UXLogo from '../images/mouse-square.png'
import squareLogo from '../images/3square.png'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import WorkTogether from "./LetsWorkTogetherCard"
import ThankYou from "./ThankYou"
import Link from "next/link"
import AnimatedDivider from "./AnimatedDivider"
import Sidebar from "./Sidebar"

interface NitcheBoxProps{
  children: ReactNode;
  iconUrl: string | StaticImageData;
  heading: string;
}


const NitcheBox = ({children, iconUrl, heading}:NitcheBoxProps) => {
  return(
    <>
      <div className="border-gray-300 border bg-[#0f0f0f] rounded-3xl lg:w-[24rem] p-5 text-left">
        <Image src={iconUrl} alt="icon space" width={70} height={70}/>
        <h3 className='text-lg font-bold mt-1'>{heading}</h3>
        <span className="text-[#A4A4A4] text-[16px] font-semibold">{children}</span>
      </div>
    </>
  )
}

export function ProficientAreas() {
 return(
  <div className="text-white mt-[7rem]">
    <div className="text-5xl md:text-5xl lg:text-7xl text-center">
      <span className="italic font-bold text-white">PROFICIENT</span> <span className="font-bold text-white">AREAS</span>
    </div>

    <div className="flex gap-6 mt-4 md:flex md:gap-8 md:ml-[-5rem] md:w-[60rem] items-center pr-[1rem] md:text-2xl lg:text-3xl lg:w-[80rem] justify-center">
      <div className='text-white font-brunoAce'>SKILL NICHE</div>
      <div className="w-[5rem] h-0.5 flex justify-center mt-0 bg-white"></div>
      <div className='text-white font-brunoAce ml-0'>SPECIALTIES</div>
    </div>
 
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-[1rem] lg:grid-cols-3 pt-10 p-9 ml-[1rem]">
      <NitcheBox iconUrl={mobileLogo} heading={"Mobile App Design"}>Crafting mobile applications that are user-friendly, visually appealing, and optimized for performance</NitcheBox>
      <NitcheBox iconUrl={devicesLogo} heading={"Web App Design"}>Building web applications that seamlessly blend form and function for a superior online experience</NitcheBox>
      <NitcheBox iconUrl={layerLogo} heading={"Product Strategy"}>Charting the course for success with well-informed strategies that align product goals with market demands</NitcheBox>
      <NitcheBox iconUrl={editLogo} heading={"User Interface(UI)"}>Creating standard stand out user appealing interface that distinguish your products from competitors and catches the attention of users</NitcheBox>
      <NitcheBox iconUrl={UXLogo} heading={"User Experience(UX)"}>Elevating user satisfaction through user-centric design, ensuring every interaction is meaningful and delightful</NitcheBox>
      <NitcheBox iconUrl={squareLogo} heading={"Design Systems"}>Creating cohesive design ecosystems that ensure consistency and brand integrity across all touchpoints</NitcheBox>
    </section>

  </div>
 )
}

const RecentProjectSection = () => {
 return(
  <div className="mt-[5rem]">
     <div className="text-4xl text-center text-white mt-8 md:text-4xl lg:text-5xl">
        <span className="font-bold text-white">RECENT</span> <span   className="italic text-white">PROJECTS</span> 
      </div>

    <section className="flex flex-row mb-8 justify-center gap-2.5 ml-6 items-center md:flex-row md:text-2xl lg:text-3xl md:mb-8 md:ml-0 lg:ml-0">
       <div>CASE STUDIES</div>
       <div className="md:w-[5rem] lg:w-[15rem] md:h-0.5 md:flex md:justify-center md:mt-3 md:bg-white w-6"></div>
       <div>LIVE PROJECTS</div>
       <div className="md:w-[5rem] lg:w-[15rem] md:h-0.5 md:flex md:justify-center md:mt-3 md:bg-white w-6"></div>
       <div>DESIGN PROCESS</div>
    </section>

    <section className="grid grid-cols-1 ml-[2rem] gap-[8rem] justify-center items-center md:flex md:flex-row md:gap-[2.5rem] lg:grid lg:grid-cols-3 lg:gap-0 lg:ml-[7.5rem]">
      <div className="relative w-[18rem] h-[18rem]">
        <Link href="/myQura">
          <Image src={greyImage1} className="lg:absolute lg:inset-0 lg:w-max lg:h-[21rem] lg:object-cover lg:transition-opacity lg:duration-300 lg:hover:opacity-0" alt="image"/>
          <Image src={coloredImage1} className="sm:opacity-100 absolute inset-0 w-max h-[24rem] md:h-[22rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
        </Link>
      </div>
      <div className="relative w-[18rem] h-[18rem]">
        <Link href="/tantalizer">
          <Image src={greyImage2} className="lg:absolute lg:inset-0 lg:w-max lg:h-[21rem] lg:object-cover lg:transition-opacity lg:duration-300 lg:hover:opacity-0" alt="image"/>
          <Image src={coloredImage2} className="sm:opacity-100  absolute inset-0 w-max h-[24rem] md:h-[22rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
        </Link>
      </div>
      <div className="relative w-[18rem] h-[18rem]">
        <Link href="/rock-realty">
          <Image src={greyImage3} className="lg:absolute lg:inset-0 lg:w-max lg:h-[21rem] lg:object-cover lg:transition-opacity lg:duration-300 lg:hover:opacity-0" alt="image"/>
          <Image src={coloredImage3} className="sm:opacity-100 absolute inset-0 w-max h-[24rem] md:h-[22rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
        </Link>
      </div>

    </section>
  </div>
 )
}


const Homepage = () => {
  return (
    <div style={{backgroundImage: "url('/background/shiny-background.png')", overflow: "hidden"}}>
          <div className="flex justify-between gap-15rem">
                <Sidebar />
                <MenuIcon />
          </div>

      <div className="pr-[0.5rem] font-poppins text-white ml-[1.5rem]">
              <section className="relative">
                  <Image src={maskedImage} alt="Hero section" />
                  <div className="w-[15rem] absolute top-[10rem] left-6 right-[35%] font-figtree md:w-[25rem] md:left-[20%] md:top-[20rem] lg:left-[25%] lg:top-[30rem] lg:w-[40rem]">
                    <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[9rem]">H O L A</h1>
                    <div className="flex text-[9px] justify-between font-brunoAce md:text-[1rem] lg:text-2xl">
                      <div>PRODUCT DESIGNER</div>
                      <div>LAWAL JIMOH</div>
                    </div>
                    <div className="flex items-center gap-2">
                    <h1 className="text-[3.5rem] md:text-[6rem] lg:text-[9rem]">I A M </h1><Image src={menuIcon} className="h-[4.5rem] w-[4.5rem]" alt="image" />
                    </div>
                  </div>
              </section>
                  <div className="flex justify-center mt-[6rem] md:mt-[1.5rem] lg:mt-[-6.5rem]">
                    <AnimatedDivider />
                  </div>

              <article className="mt-[2rem] md:mt-[4rem] text-white md:ml-[3.5rem]">
                  <span className="text-3xl inline-block w-[15rem] md:text-3xl lg:text-5xl md:w-[35rem]">
                    GREAT DESIGN IS HARD, I MAKE IT EASY
                  </span>
                  <span className="text-[20px] inline-block w-[90%] text-right mt-6 md:text-2xl md:w-[70%] md:ml-[13rem] lg:ml-[25rem] lg:text-4xl">
                    for me design is more than aesthetics, it&#39;s about creating solutions that seamlessly integrate into people&#39;s lives and make a positive impact.
                  </span>
              </article>
          
              <div className="flex flex-col gap-[6rem] md:ml-6">
                <RecentProjectSection />
                <section className="flex gap-[2.5rem] items-center justify-center mt-8">
                  <div className="md:w-2xs md:h-0.5 md:flex md:justify-center md:mt-3 md:bg-gray-600"></div>
                  <Link href="/all-projects">
                    <button className="rounded-[1.5rem] p-4 border border-amber-500">All Projects</button>
                  </Link>
                  <div className="md:w-2xs md:h-0.5 md:flex md:justify-center md:mt-3 md:bg-gray-700"></div>
                </section>
              </div>

              <div>
                <ProficientAreas />
              </div>

              <section className="text-center mt-8 ml-[-1rem] md:ml-4" id="down">
                  <h1 className="text-3xl md:text-7xl">
                    <span className="font-figtree">GET </span>
                    <span className="font-figtree font-bold"> CONNECTED</span>
                  </h1>
                  <section className="font-brunoAce flex justify-around text-[10px] md:text-2xl lg:text-[20px] mb-[2rem]">
                    <h1>OPEN TO NEW OPPORTUNITIES</h1>
                    <h1>HIRE ME</h1>
                  </section>

                  <WorkTogether />
              </section>

              <ThankYou />

      </div>

    </div>
  )
}

export default Homepage