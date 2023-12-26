import React from "react";
import "./Resume.css";
import { PiDownloadSimpleFill } from "react-icons/pi";

function Resume() {
  return (
    <>
      <div className="resume-main">
        <div className="resume-download">
          <PiDownloadSimpleFill />&nbsp;Download CV
        </div>
        <div className="resume-image">
          <img src="/assets/Siddhesh Gaonkar.jpg" alt="" />
        </div>
        <div className="resume-download">
          <PiDownloadSimpleFill />&nbsp;Download CV
        </div>
      </div>
    </>
  );
}

export default Resume;
