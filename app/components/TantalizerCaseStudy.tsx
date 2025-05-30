"use client"
import Image, { StaticImageData } from "next/image"
import tantalizerLogo from "../images/tantalizerLogo.png"
import mockupImage from "../images/MOCKUP_5.jpg"
import standAloneLogo from "../images/midpageLogo.png"
import tantalizer1 from "../images/Tantalizer_HomePage_1.png"
import tantalizer2 from '../images/TantalizerHomePage2.png'
import tantalizer3 from "../images/TantalizerHomePage3.png"
import slantedLogo from "../images/slantedLogo.png"
import breakfastImage from "../images/breakfast.png"
import { ReactNode } from "react"
// import frame1 from "../images/mycareAssistant/myCare_(1).png"
import Footer from "./Footer"
import footerImage from "../images/rock-reality/kwatsFooter.png"


interface PainpointProps{
  children: ReactNode;
  sectionHeader: string;
}
interface ThumbnailBgProps{
  imageUrl: string | StaticImageData
}
interface ThumbnailBg3Props{
  imageUrl: string | StaticImageData
  logoUrl: string | StaticImageData
}
interface RetrospectProps{
  children: ReactNode
  number: string
  heading: string
}

interface HeadImageProps{
  imageUrl: string | StaticImageData
}

export const HeadImage = ({ imageUrl }: HeadImageProps) => {
 return(
  <div className="pr-8 pl-8">
    <Image className="rounded-2xl md:w-[55rem] lg:w-[60rem]" src={imageUrl} width={400} height={350} alt="mockup image"/>
  </div>
 )
}

export const MidPageLogo = ({ imageUrl }:HeadImageProps) => {
  return(
   <div>
     <Image className="w-[100%] mt-16 mb-16 md:w-dvw md:mr-[2rem] lg:w-dvw" src={imageUrl} width={100} height={100} alt="mockup image"/>
   </div>
  )
 }
 
export const PainpointBox = ({children, sectionHeader}: PainpointProps) => {
  return(
    <div className="rounded-2xl border p-4 mt-4 ">
      <button className="p-2 rounded-1xl border rounded-lg">{sectionHeader}</button>
      <span className="inline-block mt-2">{children}</span> 
    </div>
  )
}

const ThumbnailBg = ({imageUrl}: ThumbnailBgProps) => {
  return(
    <div className="p-4 rounded-2xl bg-[#1B1B1B] md:w-[40rem] lg:ml-[8rem] lg:mr-[8rem] lg:p-[2.5rem] lg:w-[60rem]">
        <Image src={imageUrl} alt="tantalizer" className="md:w-[40rem] lg:w-dvw" width={350} height={350}/>
    </div>
  )
}

