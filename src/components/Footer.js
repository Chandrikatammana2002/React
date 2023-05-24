import React from "react";
import "./Styles.css";
import {Link } from "react-router-dom";
import linked from "../img/linked.jpeg";
import git from "../img/git.jpeg";
import inst from "../img/inst.jpeg";
function Footer() {

  return (
    <div className='foot'>
      <div className="footer-container">
      <h3 style={{color:"white",fontFamily:'sans-serif'}} id="foot">Reach me out on the these platforms</h3>
         <br/><br/>
        <div className="symbols">

        <Link to="https://github.com/Chandrikatammana2002/" target="_blank"><img width="30px" height="30px" src={git} alt="git"/></Link>
        <Link to="linkedin.com/in/tammana-chandrika-267321215" target="_blank"><img width="30px" height="30px" src={linked} alt="link"/></Link>
        <Link to="https://www.instagram.com/chandrika_tammana/" target="_blank"><img width="30px" height="30px" src={inst} alt="inst"/></Link>

        </div>
      </div>
    </div>
  )
}
export default Footer;
