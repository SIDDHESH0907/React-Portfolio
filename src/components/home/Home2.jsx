import React from "react";
import "./Home2.css";

function Home2() {
  return (
    <>
      <div className="home2-main">
        <div className="home2-left">
          <div className="left-title">
            <h1>
              LET ME <span className="text-violet">INTRODUCE MYSELF</span>
            </h1>
          </div>
          <div className="left-para">
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in classics like
              <span className="text-violet">HTML, CSS and MySQL.</span>
            </p>
            <p>
              My primary field of interest lies in
              <span className="text-violet">Frontend Development</span>, where I
              apply my skills to craft engaging and user-friendly interfaces.
            </p>
            <p>
              My passion for building products finds expression whenever
              possible, and I channel my expertise into using Java and
              frameworks like <span className="text-violet">React.js</span> and{" "}
              <span className="text-violet">Spring Boot.</span>
            </p>
            <p>
              Excited about contributing to the evolving landscape of web
              technologies and creating impactful products.
            </p>
            <p>🚀 Ready to code the future together! 🚀</p>
          </div>
        </div>
        <div className="home2-right">
          <img className="home2-avatar" src="/assets/avatar.svg" alt="Avatar" />
        </div>
      </div>
    </>
  );
}

export default Home2;
