import Link from "next/link";

interface NavBtnProps{
  location: string;
}
const NavBtn = ({location}: NavBtnProps) => {
  return(
    <>
        <button className="border-0 rounded-[20px] p-[1rem] bg-teal-600 text-white font-brunoAce">{location}</button>
    </>
  )
}
export default function Home() {
  return (
    <div className="h-[100dvh] flex justify-center" style={{backgroundImage: "url('/background/shiny-background.png')"}}>

        <div className="flex gap-[2.5rem] flex-col mt-[10rem]">
          <Link href="/tantalizer">
            <NavBtn location='Visit Tantalizer Page'/>
          </Link>
          <Link href="/myQura">
            <NavBtn location="Visit MyQura Page" />
          </Link>
          <Link href="/rock-realty">
          <NavBtn location="Visit Rock Realty Page" />
          </Link>
          <Link href="/kwats">
          <NavBtn location="Visit Kwats delivery Page" />
          </Link>
        </div>

        
    </div>
  );
}
