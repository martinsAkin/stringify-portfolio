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
   <div className="absolute top-[1rem] left-[0.5rem] bg-black">
       <Image src={menuIcon} width={50} height={50} onClick={toggleMenu} alt="menuIcon"/>
       
       <div className={`${menuToggle ? "block" : "hidden"} flex p-[1rem] pl-0 pt-[1rem] md:pt-[1rem] md:p-[2rem] md:pl-0 justify-around flex-col  h-dvh`}>
           <div className="flex flex-col gap-[1rem] md:gap-[2rem] items-center">
               <Link href="/homepage">
                   <Image src={homeIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon"  />
               </Link>
             <Link href="/about-me">
               <Image src={userIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon" />
             </Link>
             <Link href="/projects">
               <div>
                 <Image src={monitorIcon} className="w-[1.5rem] md:w-[3rem]" alt="home icon" />
               </div>
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
    <div className="flex gap-[3.5rem] ml-[3rem] p-[2rem] md:ml-[25rem] md:justify-between">
            <ToggleMode currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <NextProjectBtn url={url} />
      </div>
  </div>
 )
}


export default NavBArEntities
