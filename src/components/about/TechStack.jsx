import React from "react";
import "./TechStack.css";
import {
  SiHtml5,
  SiSpringboot,
  SiGit,
  SiReact,
  SiCss3,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const iconsArray = [
  <SiHtml5 />,
  <SiCss3 />,
  <SiMysql />,
  <SiJavascript />,
  <FaJava />,
  <SiSpringboot />,
  <SiReact />,
  <SiGit />,
];

function TechStack() {
  return (
    <>
      <div className="techstack-main">
        <div className="techstack-title">
          Professional <span className="text-violet">Skillset</span>
        </div>
        <div className="techstack-icons">
          {iconsArray.map((icon, index) => (
            <div key={index} className="techstack-icon">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
