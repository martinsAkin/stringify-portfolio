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
import { MenuIcon } from "./Sidebar";
import Sidebar from "./Sidebar";

const About = () => {
  return (
    <div className="text-white">
              <div className="flex justify-between gap-15rem">
                <Sidebar />
                <MenuIcon />
          </div>
    
          <div className="md:pl-[2rem] pr-[0.5rem] font-poppins ml-[1rem] md:ml-0 lg:ml-0">
           
                  <section className="relative">
                      <Image src={maskedImage} alt="Hero section" />
                      <div className="w-[18rem] absolute top-[10rem] left-[7.5%] right-[35%] font-figtree md:left-[20%] md:top-[25rem] lg:left-[25%] lg:top-[30rem] lg:w-[30rem]">
                        <h1 className="text-5xl md:text-[5rem] lg:text-[10rem]">ABOUT</h1>
                        <span className="lg:text-[1.5rem] text-[#A4AA4]">FROM HOPING ON DIFFERENT SKILLS SET TO LOVING</span>
                        <h1 className="text-3xl lg:text-5xl">PRODUCT DESIGN</h1>
                      </div>
                  </section>


                  <section className="mt-[3rem] ml-4 items-center grid grid-cols-1 pr-8 mr-8 md:ml-[5rem] lg:grid-cols-3 gap-6 lg:mt-[-4rem] min-h-screen md:items-center">
                    <AboutMeFirstCard />
                    <div className="col-span-1 flex items-center justify-center md:ml-[-1rem] lg:ml-0">
                      <Image src={Lawal} alt="Lawal" className="w-[22.5rem] h-[22rem] md:w-[38rem] md:h-[35rem] lg:w-[30rem] lg:h-[30rem]"/>
                    </div>
                    <Experience />
                    <AboutMe />
                    <Slider />
                    <div className="flex flex-col gap-4 row-span-2">
                      <Education />
                      <ToolStackPage />
                    </div>
                  </section>


    
                  <section className="text-center mt-[5rem] md:ml-0 lg:ml-0">
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