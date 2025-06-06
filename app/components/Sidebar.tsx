"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import styles from "./SlideBar.module.css";
import userIcon from "../images/user.png"
import homeIcon from "../images/home.png"
import monitorIcon from "../images/monitor.png"
import copyIcon from "../images/copy.png"
import LAJ from "../images/LAJ_logo.png"
import Link from "next/link";
import { useState } from "react";

export function MenuIcon(){
    const [dropDown, setDropdown] = useState(false)

    const toggleDropdown = () => {
      setDropdown(!dropDown)
      // alert("hi!")
    }

  return(
    <div className="absolute z-50 right-4 top-2">
          <div onClick={toggleDropdown} className="md:hidden lg:hidden cursor-pointer">
            <IoMenu size={50}/>
          </div>

          {dropDown && (
            <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded p-4 w-[10rem] md:hidden lg:hidden">
            <ol className="flex flex-col gap-2">
                <li>
                   <Link href="/homepage">HOMEPAGE</Link>
                </li>
                <li>
                   <Link href="/about-me">ABOUT ME</Link>
                </li>
                <li>
                   <Link href="/projects">PROJECTS</Link>
                </li>
            </ol>
          </div> )
          }
    </div>
  )
}

const Sidebar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { icon: homeIcon, label: "Home", path: "./homepage" },
    { icon:  userIcon, label: "About", path: "./about-me" },
    { icon: monitorIcon, label: "Projects", path: "./projects" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  // Find the home path
  const homePath =
    navItems.find((item) => item.label === "Home")?.path || "./hero-section";

  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>

      {/* Clickable Logo */}
      <div
        className={styles.logo}
        onClick={() => router.push(homePath)}
        style={{ cursor: "pointer" }}
      >
        <Image src={LAJ} alt="Logo" width={45} height={45} />
      </div>

      {/* Navigation icons */}
      <div className={styles.icons}>
        <Link href='/homepage'>
          <Image src={homeIcon} alt="icon" title="Home"/>
        </Link>
        <Link href='/about-me'>
          <Image src={userIcon} alt="icon" title="About"/>
        </Link>
        <Link href='/projects'>
          <Image src={monitorIcon} alt="icon" title="Projects"/>
        </Link>
      </div>

      {/* Copy button */}
      <div className={`${styles.icons} ${styles.copyContainer}`}>
        <div
          className={styles.iconWrapper}
          onClick={handleCopy}
          style={{ cursor: "pointer" }}
        >
          <Link href="">
            <Image src={copyIcon} alt="icon"/>
          </Link>
          <span className={styles.tooltip}>Copy URL</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
