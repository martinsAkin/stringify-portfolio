import Image, { StaticImageData } from "next/image";
import nextIcon from "../images/arrow-right.png"
import Link from "next/link";

interface FooterProps{
 projectName: string
 projectImage: string | StaticImageData
 projectLink: string
}
interface ButtonProps{
  projectLink: string
}
const Button = ({ projectLink }:ButtonProps) => {
 return(
   <Link href={projectLink}>
     <div className="rounded-4xl pt-3 pb-3 pl-8 pr-8 border-2 border-amber-400 bg-gray-400 w-[15rem] mt-4 md:w-[20rem] font-figtree">
         Next Project <Image className="inline ml-[0.5rem]" src={nextIcon} height={30} width={30} alt="forward icon"/>
     </div>
   </Link>
 )
}

const Footer = ({projectName, projectImage, projectLink}:FooterProps) => {
  return (
   <section className="flex flex-col items-center justify-center md:text-4xl lg:flex lg:flex-row lg:ml-[5rem] lg:mr-[5rem] lg:gap-[2rem]">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="font-brunoAce">NEXT PROJECT</h2>
        <h2 className="font-figtree pl-[5rem] pr-[2rem] md:pl-0">{projectName}</h2>
        <Button projectLink={projectLink}/>
      </div>
      <div className="p-8">
          <Image src={projectImage} className="lg:w-[35rem]" alt="footerImage" />
      </div>
</section>
  )
}

export default Footer