import menuIcon from "../images/LAJ_logo.png"
import nextIcon from "../images/arrow-right.png"
import Image from "next/image"
import { useState, useEffect } from "react"
import ToggleMode from "./ToggleButton"
import Link from "next/link"

interface NextProjectBtnProps{
  url: string
}

export const MenubarIcon = () => {

 return(
   <div className="bg-transparent w-[4rem] mt-8">
       <Image src={menuIcon} className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]" alt="menuIcon"/>
       
   </div>
 )
}

const NextProjectBtn = ({url}:NextProjectBtnProps) => {
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
     const handleResize = () => {
       setScreenSize(window.innerWidth > 720)
     }
     handleResize();
     window.addEventListener('resize', handleResize)
  
     return(
       window.removeEventListener('resize', handleResize)
     )
   }, [])
  return(
    <div>
        {screenSize? (
            <Link href={url}>
              <button className="bg-black border border-amber-300 pt-4 pr-6 pb-4 pl-6 rounded-2xl cursor-pointer">
                Next Project
                <Image className="inline ml-[0.5rem]" src={nextIcon} height={30} width={30} alt="forward icon"/>
                
              </button>
            </Link>
          ) : ( 
          <button className="bg-black border border-amber-300 p-4 rounded-2xl">
            <Link href={url}>
              <Image src={nextIcon} height={30} width={30} alt="forward icon"/>
            </Link>
          </button>
        )}        
    </div>
  )
}

type NavBArEntitiesProps = {
  currentSection: 'caseStudy' | 'design';
 setCurrentSection: (section: 'caseStudy' | 'design') => void;
 url: string
}

const NavBArEntities = ({currentSection, setCurrentSection, url}: NavBArEntitiesProps) => {
 return(
  <div>
      <MenubarIcon />
    <div className="flex gap-[2.5rem] mt-[-4rem] ml-[5rem] p-[2rem] md:ml-[7rem] md:gap-[5.5rem] lg:ml-[25rem] lg:justify-between lg:mt-[-5rem]">    
            <ToggleMode currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <NextProjectBtn url={url} />
      </div>
  </div>
 )
}


export default NavBArEntities
