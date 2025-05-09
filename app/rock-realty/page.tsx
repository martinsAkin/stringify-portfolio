"use client"
import RockRealtyCS from '../components/RockRealtyCS'
import RockRealtyDesign from '../components/RockRealtyDesign'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'
import ThankYou from '../components/ThankYou'

const MyQuraHomepage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div className='bg-black'>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection} url='/kwats'/>

      {currentSection === 'caseStudy' && <RockRealtyCS/> }
      {currentSection === 'design' && <RockRealtyDesign /> }
    
          <ThankYou />
    </div>
  )
}

export default MyQuraHomepage