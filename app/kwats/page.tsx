"use client"
import KwatsPage from '../components/kwats'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'
import ThankYou from '../components/ThankYou'

const KwatsHomePage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div className='bg-black'>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection} url='/tantalizer'/>

      {currentSection === 'caseStudy' && <KwatsPage/> }
      {currentSection === 'design' && <KwatsPage /> }
      
      <ThankYou />

    </div>
  )
}

export default KwatsHomePage