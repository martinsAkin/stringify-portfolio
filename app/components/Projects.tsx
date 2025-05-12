"use client"
import Image from "next/image"
import Link from "next/link"
import { MenubarIcon } from "./MenubarIcon"
import maskedImage from "../images/Masked Photo.png"
import greyImage1 from '../images/recentCards (3).png'
import greyImage2 from '../images/recentCards (5).png'
import greyImage3 from '../images/recentCards (2).png'
import greyImage4 from "../images/Project Card 4.png"
import coloredImage1 from '../images/recentCards (4).png'
import coloredImage2 from '../images/recentCards (6).png'
import coloredImage3 from '../images/recentCards (1).png'
import coloredImage4 from "../images/Project Card 9.png"
import WorkTogether from "./LetsWorkTogetherCard"
import ThankYou from "./ThankYou"


const ProjectPage = () => {
 return(
  <div className="text-white">
                <div className="w-[15rem] pt-[2.5rem] pl-[0.5rem]">
                <MenubarIcon />
                </div>
      
            <div className="pl-[3.5rem] pr-[0.5rem] font-poppins">
                    <section className="relative">
                        <Image src={maskedImage} alt="Hero section" />
                        <div className="w-[18rem] absolute top-[10rem] left-[10%] right-[35%] font-figtree md:left-[20%] md:top-[25rem] lg:left-[25%] lg:top-[30rem] lg:w-[30rem]">
                          <h1 className="text-5xl text-center md:text-[5rem] lg:text-[10rem]">PROJECTS</h1>
                          <span className="text-gray-300 md:text-2xl lg:text-4xl">CREATED DESIGNS THAT <span className="text-white">SEAMLESSLY INTEGRATES AND POSITIVELY IMPACTS</span>
                          </span>
                          
                        </div>
                    </section>

                     <div className="flex justify-center w-75% mb-[12rem] mt-[3.5rem]">
                      <section className="flex flex-col gap-[7.5rem] justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-x-[5rem]">
                           <div className="relative w-[300px] h-[300px]">
                             <Link href="/myQura">
                               <Image src={greyImage1} className="lg:absolute lg:inset-0 lg:w-max lg:h-[25rem] lg:object-cover lg:transition-opacity lg:duration-300 lg:hover:opacity-0" alt="image"/>
                               <Image src={coloredImage1} className="sm:opacity-100 absolute inset-0 w-max h-[25rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
                             </Link>
                           </div>
                           <div className="relative w-[300px] h-[300px]">
                             <Link href="/tantalizer">
                               <Image src={greyImage2} className="lg:absolute lg:inset-0 lg:w-max lg:h-[25rem] lg:object-cover lg:transition-opacity lg:duration-300 hover:opacity-0" alt="image"/>
                               <Image src={coloredImage2} className="sm:opacity-100 absolute inset-0 w-[25rem] h-[25rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
                             </Link>
                           </div>
                           <div className="relative w-[300px] h-[300px]">
                             <Link href="/rock-realty">
                               <Image src={greyImage3} className="lg:absolute lg:inset-0 lg:w-max lg:h-[25rem] lg:object-cover lg:transition-opacity lg:duration-300 hover:opacity-0" alt="image"/>
                               <Image src={coloredImage3} className="sm:opacity-100 absolute inset-0 w-[25rem] h-[25rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
                             </Link>
                           </div>
                           <div className="relative w-[300px] h-[300px] mt-[2.5rem]">
                             <Link href="/kwats">
                               <Image src={greyImage4} className="lg:absolute lg:inset-0 lg:w-max lg:h-[25rem] lg:object-cover lg:transition-opacity lg:duration-300 lg:hover:opacity-0" alt="image"/>
                               <Image src={coloredImage4} className="sm:opacity-100 absolute inset-0 w-[25rem] h-[25rem] object-cover lg:opacity-0 transition-opacity duration-300 hover:opacity-100" alt="image"/>
                             </Link>
                           </div>
                         </section>
                     </div>

                     <section className="text-center mt-8">
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
export default ProjectPage