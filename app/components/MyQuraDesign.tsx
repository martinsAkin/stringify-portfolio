"use client"
import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import mqLogo from "../images/mycareAssistant/MCA LOGO SVG.png"
import frame1 from "../images/mycareAssistant/myCare_(1).png"
import frame2 from "../images/mycareAssistant/myCare_(2).png"
import frame3 from "../images/mycareAssistant/myCare_(3).png"
import frame4 from "../images/mycareAssistant/myCare_(4).png"
import frame5 from "../images/mycareAssistant/myCare_(5).png"
import slider1 from "../images/mycareAssistant/sliderImage_(1).png"
import slider2 from "../images/mycareAssistant/sliderImage_(2).png"
import slider3 from "../images/mycareAssistant/sliderImage_(3).png"
import adminPortal from "../images/mycareAssistant/iMac 24 inch (1).png"
import LearnMore from "./LearnMore"
import Footer from "./Footer"

interface ImageFrameProps{
  imageSrc: string | StaticImageData
}

export const ImageFrame = ({imageSrc}:ImageFrameProps) => {
  return(
    <div className="w-[75%]">
        <Image src={imageSrc} alt="Image frame"/>
    </div>
  )
}

const ImageSlider = () => {
    const sliderArray = [slider1, slider2, slider3]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  useEffect(() => {
    const intervalTiming = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderArray.length)
    }, 2000)

    return () => clearInterval(intervalTiming)
  }, [sliderArray])
  return(
    <div className="overflow-hidden w-[20rem] md:w-dvw flex items-center m-[4rem] relative mr-[2.5rem] ml-[2.5rem] md:mr-[5rem] md:ml-[5rem]">
      
        <div className="flex items-center transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>

          {sliderArray.map((image, index)=> (
            <div key={index} className="min-w-full">
              <Image src={sliderArray[currentImageIndex]} className="w-[75%] md:h-[50rem] md:w-[50rem]" alt={`slide-${index}`}/>
            </div>
          ))}
        </div>
    </div>
  )
}

const MyQuraDesign = () => {
  return (
    <div className="bg-black pb-8 pt-12 text-white text-[20px] overflow-hidden lg:pr-[1rem]">
        <div>

          <section className="text-center">
            <Image src={mqLogo} className="w-[5rem] h-[5rem] mx-auto md:w-[15rem] md:h-[15rem]" alt="pageLogo"/>
            <span className='text-gray-400 text-[15px]'>MYCARE ASSISTANT (MYQURA) - 2024</span>
            <h1 className="mt-4">
              <strong className="block">Care Service App for</strong>
              <i> Care Professionals & Patients</i>
            </h1>
          </section>

            <div className="mt-6 flex gap-[2rem] items-center flex-col">
                <ImageFrame imageSrc={frame1} />
            </div>
            <section className="text-center mx-auto mt-8">
                <h1 className="font-bold mb-4">MYQURA CLIENT</h1>

                <div className="flex flex-col gap-6 items-center">
                  <ImageFrame imageSrc={frame2} />
                  <ImageFrame imageSrc={frame3} />
                </div>
            </section>

            <section className="text-center mx-auto mt-8">
                <h1 className="font-bold mb-4">MYQURA CARE <span className="block">PROFESSIONAL</span></h1>

                <div className="flex flex-col gap-6 items-center">
                  <ImageFrame imageSrc={frame4} />
                  <ImageFrame imageSrc={frame5} />
                </div>

            </section>

            <ImageSlider />

            <section className="mt-8 mb-6 text-center">
                <h1 className="font-bold text-3xl">ADMIN PORTAL</h1>

                <div className="flex justify-center items-center">
                  <Image src={adminPortal} alt="picture"/>
                </div>

            </section>

            <LearnMore />
            <Footer projectName="Resturant Website Redesign" projectImage={adminPortal} />

        </div>
    </div>
  )
}

export default MyQuraDesign