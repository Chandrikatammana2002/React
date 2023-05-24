import "../components/Styles.css";
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";

function Projects() {
  return (
    <div className='project'>
      <div className="project-nav">
        <Navbar/>
      </div>
      <div className="project-content">
        <div className="project1">
          <h2>Real Time Synchronous Code Editor</h2>
          <p>MERN</p>
          <p>This project allows multiple users to collaboratively edit code in real-time. Web Sockets are used for real-time communication. React is used for the front-end and Node.js for back-end implements features such as syntax highlighting, live updates to enhance the user experience. </p>
          <Link to="https://github.com/Chandrikatammana2002/Real-Time-CodeEditor" target="_blank">Code</Link>
        </div>
        <div className="project1">
          <h2>QuizMasterPro</h2>
          <p>HTML CSS JS</p>
          <p>Developed an online quiz application using HTML, CSS, and JavaScript. This Project provides a user-friendly interface for conducting quizzes and managing results.</p>
          <Link to="https://github.com/Chandrikatammana2002/Real-Time-CodeEditor" target="_blank">Code</Link>
        </div>
        <div className="project1">
          <h2>Portfolio</h2>
          <p>React</p>
          <p>Portfolio developed using react. It contains all professional details about me.</p>
          <Link to="https://github.com/Chandrikatammana2002/Real-Time-CodeEditor" target="_blank">Code</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Projects;