import React from "react";
import "./AboutCard.css";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <>
      <div className="aboutcard-main">
        <div className="aboutcard-left">
          <div className="aboutcard-title">
            Know Who <span className="text-violet">I'M</span>
          </div>
          <p className="aboutcard-para">
            Hi Everyone, I am <span className="text-violet">Siddhesh Gaonkar</span> from <span className="text-violet">Navi Mumbai, India.</span>
          </p>
          <p className="aboutcard-para">
            I am a fresher in the field of frontend development, eagerly seeking
            opportunities to apply and expand my skills.
          </p>
          <p className="aboutcard-para">
            I hold a degree in BSc-IT and am currently enrolled in a Full Stack
            Web Development course at IT-Vedant Institute.
          </p>

          <p className="aboutcard-para1">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="aboutcard-list">
            <li>
              <FaHandPointRight /> Playing Games
            </li>
            <li>
              <FaHandPointRight /> Travelling
            </li>
            <li>
              <FaHandPointRight /> Car Enthusiast
            </li>
          </ul>
        </div>
        <div className="aboutcard-right">
          <img className="aboutcard-image" src="/assets/about.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default AboutCard;
