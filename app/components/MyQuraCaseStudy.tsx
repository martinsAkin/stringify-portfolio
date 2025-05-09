import Image, { StaticImageData } from "next/image"
import mqLogo from "../images/mycareAssistant/MCA LOGO SVG.png"
import frame1 from "../images/mycareAssistant/myCare_(1).png"
import { ImageFrame } from "./MyQuraDesign"
import storyboard1 from "../images/mycareAssistant/case_study/storyTelling(1).png"
import storyboard2 from "../images/mycareAssistant/case_study/storyTelling(2).png"
import storyboard3 from "../images/mycareAssistant/case_study/storyTelling(3).png"
import storyboard4 from "../images/mycareAssistant/case_study/storyTelling(4).png"
import storyboard5 from "../images/mycareAssistant/case_study/storyTelling(5).png"
import storyboard6 from "../images/mycareAssistant/case_study/storyTelling(6).png"
import storyboard7 from "../images/mycareAssistant/case_study/storyTelling(7).png"
import storyboard8 from "../images/mycareAssistant/case_study/storyTelling(8).png"
import storyboard9 from "../images/mycareAssistant/case_study/storyTelling(9).png"
import Oluwatobi from "../images/mycareAssistant/case_study/oluwatobi.png"
import Sandra from "../images/mycareAssistant/case_study/phillipImage.png"
import mobile1 from "../images/mycareAssistant/case_study/onboardingClient (2).png"
import mobile2 from "../images/mycareAssistant/case_study/onboardingClient (3).png"
import mobile3 from "../images/mycareAssistant/case_study/onboardingClient (4).png"
import mobile4 from "../images/mycareAssistant/case_study/onbardingClient(1).png"
import spiralDownVector from "../images/mycareAssistant/case_study/Vector 10.png"
import homescreen1 from "../images/mycareAssistant/case_study/homescreen (2).png"
import homescreen2 from "../images/mycareAssistant/case_study/homescreen (1).png"
import ArrowUpVector from "../images/mycareAssistant/case_study/Vector 12.png"
import client1 from "../images/mycareAssistant/case_study/onboardingProfessional (2).png"
import client2 from "../images/mycareAssistant/case_study/onboardingProfessional (3).png"
import client3 from "../images/mycareAssistant/case_study/onboardingProfessional (4).png"
import client4 from "../images/mycareAssistant/case_study/onboardingProfessional (1).png"
import adminPortal from "../images/mycareAssistant/iMac 24 inch (1).png"
import { RetrospectBoxes } from "./TantalizerCaseStudy"
import Footer from "./Footer"
import footerImageTantalizer from "../images/footerImage.png"

interface StoryBoardProps{
   storyImageUrl: string | StaticImageData;
   storyDescription: string;
}
interface AudienceProps{
   audienceImage: string | StaticImageData;
   audienceName: string;
   audienceTitle: string
   audienceBio: string
   goal1: string
   goal2: string
   painpoint1: string
   painpoint2: string
}
interface MobileScreensProps{
   imageSrc: string | StaticImageData
}
interface PointsProps{
   number: number
   point: string
}

const StoryBoard = ({storyImageUrl, storyDescription}: StoryBoardProps) => {
   return(
      <div>
            <Image src={storyImageUrl} alt="picture" />
            <p className="text-[15px] inline-block mt-[0.5rem] md:text-2xl">{storyDescription}</p>
      </div>
   )
}

const Audience = ({audienceImage, audienceName, audienceTitle, audienceBio, goal1, goal2, painpoint1, painpoint2}:AudienceProps) => {
   return(
      <div className="flex flex-col text-[13px] bg-gray-900 rounded-tl-lg">
         <section className="flex">
            <div>
               <Image src={audienceImage} className="h-[100%] w-[55rem] rounded-tl-[10px] rounded-bl-[15px]" alt="userImage"/>
            </div>
            <div className="p-[1rem]">
               <span className="font-bold text-[17px] md:text-3xl">{audienceName}</span>
               <span className="mb-4 block md:text-2xl">{audienceTitle}</span>
               <hr />
               <span className="block mt-4 md:text-[1.5rem]">{audienceBio}</span>
            </div>
         </section>

         <section className="flex gap-4 m-[1rem]">
            <div className="border border-white bg-gray-900 rounded-lg p-[1rem]">
               <h1 className="font-bold text-[20px] md:text-2xl">Goals</h1>
               <ol className="mt-[0.5rem] ml-8 list-disc md:text-2xl">
                  <li>{goal1}</li>
                  <li>{goal2}</li>
               </ol>
            </div>
            <div className="border border-white bg-gray-900 rounded-lg p-[1rem]">
               <h1 className="font-bold text-[20px] md:text-2xl">Pain points</h1>
               <ol className="mt-[0.5rem] ml-8 list-disc md:text-2xl">
                  <li>{painpoint1}</li>
                  <li>{painpoint2}</li>
               </ol>
            </div>
         </section>
      </div>
   )
}

