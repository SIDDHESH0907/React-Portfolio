import React from "react";
import "./Home.css";
import Home2 from "./Home2";
import Connect from "./Connect";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="left">
          <div className="up-left">
            <p>Hi There!</p>
            <p>
              I'M <span className="text-violet">SIDDHESH GAONKAR</span>
            </p>
          </div>
          <div className="down-left">
            <p className="text-violet">Frontend Developer</p>
          </div>
        </div>
        <div className="right">
          <img className="right-image" src="/assets/home-main.svg" alt="" />
        </div>
      </div>
      <Home2 />
      <Connect />
    </>
  );
}

export default Home;
