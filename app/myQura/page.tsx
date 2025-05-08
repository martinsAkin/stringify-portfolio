"use client"
import MyQuraDesign from '../components/MyQuraDesign'
import MyQuraCaseStudy from '../components/MyQuraCaseStudy'
import { useState } from 'react'
import NavBArEntities from '../components/MenubarIcon'

const MyQuraHomepage = () => {
 const [currentSection, setCurrentSection] = useState <'caseStudy' | 'design'>('caseStudy')

  return (
    <div className='bg-black'>
      <NavBArEntities currentSection={currentSection} setCurrentSection={setCurrentSection} url='/rock-realty'/>

       {/* <MyQuraDesign />
       <MyQuraCaseStudy /> */}

      {currentSection === 'caseStudy' && <MyQuraCaseStudy/> }
      {currentSection === 'design' && <MyQuraDesign /> }
    </div>
  )
}

export default MyQuraHomepage