const MobileScreens = ({ imageSrc }:MobileScreensProps) => {
   return(
      <div>
         <Image src={imageSrc} alt="image"/>
      </div>
   )
}

const Points = ({number, point}:PointsProps) => {
   return(
      <div className="flex flex-col items-center">
         <div className="rounded-[50%] font-bold text-red-600 bg-amber-400 w-6 text-center mb-[1rem]">{number}</div>
         <section className="text-[13px] md:text-2xl">
            {point}
         </section>
      </div>
   )
}

const Points2 = ({number, point}:PointsProps) => {
   return(
      <div className="flex gap-[0.5rem] items-center">
         <div className="rounded-[50%] font-bold text-red-600 bg-amber-400 w-8 h-10 p-[0.5rem] text-center">{number}</div>
         <section className="text-[13px] md:text-2xl">
            {point}
         </section>
      </div>
   )
}

const MyQuraCaseStudy = () => {
  return (
    <div className="bg-black pb-8 pt-12 text-white text-[20px] overflow-hidden lg:pr-[1rem] font-poppins">
        <section className="text-center pr-8 pl-8">
            <Image src={mqLogo} className="w-[5rem] h-[5rem] mx-auto md:w-[15rem] md:h-[15rem]" alt="pageLogo"/>
            <span className='text-gray-400 text-[15px] font-brunoAce md:text-3xl'>MYCARE ASSISTANT (MYQURA) - 2024</span>
            <h1 className="mt-4 font-figtree md:text-4xl">
              <strong className="block">Care Service App for</strong>
              <i> Care Professionals & Patients</i>
            </h1>
         </section>
            <div className="flex justify-center items-center mt-6 mb-4">
               <ImageFrame imageSrc={frame1}/>
            </div>

         <section className="m-[3rem] flex flex-col gap-[3rem] pb-[3rem] md:flex md:flex-row md:ml-[10rem] md:mr-[5rem]">
            <div className="flex md:flex gap-8 md:flex-col text-[15px] text-gray-400 md:text-[18px]">
                <section className="flex flex-col gap-6 list-none">
                 <div>
                   <li className="font-bold text-white">Client:</li>
                   <li>MyCare Assistant</li>
                 </div>
                 <div>
                    <li className="font-bold text-white">My Role:</li>
                    <li>Lead Designer</li>
                 </div>
                 <div>
                    <li className="font-bold text-white">Timeline:</li>
                    <li>3 months</li>
                 </div>
                </section>
               <div className="list-none">
                   <li className="font-bold text-white">Responsibilities:</li>
                   <li>User Research</li>
                   <li>User flows & Wireframes</li>
                   <li>Design Direction</li>
                   <li>Storyboarding</li>
                   <li>Visual Design</li>
                   <li>Prototyping</li>
               </div>
            </div>

            <div className="text-[16px] md:text-[18px] md:pr-[2rem]">
               <h2 className="font-bold font-figtree text-white">Overview:</h2>
               <span>
                   MyCare Assistant is a leading Nigerian home healthcare service provider dedicated to delivering comprehensive and compassionate care.  Driven by a vision of creating a robust and accessible health solution, MyCare Assistant offers a diverse range of services tailored to meet the unique needs of individuals requiring care in the comfort of their own homes. This led to the foundation of the app: “MyQura by MyCare Assistant”
               </span>
               <span>
                   These services are provided by a team of highly trained and skilled care professionals, ensuring the highest quality of care. The spectrum of services offered includes, but its not limited to elderly care, specialized dementia care, mental health support, and creative support, demonstrating a committment to addressing a wide array of care requirements.
               </span>
            </div>
         </section>
         <section className="p-[2rem] bg-gray-900 text-[16px] md:pl-[5rem] md:text-2xl">
                  <h1 className="mt-[2rem] mb-[1.5rem] text-3xl font-bold font-figtree">THE PROBLEM</h1>
                  <span>
                     The relative of the founder of MyCare Assistant suffered a major health challenge, and the inadequate and costly support services led to her death. This led to the birth of MyCare Assistant, the company grew and handled all their operations manually. However, as the business grew and the volume of Clients and Care Professionals increased, this manual approach became unsustainable. To address the challenges with the manual approach, MyCare Assistant recognised the necessity of transitioning from manual operations to a digital platform.
                  </span>

                  <h1 className="mt-[2rem] mb-[1.5rem] text-3xl font-bold font-figtree">THE SOLUTION</h1>
                  <span>
                     After thoroughly understanding MyCare Assistant&#39;s business processes, we determined that a mobile application for both clients and care professionals was the ideal solution.  This app empowers clients to monitor care professional activities, including clock-in and clock-out times, providing transparency and peace of mind.  Care professionals, in turn, can use the app to manage their schedules, accepting or declining care service requests based on their availability and preferences.  Furthermore, the Care Professional app provides access to affordable courses designed to enhance their skill sets and professional development.
                  </span>
         </section>

         <div className="m-[2rem]">
            <h1 className="text-3xl font-bold font-figtree">STORY BOARDING</h1>
            <span className="text-[15px] md:text-2xl">In order to seamlessly achieve the business and design goals, the illustration below represents the process I went through:</span>
         </div>

         <section className="p-[2rem] bg-gray-800 grid grid-cols-1 gap-[1.5rem] md:grid md:grid-cols-3">
               <StoryBoard storyImageUrl={storyboard1} storyDescription="Oluwatobi is living in Canada with her family" />
               <StoryBoard storyImageUrl={storyboard2} storyDescription="Oluwatobi&#39;s Dad has been sick with an ailment, and he has been rushed to the hospital" />
               <StoryBoard storyImageUrl={storyboard3} storyDescription="Oluwatobi&#39;s Dad condition has gotten better and has been discharged from the hospital" />
               <StoryBoard storyImageUrl={storyboard4} storyDescription="Oluwatobi needs a care professional to look after her dad. In search of a health care service provider, her friend introduced her to MyQura." />
               <StoryBoard storyImageUrl={storyboard5} storyDescription="Oluwatobi’s signs up, registers her Dad as a patient and requests for care professionals." />
               <StoryBoard storyImageUrl={storyboard6} storyDescription="Care Professionals logs into their app to accept care services best suited to their skills set and location." />
               <StoryBoard storyImageUrl={storyboard7} storyDescription="Care professionals attends to the patient for the stipulated number of days or months." />
               <StoryBoard storyImageUrl={storyboard8} storyDescription="Oluwatobi is happy that her Dad is well taken care of, even in her absence. " />
               <StoryBoard storyImageUrl={storyboard9} storyDescription="The Care Professional is excited that offer her skills and the result is evident. " />
         </section>

         <section className="m-[2rem]">
            <h1 className="text-5xl mb-[1rem] font-figtree">TARGET AUDIENCE</h1>
            <span className="text-[15px] md:text-2xl">In order to seamlessly achieve the business and design goals, the illustration below represents the process I went through:</span>
         </section>
         <section className="pt-[3rem] pl-[1rem] pr-[1rem] grid grid-cols-1 gap-[2.5rem]">
            <Audience audienceImage={Oluwatobi} audienceName="Oluwatobi Hassan, 28" audienceTitle="Software Engineer" audienceBio="Oluwatobi is a Software Engineer in Canada, She loves her family so much and the well being of her family is her priority. Recently she got the news that her father back in Nigeria, isn’t feeling too well. Although he has been discharged from the hospital but he needs to be monitored." goal1="To get a core healthcare professional to takecare of her father." goal2="To momitor her father&#39;s health from Canada" painpoint1="Lack of skilled & well trained care professionals to handle her father&#39;s condition" painpoint2="Not being able to monitor care professionals."/>

            <Audience audienceImage={Sandra} audienceName="Sandra Phillips, 32" audienceTitle="Care Professional" audienceBio="Sanra is a MyCare Assistant certified care professional. She loves rendering care services to her patient, as she has been taught by the instructors at MyCare Assistant. Most of the times, she misses available care shift when it is posted on the Whatsapp group. She really wants to be available for care shifts on time." goal1="To render care services to her patients efficiently" goal2="To properly manage her care shifts so they are not conflicting." painpoint1="Misses out on care shifts due to not been available" painpoint2="Not being able to provide certain care services."/>
         </section>

         <div className="ml-8 mt-16 mr-[1.5rem]">
            <h1 className="font-bold text-3xl md:text-4xl font-figtree">MYQURA CLIENT</h1>
            <span className="inline-block mt-4 mb-4 text-[13px] md:text-2xl">The MyQura Client app was designed intentionally to ensure that the user&#39;s need are been catered for, and they enjoy a seamless experience when they order for a care service.</span>

               <div className="flex gap-4">
                  <MobileScreens imageSrc={mobile1}/>
                  <MobileScreens imageSrc={mobile2}/>
                  <MobileScreens imageSrc={mobile3}/>
                  <MobileScreens imageSrc={mobile4}/>
               </div>
         </div>

         <div className="flex justify-center mt-4">
            <Image src={spiralDownVector} height={70} alt="vector-image"/>
         </div>

         <section className="grid grid-cols-2 m-[2rem] gap-[1rem]">
            <Points number={1} point="I ensured that from the flash screen, there is a feel of human connection and care."/>
            <Points number={2} point="I ensured that from the flash screen, there is a feel of human connection and care."/>
            <Points number={3} point="I ensured that from the flash screen, there is a feel of human connection and care."/>
            <Points number={4} point="I ensured that from the flash screen, there is a feel of human connection and care."/>
            
         </section>

         <section className="flex m-6 gap-[1rem] md:gap-8 md:m-[4rem]">
            <div className="flex flex-col w-20rem gap-4">
               <Image src={homescreen1} height={200} className="md:h-[20rem] md:w-[15rem]" alt="image"/>
               <Image src={ArrowUpVector} className="ml-[3rem] md:ml-[6rem]" width={75} alt="vector"/>
               <Image src={homescreen2} className="md:h-[20rem] md:w-[15rem]" height={200} alt="image"/>
            </div>
            <div className="grid grid-cols-1 gap-4 w-[15rem] md:w-dvw">
               <Points2 number={1} point="A warm welcome from the homescreen to help personalize the experience."/>
               <Points2 number={2} point="The messages can be easily accessible in the case of support cases."/>
               <Points2 number={3} point="There is no second guessing of how to get started, the card explains the first thing to do."/>
               <Points2 number={4} point="The services the users orders for more is placed before them so it is easily accessible."/>
               <Points2 number={5} point="After a patient has been added, the card changes based on what is next for the user."/>
            </div>
         </section>

         <div className="m-6 md:m-[3rem]">
            <h1 className="font-bold text-3xl mb-6 md:text-4xl font-figtree">MYQURA CLIENT</h1>
            <span className="md:text-2xl">The MyQura Client app was designed to intentionally ensure that the user&#39;s needs are been catered for, and they enjoy a seamless experience when thry order fir a care service.</span>

            <div className="grid grid-cols-4 gap-6 mt-6 mb-2">
               <MobileScreens imageSrc={client1} />
               <MobileScreens imageSrc={client2} />
               <MobileScreens imageSrc={client3} />
               <MobileScreens imageSrc={client4} />
            </div>
            <div className="flex justify-center">
               <Image src={spiralDownVector} height={75} alt=""/>
            </div>
            <section className="grid grid-cols-2 md:gap-[2rem]">
               <Points number={1} point="I endured that from the onboarding screens, there is a feel of human connection and care."/>
               <Points number={2} point="It&#39;s compulsory for every care professional to be verified so the company is confident of their care professionals."/>
               <Points number={3} point="The cards makes the most important information available to the care professionals."/>
               <Points number={4} point="The card shows the time & date for the upcoming care service so it is not missed."/>
               <Points number={5} point="The care professional can see their recently completed bookings."/>
               <Points number={6} point="The best match care service is a pool of care services patients have requested for."/>
               <Points number={7} point="Courses are also offered to the care professionals to hlep them polish their skillset."/>
            </section>
         </div>
          
          <section className="m-6 mt-[5rem] mb-[5rem] md:m-[3rem] md:mt-[5rem]">
            <h1 className="font-bold text-3xl mb-4 md:text-4xl font-figtree">ADMIN PORTAL</h1>
            <span className="text-[15px] inline-block mb-[2rem] md:text-2xl">The admin portal was designed to manage requests from the clients as well as the care professionals. To ensure proficient services are been delivered appropriately</span>

              <Image src={adminPortal} height={200} className="mx-auto md:w-[40rem] h-[25rem]" alt="image" /> 
          </section>
          <section className="bg-gray-700 p-6 grid grid-col-1 gap-8 mb-[5rem] md:grid md:grid-cols-2">
               <RetrospectBoxes number="01" heading="Designing for Social Impact">
                  A deep dive into the healthcare sector revealed the urgent need for user-centered solutions in Nigeria and surrounding regions. This project channeled my passion for designing for social impact.
               </RetrospectBoxes>
               <RetrospectBoxes number="02" heading="Inclusive Interface Design">
                  Designing for a multi-generational audience required a nuanced approach to accessibiltiy and usability. I gained valuable experience in creating inclusive interface.
               </RetrospectBoxes>
               <RetrospectBoxes number="03" heading="Admin Workflow & UX">
                  Understanding the administrator&#39;s workflow was paramount. I learned how to design intuitive admin interface that directly impacts the end-user experience.
               </RetrospectBoxes>
               <RetrospectBoxes number="04" heading="Data-Driven Design Rationale">
                  Data-driven design is essential. Every UI element must be justified and aligned with user needs and business goals. I honed my ability to articulate rationale design to stakeholders.
               </RetrospectBoxes>
          </section>

          <Footer projectName="Real Estate Website Redesign" projectImage={footerImageTantalizer} projectLink="/rock-realty"/>
          
    </div>
  )
}

export default MyQuraCaseStudy