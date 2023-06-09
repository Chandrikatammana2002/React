import React from "react";
function Navbar(){
    return(
        <div>
            
                
        
            <nav className="navbar">
                   
                   <div className="nav-title">
                       <a href="/"> Chandrika </a>
                     
                     </div>
                   
                
                   <div>
                   </div>
                   <div>

                   </div>
                
                <input type="checkbox" id="hamburger"/>
                <div className="hamburgerMenu">
                    <label for="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>

                <div className="links">
                    <a href="/"> Home </a>
                    <a href="/#skills"> Skills </a>
                    <a href="/project"> Projects </a>
                    <a href="/contact"> Contact</a>
                    <a href="/about">About </a>
                
                </div>
            </nav>
        </div>

    )
}

export default Navbar;