import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Content from "../components/Content";
import Footer from "../components/Footer";
function Home(){
    return(
        <div>
            <Navbar/>
            <br/><br/>
            <Content/>
            <br/><br/>
            
            <Footer/>
        </div>
    )

}
export default Home;