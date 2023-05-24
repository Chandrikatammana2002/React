import "./Styles.css"
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Navbar(){
    return(
        <div className="header">
            <Link to="/">
                <h2 className='t'>
                    Chandrika
                </h2>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <HashLink to="/#skills">Skills</HashLink>
                </li>
                
                <li>
                    <Link to="contact">Contact</Link>
                    
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                
                
            </ul>
            
        </div>
    )

}
export default Navbar;