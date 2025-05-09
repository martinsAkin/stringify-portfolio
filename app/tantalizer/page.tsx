"use client"
import Tantalizer from '../components/TantalizerCaseStudy'
import TantalizerDesign from '../components/TantalizerDesign'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'
import ThankYou from '../components/ThankYou'

const TantalizerHomePage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div className='bg-black'>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection} url='/myQura'/>

      {currentSection === 'caseStudy' && <Tantalizer/> }
      {currentSection === 'design' && <TantalizerDesign /> }
            
        <ThankYou />
    
    </div>
  )
}

export default TantalizerHomePage