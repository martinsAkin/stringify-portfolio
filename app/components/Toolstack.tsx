
"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Figma from "../images/figma.png"
import SurveyMonkey from "../images/tools2.png"
import GoogleMeet from "../images/tools3.png"
import Trello from "../images/tools4.png"
import Miro from "../images/tools5.png"
import Spline from "../images/tools6.png"
import Goodnotes from "../images/tools7.png"
import UseBerry from "../images/tools8.png"
import GoogleAnalytics from "../images/tools9.png"

interface ToolProps {
  image: string | StaticImageData;
  border?: string;
  name: string;
}


const ToolStack = ({ tools }: { tools: ToolProps[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const topRowTools = tools.slice(0, 6);
  const bottomRowTools = tools.slice(6);

  return (
    <div className="toolstack-container w-[20rem]">
      <div className="top-row flex gap-4 mb-2">
        {topRowTools.map((tool, index) => (
          <div
            key={index}
            className="tool"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div className="tooltip">{tool.name}</div>
            )}
            <Image src={tool.image} alt={tool.name} className="tool-image w-[2.5rem]" />
          </div>
        ))}
      </div>
      <div className="bottom-row flex gap-4">
        {bottomRowTools.map((tool, index) => (
          <div
            key={index}
            className="tool"
            onMouseEnter={() => setHoveredIndex(index + 6)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index + 6 && (
              <div className="tooltip bg-black">{tool.name}</div>
            )}
            <Image src={tool.image} alt={tool.name} className="tool-image w-[2.5rem]" />
          </div>
        ))}
      </div>
    </div>
  );
};


const ToolStackPage = () => {
  const tools = [
    { name: "Figma", image: Figma, border: "" },
    { name: "SurveyMonkey", image: SurveyMonkey, border: "linear-gradient(...)" },
    { name: "Google Meet", image: GoogleMeet, border: "linear-gradient(...)" },
    { name: "Trello", image: Trello, border: "linear-gradient(...)" },
    { name: "Miro", image: Miro, border: "" },
    { name: "Spline", image: Spline, border: "" },
    { name: "Goodnotes", image: Goodnotes, border: "linear-gradient(...)" },
    { name: "Useberry", image: UseBerry, border: "linear-gradient(...)" },
    { name: "Google Analytics", image: GoogleAnalytics, border: "linear-gradient(...)" },
  ];

  return (
    <div className="flex items-center justify-center bg-[#0D0D0D] w-[23rem] md:w-[90%] rounded-[1.5rem] p-4">
      <ToolStack tools={tools} />
    </div>
  );
};

export default ToolStackPage;