export const ThumbnailBg2 = ({imageUrl}: ThumbnailBgProps) => {
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
export const RetrospectBoxes = ({number, heading, children}: RetrospectProps) => {
  return(
    <div className="rounded-2xl border p-4 bg-transparent">
      <h2 className="text-orange-400 font-bold font-figtree">{number}</h2>
      <span className="inline-block mt-3.5 mb-4 lg:font-bold font-figtree font-bold">{heading}</span>
      <span className="block text-[15px] md:text-2xl">{children}</span>

    </div>
  )
}


export default function Tantalizer(){
  return(
   <div className="pb-8 pt-12 text-white text-[20px] overflow-hidden lg:pr-[1rem] font-poppins" style={{backgroundImage: "url('/background/shiny-background.png')"}}>

      <div className="md:pl-[2rem]">
        
        <Image src={tantalizerLogo} className="mx-auto md:w-36 lg:w-[10rem]" width={120} height={120} alt="tantalizerLogo"/>
        <span className={`text-amber-100 flex justify-center pt-4 text-2xl md:text-2xl font-brunoAce`}>TANTALIZER - 2023</span>
        <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-4 lg:mb-8">
          <p className="font-figtree">
            <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Resturant Website</span> <br />
            <span className="italic text-2xl md:text-3xl lg:text-4xl">Redesign</span>
          </p>
          <HeadImage imageUrl={mockupImage}/>
        </section>
        <section className={`md:flex md:gap-10 md:text-[15px] md:mt-8 md:pl-[0rem] md:pr-[3rem] lg:pl-[10rem] lg:pr-[10rem] font-poppins`}>
          <section className="text-white mt-4 gap-[1.5rem] flex pl-[2rem] text-[15px] md:flex md:flex-col">
            <div className="flex flex-col gap-4 list-none mb-2 w-[10rem]">
              <div className="flex flex-col">
                <li className="font-bold">Client:</li>
                <li className="text-[15px] lg:text-[14px]">MyCare Assistant</li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold">My Role:</li>
                <li>Lead Designer</li>
              </div>
              <div className="flex flex-col">
                <li className="font-bold">Timeline:</li>
                <li>2 Months</li>
              </div>
            </div>
            <div className="flex flex-col gap-4 list-none mb-2 w-[12rem]">
              <div className="flex flex-col w-80 text-[15px] lg:text-[14px]">
                  <li className="font-bold text-[15px] lg:text-[14px]">Responsibilities:</li>
                  <li>User Research</li>
                  <li>User flows & Wireframe</li>
                  <li>Design Direction</li>
                  <li>Storyboarding</li>
                  <li>Visual Design</li>
                </div>
            </div>
          </section>
          <div className="text-white mt-10 pl-10 pr-10 pb-10 md:mt-2 lg:w-[50rem]">
              <h2 className="font-bold font-figtree text-white">Overview:</h2>
              <section>
                  <div className="pb-11">Tantalizers PLC stands as one of Nigeria&#39;s pioneering quick-service restaurant chains, established in May 1997. For over two decades, Tantalizers has been a household name, offering a diverse menu of fast food options, including both Nigerian delicacies and international dishes, to cater to the evolving tastes of Nigerians.</div>
                  <div>As the world of technology revolves, Tantalizers recognised the need to evolve, particularly in making it easier for customers to order their food. Which led to optimising outlets, revising product offerings, and most importantly adopting new digital strategies to appeal to Nigeria&#39;s increasingly tech-savvy consumer base.</div>
              </section>
          </div>
        </section>
        <section className="mt-8 bg-[#1B1B1B] pl-10 pt-8 pr-10 pb-10 lg:pl-[8rem] lg:pr-[10rem]">
          <div> 
            <h2 className={`text-4xl pb-6 font-bold font-figtree`}>THE PROBLEM</h2>
              <ol className={`list-disc ml-5 lg:pl-[2rem] font-poppins`}>
              <li>
                <span className="font-bold">Increased Competition:</span> Tantalizers faces stiff competition from international chains like KFC and Domino&#39;s, as  well as local competitors such as Chicken Republic.
                </li>
              <li>
                <span className="font-bold">Lack of Modernization:</span> Competitors have adapted to changing consumer preferences by offering lower-cost options and robust digital ordering systems, areas where Tantalizers has struggled to modernize.
                </li>
              <li>
                <span className="font-bold">Financial Challenges:</span> Tantalizers has recorded losses since 2020. </li>
              <li>
                  <span className="font-bold">Need for Digital Strategy:</span> Tantalizers needs to adopt new digital strategies to appeal to Nigeria&#39;s increasingly tech-savvy consumer base.
              </li>
              </ol>
        
          </div>
          <div className="mt-14">
            <h2 className={`text-4xl pb-6 font-bold font-figtree`}>THE SOLUTION</h2>
              <p className="font-poppins">In response to the challenges of increased competition, a need for modernisation, and the imperative to adopt a robust digital strategy, the core solution proposed is a comprehensive redesign of Tantalizers&#39; website. This redesign aims to transform the online customer experience, making it seamless and intuitive for users to explore the menu, place orders, and engage with the brand
              </p>
          </div>
        </section>
          <MidPageLogo imageUrl={standAloneLogo}/>
        <div className={`pl-8 pr-8 lg:pl-[8rem] lg:pr-[10rem]`}>
            <h1 className={`text-5xl leading-12 font-bold font-figtree`}>THE WEBSITE UX AUDIT AND RESEARCH PROCESS</h1>
            <div className="mt-10 text-[20px]">
              To get started with the website redesign project, I had a meeting with the stakeholders about the changes they were looking forward to in the new website. This was necessary to understand and align on the desired goals.
        
              <span className="text-[20px] mt-5 inline-block">The process I took includes; </span>
              <ol className="list-disc pl-8 leading-normal">
                <li>Worked on a detailed audit of the existing platform</li>
                <li>Design thinking workshops with key stakeholders.</li>
                <li>Map out the content structure and design layout to convert customers.</li>
                <li>Test our discovery.</li>
              </ol>
              <span className="inline-block mt-5">Below is the summary of the challenges users faced with Tantalizer&#39;s old website.</span>
            </div>
          </div>

        <section className={`bg-[#1B1B1B] mt-8 pt-6 pl-6 pr-6 pb-8 md:pt-10 lg:pl-[4rem] lg:pr-[1rem] lg:flex lg:gap-[2.5rem]`}>
            <div className="flex flex-col gap-4 lg:flex">
              <h2 className={`text-[27px] md:text-4xl lg:text-2xl font-figtree`}>Website Visitor&#39;s Painpoint</h2>
              <div className="rounded-2xl border p-4 mt-4">
                <span className="inline-block mt-2 text-[28px] lg:h-[35rem] lg:pt-[10rem] lg:text-[20px]">I had 18 users visit the website, 12 were new visitors</span>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:grid md:grid-cols-2 md:pt-6 lg:grid lg:grid-cols-3">
        
              <PainpointBox sectionHeader="Home Page">
                  The menu items on the homepage are too small to see clearly, and there&#39;s no way to filter by dietary restrictions
              </PainpointBox>
              <PainpointBox sectionHeader="Ordering Process">
                  The online ordering process is confusing, and i&#39;m not sure my order went through
              </PainpointBox>
              <PainpointBox sectionHeader="Customer Support">
                  There&#39;s no easy way to contact customer support when i had problems with my order.
              </PainpointBox>
              <PainpointBox sectionHeader="Home Page">
                  There is no clear indication of what makes Tantalizer unique or why i should order from them
              </PainpointBox>
              <PainpointBox sectionHeader="General">
                  The website lacks a clear and consistent visual design, making it look unprofessional
              </PainpointBox>
              <PainpointBox sectionHeader="Ordering Process">
                  The &quot;add to cart &quot; button is hard to find, and the process is not intuitive
              </PainpointBox>
              <PainpointBox sectionHeader="Delivery Information">
                  The website does not provide an estimated time of arrival, just a broad delivery window
              </PainpointBox>
              <PainpointBox sectionHeader="Home Page">
                  The loading speed of the homepage is very slow, especially on mobile data
              </PainpointBox>
              <PainpointBox sectionHeader="Menu Page">
                  There are no user reviews or ratings for the menu items, so i don&#39;t know what&#39;s popular
              </PainpointBox>
            </div>
        </section>
        <section className="mt-12 pl-[2rem] pr-8 lg:pl-[8rem]">
          <h1 className="text-[40px] font-figtree">DIFFERENT USERS AND THEIR <br /> GOALS</h1>
          <div className="pt-8 md:flex md:gap-40 lg:flex lg:gap-[25rem]">
              <h3 className="font-bold mb-4">The Quick Bite</h3>
              <span className="inline-block md:w-96 lg:w-[35rem]">These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.</span>
          </div>
          <div className="pt-8 md:flex md:gap-15 lg:flex lg:gap-[19rem]">
              <h3 className="font-bold mb-4">The Family Meal Planner</h3>
              <span className="inline-block md:w-96 lg:w-[35rem]">These users are busy individuals, often office workers or students, who need a fast and convenient meal solution during their lunch break or on the go.</span>
          </div>
          <div className="pt-8 md:flex md:gap-20 lg:flex lg:gap-[20.5rem]">
              <h3 className="font-bold mb-4">The Nostalgic Regular</h3>
              <span className="inline-block md:w-96 lg:w-[35rem]">These users are loyal Tantalizers customers who have been enjoying their food for years. They have their favorite dishes and appreciate the familiar taste.</span>
          </div>
        
          <div className="pt-8 md:flex md:gap-15 lg:flex lg:gap-[20rem]">
              <h3 className="font-bold mb-4 ">The New Food Explorer</h3>
              <span className="inline-block md:w-96 lg:w-[35rem]">These users are new to Tantalizers or are looking to try new food options. They are curious about the menu and want to explore different flavors.</span>
          </div>
        </section>
        
        <section className="mt-12 pl-[2rem] pr-8 md:mt-10 lg:pl-[8rem] lg:pr-[8rem] lg:mt-[5rem]">
          <h1 className="text-4xl font-figtree">CURATING A DELECTABLE DIGITAL EXPERIENCE  TO SATISFY CRAVINGS AND BUILD <br /> LOYALTY</h1>
          <span className="inline-block pt-4 pb-4">Recognising the need for trust in online food ordering, I designed the Tantalizers website to prioritise reliability and ease of use. Authentic food photography replaced generic images, and multiple contact channels were provided.</span>
          <span className="inline-block pt-4 pb-4">The UX writing, carefully crafted with a content strategist, portrayed Tantalizers as a friendly, accessible, and value-driven brand. A responsive design was implemented, ensuring a seamless experience and easy content updates.</span>
          <span className="inline-block pt-4 pb-4">The homepage features clear copy and prominent calls-to-action, simplifying menu exploration and order placement, ultimately building customer loyalty.</span>
        </section>
        <div className="flex flex-col gap-8 pr-8 mt-8 pl-8 items-center">
          <ThumbnailBg imageUrl={tantalizer1}/>
          <div className="flex flex-col gap-[3rem] lg:flex lg:flex-row lg:gap-20">
            <ThumbnailBg2 imageUrl={tantalizer2}/>
            <ThumbnailBg3 logoUrl={slantedLogo} imageUrl={tantalizer3}/>
          </div>
        </div>
        <section className="mt-16 mb-20 pl-8 pr-8 text-[15px] md:pl-[1.5rem] md:pr-[3rem] lg:pl-[8rem] lg:pr-[8rem]">
          <h1 className="text-4xl font-figtree">FROM BROWSE <br /> TO BITE: OPTIMIZING THE MENU FOR <br /> ORDERS</h1>
              <div className="mt-8 md:text-[20px]">
                <span>
                Acknowledging that the menu is the heart of the Tantalizers experience, I redesigned the page to be intuitive and visually appealing.</span>
        
                <span className="inline-block mt-10">Clear categorisation and high-resolution food images were prioritised, allowing users to easily browse and discover their favourite dishes. Detailed descriptions and nutritional information were provided to empower informed choices. A streamlined ordering process, integrated directly within the menu, minimised friction and encouraged immediate action.</span>
        
                <span  className="inline-block mt-10">The design reinforced Tantalizers&#39; brand values of variety, quality, and convenience, transforming the menu page into a delightful and efficient gateway to culinary satisfaction
                </span>
              </div>
        </section>
        <div className="flex flex-col gap-8 pr-8 mt-8 pl-8 items-center mb-20">
          <ThumbnailBg imageUrl={breakfastImage}/>
        </div>
        
        <section className={`p-5 bg-[#1B1B1B] mb-20 md:pl-[2.5rem] lg:p-[2rem] lg:pl-[5rem] lg:pr-[5rem] font-figtree`}>
            <h3 className={`lg:text-4xl font-figtree`}>TIME TO RETROSPECT!</h3>
            <span className="text-[14px] lg:text-3xl">So these were my learning after working on this project:</span>
            <div className="flex flex-col gap-6 mt-8 md:flex md:flex-row">
              <RetrospectBoxes number="01" heading="Designing for Social Impact">
              A deep dive into the healthcare sector revealed the urgent need for user-centred solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.
              </RetrospectBoxes>
              <RetrospectBoxes number="02" heading="Inclusive Inteface Design">
                  Designing for a multi-generational audience required a nuanced approach to accessibility and usability. I gained valuable experience in creating inclusive interfaces.
              </RetrospectBoxes>
            </div>
        </section>

       <Footer projectImage={footerImage} projectName="Care Service App for Professionals and Patients" projectLink="/myQura"/>
        
      </div>

   </div>
  )
}