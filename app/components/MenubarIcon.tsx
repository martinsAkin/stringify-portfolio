import menuIcon from "../images/LAJ_logo.png"
import userIcon from "../images/user.png"
import homeIcon from "../images/home.png"
import monitorIcon from "../images/monitor.png"
import copyIcon from "../images/copy.png"
import nextIcon from "../images/arrow-right.png"
import Image from "next/image"
import { useState, useEffect } from "react"
import ToggleMode from "./ToggleButton"
import Link from "next/link"

interface NextProjectBtnProps{
  url: string
}

export const MenubarIcon = () => {
 const [menuToggle, setMenuToggle] = useState(false)

 const toggleMenu = () => {
   setMenuToggle(!menuToggle)
 }

 return(
   <div>
       <Image src={menuIcon} width={50} height={50} onClick={toggleMenu} alt="menuIcon"/>
       
       <div className={`${menuToggle ? "block" : "hidden"} flex p-[1rem] pt-[1rem] md:pt-[1rem] md:p-[2rem] justify-around flex-col items-center absolute top-[10rem] left-[-0.5rem] h-dvh bg-black`}>
           <div className="flex flex-col gap-[1rem] md:gap-[2rem] items-center">
             <Link href="/homepage">
               <Image src={homeIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon"  />
             </Link>
             <Link href="/about-me">
               <Image src={userIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon" />
             </Link>
             <Link href="/projects">
               <Image src={monitorIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon" />
             </Link>
           </div>

           <div>
             <Image src={copyIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon" />
           </div>
        </div>

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
            <button className="bg-black border border-amber-300 pt-4 pr-6 pb-4 pl-6 rounded-2xl">
              <Link href={url}>Next Project</Link>
              <Image className="inline ml-[0.5rem]" src={nextIcon} height={30} width={30} alt="forward icon"/>
            </button>
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
  <div className="flex justify-between p-[2rem] items-center md:justify-between">
          <MenubarIcon />
          <ToggleMode currentSection={currentSection} setCurrentSection={setCurrentSection} />
          <NextProjectBtn url={url} />
    </div>
 )
}


export default NavBArEntities