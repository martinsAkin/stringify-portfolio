import Image from "next/image"
import Logo from "../images/rock-reality/kwatsLogo.png"
import footerImage from "../images/rock-reality/kwatsFooter.png"
import mememoji from "../images/rock-reality/Memoji Component.png"
import spiralDownVector from "../images/mycareAssistant/case_study/Vector 10.png"
import Footer from "./Footer"


const KwatsPage = () => {
 return(
  <div className="bg-black pb-8 pt-12 text-white text-[20px] overflow-hidden lg:pr-[1rem] font-poppins">
       <div className="md:pl-[2rem]">
           
           <Image src={Logo} className="mx-auto md:w-36 lg:w-[10rem]" width={120} height={120} alt="Page Logo"/>
           <span className={`text-amber-100 flex justify-center pt-4 text-2xl md:text-2xl font-brunoAce`}>KWATS - 2024</span>
           <section className="pt-8 text-white flex flex-col justify-center text-center gap-6 items-center pb-4 lg:mb-8">
             <p className="font-figtree">
               <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Courier Servivce App for</span> <br />
               <span className="italic text-2xl md:text-3xl lg:text-4xl">Delivery Services</span>
             </p>
           </section>
        </div>

        <div className="flex justify-center md:pr-[15rem] md:pl-[10rem] items-center mb-[5rem]">
          <Image src={mememoji} className="w-[10rem] h-[10rem] md:h-[30rem] md:w-[30rem]" alt="image"/>
          <div className="flex flex-col text-[17px]">
             <h1 className="font-brunoAce font-bold md:text-5xl">COMING SOON!!</h1>
             <span className="md:text-3xl">Kwats&#39; case study page is been carefully prepared. Check back later</span>
             <span className="block">Check the next Project</span>
             <Image src={spiralDownVector} className=" mt-[2.5rem] h-[5rem] w-[5rem] scale-x-[-1]" alt="vector" />
          </div>
        </div>

        <Footer projectImage={footerImage} projectName="Care Service App for Professionals and Patients" />
   </div>
 )
}

export default KwatsPage