"use client";
import styles from './AboutMeCard.module.css';
import { Bruno_Ace } from 'next/font/google';

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const AboutMe: React.FC = () => {
  return (
    <div className="w-[115%] md:w-[97%] h-auto p-4 mt-[1.5rem] ml-0 lg:max-w-[400px] m-auto bg-[#1a1a1a] border-[#9e9e93] rounded-[20px] shadow-gray-800 lg:z-[1] lg:mt-[-7rem] lg:ml-[1rem] row-span-2]">
      <h2 className={`${styles.heading} ${brunoAce.className}`}>
        ABOUT ME
      </h2>
      <p className={styles.text}>
        Product design is more than a career; it&apos;s the result of a lifelong passion for exploration.
        <span className={styles.subText}>
          From building WordPress sites and blogging as a teen, I&apos;ve always been drawn to creating and problem-solving.
          Post-graduation, I tried data analytics and affiliate marketing, drawn by my math skills and their appeal respectively.
        </span>
        Though I found enjoyment and some success, neither provided the meaningful impact I sought.
      </p>
      <p className={styles.section}>
        Driven by a strong desire to create meaningful impact, I spent considerable time searching for the right fit.
        <span className={styles.highlight}>
          The turning point came with my mentor, Alex Oyebade, who suggested I investigate UX writing.
        </span>
        This sparked profound interest, leading me to discover the powerful potential of
        <span className={styles.highlight}>
          product design in solving complex user and business problems.
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
