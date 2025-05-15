"use client"
import { useState, useEffect } from "react";
import React from 'react'

type ToggleModeProps = {
 currentSection: 'caseStudy' | 'design';
 setCurrentSection: (section: 'caseStudy' | 'design') => void;
}

const ToggleMode = ({currentSection, setCurrentSection}: ToggleModeProps) => {
 const [largeScreen, setLargeScreen] = useState(null)

 useEffect(() => {
   const handleResize = () => {
     setLargeScreen(window.innerWidth > 720)
   }
   handleResize();
   window.addEventListener('resize', handleResize)

   return(
     window.removeEventListener('resize', handleResize)
   )
 }, [])
 return(
   <div>
       {largeScreen? (
         <div className="rounded-[2.5rem] ml-[10rem] flex bg-gray-800 gap-4 p-[0.9rem]font-figtree">
           <button onClick={()=> setCurrentSection('caseStudy')}  className={currentSection === 'caseStudy'? "p-4 pl-8 pr-8 bg-slate-600 rounded-[2.5rem] w-[50%] cursor-pointer" : ''}>Full</button>

           <button onClick={()=> setCurrentSection('design')}  className={currentSection === 'design'? "p-4 pr-8 pl-8 bg-slate-600 rounded-[2.5rem] cursor-pointer" : ''}>Design</button>

         </div>
       ) : (
         <div className="rounded-[2.5rem] flex bg-gray-800 gap-4 p-[0.5rem] font-figtree">
             <button onClick={()=> setCurrentSection('caseStudy')}  className={currentSection === 'caseStudy'? "p-2 pr-4 pl-4 bg-slate-600 rounded-[2.5rem] w-[45%]" : ''}>Full</button>

             <button onClick={()=> setCurrentSection('design')}  className={currentSection === 'design'? "p-2 pr-4 pl-4 bg-slate-600 rounded-[2.5rem]" : ''}>Design</button>
         </div>
       )
       }
   </div>
 )
}

export default ToggleMode