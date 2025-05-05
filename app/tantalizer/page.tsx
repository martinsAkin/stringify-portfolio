"use client"
import Tantalizer from '../components/TantalizerCaseStudy'
import TantalizerDesign from '../components/TantalizerDesign'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'
import ToggleMode from '../components/ToggleButton'

const TantalizerHomePage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div className='bg-black'>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection}/>

      {currentSection === 'caseStudy' && <Tantalizer/> }
      {currentSection === 'design' && <TantalizerDesign /> }
    </div>
  )
}

export default TantalizerHomePage