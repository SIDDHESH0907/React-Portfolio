import React from "react";
import "./ToolStack.css";
import { FaWindows } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSpring } from "react-icons/si";

const iconsArray = [
<FaWindows />,
<SiVisualstudiocode />,
<SiPostman />,
<SiSpring />
];

function ToolStack() {
  return (
    <>
      <div className="toolstack-main">
        <div className="toolstack-title"><span className="text-violet">Tools</span> I use</div>
        <div className="toolstack-icons">
          {iconsArray.map((icon, index) => (
            <div key={index} className="toolstack-icon">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToolStack;