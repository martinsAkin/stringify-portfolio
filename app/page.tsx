"use client"
import Link from "next/link";
import Homepage from "./components/Homepage";

// interface NavBtnProps{
//   location: string;
// }
// const NavBtn = ({location}: NavBtnProps) => {
//   return(
//     <>
//         <button className="border-0 rounded-[20px] p-[1rem] bg-teal-600 text-white font-brunoAce">{location}</button>
//     </>
//   )
// }
export default function Home() {
  return (
    <div>
        <Homepage />
    </div>
  );
}
