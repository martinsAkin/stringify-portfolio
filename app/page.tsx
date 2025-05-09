import Link from "next/link";

interface NavBtnProps{
  location: string;
}
const NavBtn = ({location}: NavBtnProps) => {
  return(
    <>
        <button className="border-0 rounded-[20px] p-[1rem] bg-teal-600 text-amber-400 hover:bg-amber-400 hover:text-teal-600">{location}</button>
    </>
  )
}
export default function Home() {
  return (
    <div className="h-[100dvh] pt-[10rem] pl-[5rem] flex gap-[2.5rem] flex-col">

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
  );
}
