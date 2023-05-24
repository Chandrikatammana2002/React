import React from 'react';
import "./Styles.css";
import { Typewriter } from 'react-simple-typewriter';
import javaimg from "../img/javaimg.png";
import pyt from "../img/pyt.webp";
import code from "../img/code.png";
import reactimg from "../img/reactimg.png";
import sql from "../img/sql.png";
import htcs from "../img/htcs.png";
import js from "../img/js.png";
function Content() {
  return (
    <div className="container">
        <div className='container1'>
            <div className="intro">
                <h1>HELLO<span className='emoji'>👋</span></h1>
                <span style={{ color: 'white', fontSize: '35px' }}>
                
                  I am&nbsp;
                  <Typewriter
                    words={['Chandrika Tammana','Student 🎓','Web Developer 🌐','Software Developer 💻']}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            </div>
            <a href="https://drive.google.com/file/d/14tibyMioiX2bWzku0IL7s6elAYvVkF-D/view?usp=drivesdk"  className='res' download={true}>Resume</a>
            
            <div className='container2' id='skills'>
              <h2>SKILLS</h2>
              <div class="image-container">
                <div class="image-wrapper">
                  <img src={javaimg} alt='java' width={150}/>
                </div>
                <span class="image-name">JAVA PROGRAMMING</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='py' src={pyt} alt='java' width={60}/>
                </div>
                <span class="image-name">PYTHON PROGRAMMING</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='co' src={code} alt='coding' width={90}/>
                </div>
                <span class="image-name">CODING</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='re' src={reactimg} alt='java' width={60}/>
                </div>
                <span class="image-name">REACT</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='sq' src={sql} alt='java' width={90}/>
                </div>
                <span class="image-name">SQL</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='ht' src={htcs} alt='java' width={80}/>
                </div>
                <span class="image-name">HTML & CSS</span>
                
              </div>
              <div class="image-container">
                <div class="image-wrapper">
                  <img id='js' src={js} alt='java' width={60}/>
                </div>
                <span class="image-name">JAVA SCRIPT</span>
                
              </div>
            </div>
        </div>
     
    </div>
    
  )
}

export default Content