import Image from "next/image";
import { MenubarIcon } from "./MenubarIcon"
import WorkTogether from "./LetsWorkTogetherCard"
import ThankYou from "./ThankYou"
import maskedImage from "../images/Masked Photo.png"
import Lawal from "../images/Frame 8.png"
import AboutMeFirstCard from "./AboutMeFirstCard";
import AboutMe from "./AboutMeCard";
import { Experience, Education, Slider } from "./AboutMe2"
import ToolStackPage from "./Toolstack";

const About = () => {
  return (
    <div className="text-white">
              <div className="w-[15rem] pt-[2.5rem] pl-[0.5rem]">
              <MenubarIcon />
              </div>
    
          <div className="pl-[3.5rem] pr-[0.5rem] font-poppins">
                  <section className="relative">
                      <Image src={maskedImage} alt="Hero section" />
                      <div className="w-[18rem] absolute top-[10rem] left-[10%] right-[35%] font-figtree md:left-[20%] md:top-[25rem] lg:left-[25%] lg:top-[30rem] lg:w-[30rem]">
                        <h1 className="text-5xl text-center md:text-[5rem] lg:text-[10rem]">ABOUT</h1>
                        <span className="lg:text-[1.5rem]">FROM HOPING ON DIFFERENT SKILLS SET TO LOVING</span>
                        <h1 className="text-3xl lg:text-5xl">PRODUCT DESIGN</h1>
                      </div>
                  </section>


                  <section className="mt-8 justify-center grid grid-cols-1 pr-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AboutMeFirstCard />
                    <Image src={Lawal} alt="Lawal" className="w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]"/>
                    <Experience />
                    <AboutMe />
                    <Slider />
                    <div className="flex flex-col gap-4">
                      <Education />
                      <ToolStackPage />
                    </div>
                  </section>


    
                  <section className="text-center mt-[10rem]">
                      <h1 className="text-3xl md:text-7xl">
                        <span className="font-figtree">GET </span>
                        <span className="font-figtree font-bold"> CONNECTED</span>
                      </h1>
                      <section className="font-brunoAce flex justify-around text-[10px] md:text-[20px] mb-[2rem]">
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

export default About