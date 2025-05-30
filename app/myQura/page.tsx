"use client"
import MyQuraDesign from '../components/MyQuraDesign'
import MyQuraCaseStudy from '../components/MyQuraCaseStudy'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'
import ThankYou from '../components/ThankYou'

const MyQuraHomepage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div style={{backgroundImage: "url('/background/shiny-background.png')"}}>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection} url='/rock-realty'/>

       {/* <MyQuraDesign />
       <MyQuraCaseStudy /> */}

      {currentSection === 'caseStudy' && <MyQuraCaseStudy/> }
      {currentSection === 'design' && <MyQuraDesign /> }
    
          <ThankYou />

    </div>
  )
}

export default MyQuraHomepage