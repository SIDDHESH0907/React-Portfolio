import React from "react";
import "./Connect.css";
import { FaGithub , FaLinkedinIn} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <>
    <div className="connect-main">

      <div className="connect-title">FIND ME ON</div>
      <div className="connect-line">Feel free to <span className="text-violet">connect</span> with me</div>
      <div className="connect-icons">
        <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="connect-icon"><FaGithub /></Link>
        <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="connect-icon"><FaLinkedinIn /></Link>
        <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="connect-icon"><AiFillInstagram /></Link>
      </div>
    </div>
    </>
  );
}

export default Connect;
