import Image from "next/image"
import logo from "../images/rock-reality/rock-logo.png"
import headImage from "../images/rock-reality/Rock Realty Main.png"
import { HeadImage, PainpointBox, ThumbnailBg2, RetrospectBoxes } from "./TantalizerCaseStudy"
import { MidPageLogo } from "./TantalizerCaseStudy"
import midpageImage from "../images/rock-reality/Company Logo.png"
import lamboghini from "../images/rock-reality/Company Logo (1).png"
import tabScreen from "../images/rock-reality/Frame 131.png"
import frame114 from "../images/rock-reality/Frame 114.png"
import frame115 from "../images/rock-reality/Frame 115.png"
import imageFooter from "../images/rock-reality/Scene 12 1 (1).png"
import Footer from "./Footer"


const RockRealtyCS = () => {
  return (
    <div className="p-8 bg-black text-white text-[20px] overflow-hidden font-poppins">

        <Image src={logo} className="mx-auto md:w-36 lg:w-[10rem]" width={120} height={120} alt="tantalizerLogo"/>
        <span className={`text-amber-100 flex justify-center pt-4 text-[1rem] md:text-2xl font-brunoAce`}>ROCK REALTY LIMITED - 2024</span>
        <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-4 lg:mb-8">
          <p className="font-poppins">
            <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Real Estate Website</span> <br />
            <span className="italic text-2xl md:text-3xl lg:text-4xl">Redesign</span>
          </p>

          <HeadImage imageUrl={headImage} />
         </section>

         <section className={`md:flex md:gap-10 md:text-[15px] md:mt-8 md:pl-[0rem] md:pr-[3rem] lg:pl-[10rem] lg:pr-[10rem]`}>
          <section className="text-white mt-4 gap-[1.5rem] flex pl-[2rem] text-[15px] md:flex md:flex-col">
            <div className="flex flex-col gap-4 list-none mb-2 w-[10rem]">
              <div className="flex flex-col">
                <li className="font-bold">Client:</li>
                <li className="text-[15px] lg:text-[14px]">Rock Realty Limited</li>
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
              <h2 className="font-figtree">Overview:</h2>
              <section>
                  <div className="pb-11">Rock Realty Limited is a Nigerian real estate firm dedicated to democratizing property ownership and investment, focusing on accessibility for middle-income earners. They offer a full spectrum of services, from development and advisory to investment planning, built on principles of transparency, integrity, and client-centricity. </div>
                  <div>
                    Recognizing the critical importance of a user-friendly digital presence in today&#39;s market, Rock Realty invested in a website redesign. This redesign aimed to enhance user experience, build trust, and simplify the often complex process of navigating the Nigerian real estate market online. By creating a seamless and informative platform, Rock Realty empowers clients to make informed decisions and confidently pursue their real estate goals.
                  </div>
              </section>
          </div>
        </section>

        <section className="mt-8 bg-[#1B1B1B] pl-10 pt-8 pr-10 pb-10 lg:pl-[8rem] lg:pr-[10rem]">
          <div> 
            <h2 className={`text-4xl pb-6 font-bold font-figtree`}>THE PROBLEM</h2>
              <ol className={`list-disc ml-5 lg:pl-[2rem]`}>
              <li className="text-gray-400">
                <span className="font-bold text-white">Lack of Clear Digital Presence :</span> Rock Realty faces the need for a &#34;strong digital presence&#34;, a &#34;user-friendly and informative online platform.&#34; Which the the current website doesn&#39;t meet these standards.
                </li>
              <li className="text-gray-400">
                <span className="font-bold text-white">Need for Enhanced User Experience :</span> The current website wasn&#39;t well structured so the company experienced some usability issues that hinder user engagement.
                </li>
              <li className="text-gray-400">
                <span className="font-bold text-white">Building Trust :</span> The current website has not been effectively establishing credibility and confidence among potential clients.</li>
              <li className="text-gray-400">
                   Need to simplify the complex process of navigating the Nigerian real estate market.

              </li>
              </ol>
        
          </div>
          <div className="mt-14">
            <h2 className={`text-4xl pb-6 font-bold font-figtree`}>THE SOLUTION</h2>
              <p>To address these challenges, I redesigned Rock Realty&#39;s website. The goal was to create a seamless and informative platform that simplifies the real estate process. This redesign focused on enhancing user experience, building trust through clear communication, and reflecting Rock Realty&#39;s innovative approach in the digital space. Ultimately, I aimed to empower clients with easy access to information and a confident online journey.
              </p>
          </div>
        </section>

        <MidPageLogo imageUrl={midpageImage} />

        <div className={`pl-8 pr-8 lg:pl-[8rem] lg:pr-[10rem]`}>
            <h1 className={`text-5xl leading-12 font-bold font-figtree`}>THE WEBSITE UX AUDIT AND RESEARCH PROCESS</h1>
            <div className="mt-10 text-[20px]">
              To kick off the Rock Realty redesign, I began with a crucial meeting with their team. We discussed their vision for the new site and the specific improvements they wanted to see. This ensured we were all on the same page regarding the project&#39;s goals.
        
              <span className="text-[20px] mt-5 inline-block">The process I took includes; </span>
              <ol className="list-disc pl-8 leading-normal text-gray-400">
                <li><span className="font-bold text-white">A thorough review of the existing Rock Realty website:</span> This allowed me to pinpoint areas needing improvement and understand the current user experience.</li>

                <li><span className="font-bold text-white">
                    Collaborative design thinking sessions with Rock Realty&#39;s key stakeholders:
                  </span>
                   These workshops were vital for aligning our design strategy with their business objectives and gaining valuable insights into their clients&#39; needs.
                </li>
                <li><span className="font-bold text-white">
                  Careful planning of the website&#39;s content structure and layout: 
                  </span>
                  My focus was on creating a user-friendly experience that would guide potential clients through the real estate process and encourage them to connect with Rock Realty.
                </li>
                <li><span className="font-bold text-white">
                  Rigorous testing of our design decisions:
                  </span>
                   This step ensured that the new website would meet the needs of Rock Realty&#39;s target audience and deliver a smooth, intuitive experience.
                </li>
              </ol>
              <span className="inline-block mt-5">Through this process, I gained a clear understanding of the challenges users faced with Rock Realty&#39;s previous online presence.</span>
            </div>
          </div>

           <section className={`bg-[#1B1B1B] mt-8 pt-6 pl-6 pr-6 pb-8 md:pt-10 lg:pl-[4rem] lg:pr-[1rem] lg:flex lg:gap-[2.5rem]`}>
                      <div className="flex flex-col gap-4 lg:flex">
                        <h2 className={`text-[27px] md:text-4xl lg:text-2xl font-figtree`}>Website Visitor&#39;s Painpoint</h2>
                        <div className="rounded-2xl border p-4 mt-4">
                          <span className="inline-block mt-2 text-[28px] lg:h-[35rem] lg:pt-[10rem] lg:text-[20px]">I had 10 users visit the website, 6 were new visitors</span>
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
                        
                      </div>
                  </section>
              <div className="ml-0 mt-8 mb-8 mr-0">
                <Image src={lamboghini} alt=""/>
              </div>

              <div className="mt-[5rem] mb-[5rem]">
                <h1 className="font-bold text-3xl font-figtree">DIFFERENT USERS AND THEIR GOALS</h1>
                    <div className="flex gap-[3.5rem] list-none text-[15px] mt-[1.5rem] md:text-2xl">
                      <li>The Aspiring Homeowner:</li> <li className="md:w-[75%]">New to the real estate market, they seek a trusted partner like Rock Realty to guide them through the home buying process. They aim to find affordable properties, understand financing options, and gain confidence in their first major investment.</li>
                    </div>
                    <div className="flex gap-[5rem] md:gap-[7.5rem] list-none text-[15px] mt-[1.5rem] md:text-2xl">
                      <li>The Savvy Investor:</li> <li className="md:w-[75%]">Experienced investors looking to expand their portfolio, they rely on Rock Realty to identify lucrative opportunities. Their goal is to access detailed property information, evaluate potential returns, and streamline the acquisition process for optimal investment growth.</li>
                      </div>

                      <div className="flex gap-[5rem] md:gap-[8rem] list-none text-[15px] mt-[1.5rem] md:text-2xl">
                      <li>The Family Seeker:</li> <li className="md:w-[75%]">Families looking for a better living situation. They want to find family-friendly properties that meet their needs and budget, access information about neighbourhoods and amenities, and explore flexible payment plans to secure a comfortable and secure home</li>
                      </div>
                    
              </div>

              <section>
                <h1 className="font-bold text-3xl mb-6 font-figtree">Building a Foundation of Trust: The Rock Realty Homepage Experience</h1>
                  <span className="font-[15px]">In a real estate market where trust is paramount, the Rock Realty homepage was designed to establish credibility and transparency from the first click. Recognizing the prevalence of fraud concerns, we prioritized authentic property imagery and clear contact pathways, ensuring visitors felt secure and connected. </span>
                  <span className="inline-block mt-[1.5rem]">
                  The homepage&#39;s UX writing was carefully crafted with a content strategist, portraying Rock Realty as a reliable and accessible partner. We aimed to simplify complex real estate concepts, providing clear value propositions and guiding users towards their investment goals. 
                  </span>
                  <span className="inline-block mt-[1.5rem]">
                    Through iterative design and stakeholder input, we created a welcoming and informative homepage. Clear calls-to-action encourage exploration of property listings and direct engagement with Rock Realty&#39;s team, laying the groundwork for a successful client relationship.
                  </span>
              </section>

              <div className="mt-8 mb-8 flex justify-center">
                <Image src={tabScreen} alt="image" />
              </div>

              <section>
                <h1 className="font-bold text-3xl mb-8 md:text-4xl font-figtree">SHOWCASING PRODUCTS AND SERVICES WITH RELEVANT DETAILS</h1>
                    <span className="text-[15px] md:text-2xl text-gray-400">The Rock Realty products and services page was designed to deliver clear, concise information. We prioritized detailed property listings and service descriptions, ensuring users could easily understand offerings and make informed decisions. A user-friendly interface and intuitive navigation allowed for seamless exploration, enhancing accessibility and driving engagement.</span>
              </section>

              <div className="flex gap-[2.5rem] mt-[2rem] justify-center">
                  <ThumbnailBg2 imageUrl={frame114} />
                  <ThumbnailBg2 imageUrl={frame115} />
              </div>

              <section className={`p-5 bg-[#1B1B1B] mt-[5rem] mb-20 md:pl-[2.5rem] lg:p-[2rem] lg:pl-[5rem] lg:pr-[5rem]`}>
                          <h3 className={`lg:text-4xl font-figtree`}>THE OUTCOME</h3>
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

              <Footer projectName="Courier Servivce App for Delievry" projectImage={imageFooter}/>
    </div>
  )
}

export default RockRealtyCS