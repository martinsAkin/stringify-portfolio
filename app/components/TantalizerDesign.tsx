"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import mockupImage from "../images/MOCKUP_5.jpg"
import tantalizerLogo from "../images/tantalizerLogo.png"
import tantalizer2 from '../images/TantalizerHomePage2.png'
import tantalizer3 from "../images/TantalizerHomePage3.png"
import slantedLogo from "../images/slantedLogo.png"
import breakfastImage from "../images/breakfast.png"
import LearnMore from './LearnMore'
import footerImage from "../images/rock-reality/kwatsFooter.png"
import Footer from './Footer'

interface ThumbnailBgProps{
 imageUrl: string | StaticImageData
}
interface ThumbnailBg3Props{
  imageUrl: string | StaticImageData
  logoUrl: string | StaticImageData
}
interface ThumbnailBgProps{
 imageUrl: string | StaticImageData
}
interface FooterProps{
 projectName: string
 projectImage: string | StaticImageData
}

const HeadImage = () => {
 return(
  <div className="pr-8 pl-8">
    <Image className="rounded-2xl md:w-[55rem] lg:w-[60rem]" src={mockupImage} width={400} height={350} alt="mockup image"/>
  </div>
 )
}

const ThumbnailBg = ({imageUrl}: ThumbnailBgProps) => {
  return(
    <div className="p-4 rounded-2xl bg-[#1B1B1B] md:w-[40rem] lg:ml-[8rem] lg:mr-[8rem] lg:p-[2.5rem] lg:w-[60rem]">
        <h1 className='text-[2rem] font-bold inline-block mb-[1rem]'>MENU</h1>
        <Image src={imageUrl} alt="tantalizer" className="md:w-[40rem] lg:w-dvw" width={350} height={350}/>
    </div>
  )
}

const ThumbnailBg2 = ({imageUrl}: ThumbnailBgProps) => {
  return(
    <div className="p-4 rounded-2xl bg-[#1B1B1B] flex flex-col gap-8 md:w-[40rem]lg:w-[30rem] ">
        <Image src={imageUrl} alt="tantalizer" className="md:w-[38rem] lg:w-[25rem]" width={350} height={350}/>
    </div>
  )
}

const ThumbnailBg3 = ({imageUrl, logoUrl}: ThumbnailBg3Props) => {
  return(
    <div className="p-4 rounded-2xl bg-[#1B1B1B] flex flex-col gap-8 md:w-[40rem">
        <Image src={logoUrl} alt="slantedLogo" className="md:w-[20rem] lg:w-[10rem]" width={150} height={150}/>
        <Image src={imageUrl} alt="tantalizer" className="md:w-[38rem] lg:w-[25rem]" width={350} height={350}/>
    </div>
  )
}


const TantalizerDesign = () => {
  return (
    <div className="font-poppins">
       {/* <NavBArEntities /> */}

       <Image src={tantalizerLogo} className="mx-auto md:w-36 lg:w-[10rem] mt-[2.5rem]" width={120} height={120} alt="tantalizerLogo"/>
        <span className={`text-amber-100 flex justify-center pt-4 text-2xl md:text-2xl font-brunoAce`}>TANTALIZER - 2023</span>
        <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-[2.5rem] lg:mb-8">
          <p className='font-figtree'>
            <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Resturant Website</span> <br />
            <span className="italic text-2xl md:text-3xl lg:text-4xl">Redesign</span>
          </p>
          <HeadImage />
        </section>

        <section className='mb-[4rem]'>
          <h1 className='font-bold text-[2rem] ml-[5rem] md:ml-[18rem] inline-block mb-[1.5rem] font-figtree'>HOME PAGE</h1>

          <div className='flex ml-6 mr-6 gap-[1.5rem] md:ml-0 md:mr-0 flex-col md:flex-row md:gap-[3rem] justify-center'>
           <ThumbnailBg2 imageUrl={tantalizer2}/>
           <ThumbnailBg3 logoUrl={slantedLogo} imageUrl={tantalizer3}/>
          </div>

        </section>

        <div className="flex justify-center ml-6 mr-6 md:ml-0 md:mr-0">
         <ThumbnailBg imageUrl={breakfastImage}/>
        </div>

        <div className="flex justify-center mt-[5rem] mb-[5rem] ml-6 mr-6 md:ml-0 md:mr-0">
         <LearnMore />
        </div>

        <Footer projectImage={footerImage} projectName="Care Service App for Professionals and Patients" projectLink="/myQura"/>


    </div>
  )
}

export default TantalizerDesign