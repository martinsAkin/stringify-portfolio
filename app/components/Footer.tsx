import Image, { StaticImageData } from "next/image";
// import footerImage from "../images/footerImage.png"

interface FooterProps{
 projectName: string
 projectImage: string | StaticImageData
}
const Button = () => {
 return(
   <div className="rounded-4xl pt-3 pb-3 pl-8 pr-8 border-2 border-amber-400 bg-gray-400 w-[15rem] mt-4 md:w-[20rem] font-figtree">
       Next Project
   </div>
 )
}

const Footer = ({projectName, projectImage}:FooterProps) => {
  return (
   <section className="text-center flex flex-col items-center justify-center md:text-4xl lg:flex lg:flex-row lg:ml-[5rem] lg:mr-[5rem] lg:gap-[2rem]">
   <div className="flex flex-col items-center lg:items-start">
     <h2 className="font-brunoAce">NEXT PROJECT</h2>
     <h2 className="font-figtree">{projectName}</h2>
     <Button />
   </div>
   <div className="p-8">
     <Image src={projectImage} className="lg:w-[35rem]" alt="footerImage" />
   </div>
</section>
  )
}

export default Footer