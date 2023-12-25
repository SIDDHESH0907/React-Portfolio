import React from 'react'
import './Footer.css'
import { FaGithub , FaLinkedinIn} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="footer-main">
        <div className="footer-left">
            <p>Designed and Developed by Siddhesh Gaonkar</p>
        </div>
        <div className="footer-mid">Copyright ©2024 SG</div>
        <div className="footer-right">
            <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="footer-icon"><FaGithub /></Link>
            <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="footer-icon"><FaLinkedinIn /></Link>
            <Link to={"https://react-icons.github.io/react-icons/search/#q=github"} target="_blank" className="footer-icon"><AiFillInstagram /></Link>
        </div>
    </div>
    </>
  )
}

export default Footer