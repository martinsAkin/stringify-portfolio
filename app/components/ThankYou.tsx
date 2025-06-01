"use client"
import Image from "next/image"
import menuIcon from "../images/LAJ_logo.png"
import { FaLinkedin, FaDribbble, FaXTwitter} from 'react-icons/fa6';

const ThankYou = () => {
  return (
    <div className="p-[3.5rem] flex flex-col text-white">
        <div className="flex flex-col gap-[1rem] md:gap-0 md:flex-row justify-between items-center">
           <div className="font-poppins ">
              C 2025. All rights reserved <br />
              <span className="font-brunoAce">Designed by LAWAL JIMOH</span> <br />
              <span className="font-brunoAce">DEVELOPED BY</span>
           </div>
           <div className="md:bg-white md:w-[25rem] md:h-[0.25rem] md:rounded-lg"></div>
           <Image src={menuIcon} alt="image"/>
           <div className="md:bg-white md:w-[25rem] md:h-[0.25rem] md:rounded-lg"></div>
           <div className="flex gap-[0.5rem]">
              <div className="rounded-[50%] p-[0.5rem] bg-gray-800 w-8 text-center">
                <a href="https://x.com/lajimohofficial" target="_blank" rel="noopener noreferrer">
                   <FaXTwitter style={{ color: 'white', fontSize:  '20px' }} />
                 </a>

              </div>

              <div className="rounded-[50%] p-[0.5rem] bg-gray-800 w-8 text-center">
                    <a href="https://www.linkedin.com/in/lawal-jimoh/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: 'white', fontSize: '20px' }} />
                  </a>
              </div>
              <div className="rounded-[50%] p-[0.5rem] bg-gray-800 w-8 text-center">
                 <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                 <FaDribbble style={{ color: 'white', fontSize: '20px' }} />
               </a>

              </div>
              
           </div>

           
        </div>
        
        <div className="text-center pt-[2rem] md:pt-[5rem]"><span className="text-5xl md:text-8xl font-figtree">
        THANK 
        <span> YOU ❤</span>
         </span></div>

    </div>
  )
}

export default ThankYou