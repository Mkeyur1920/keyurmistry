import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    document.title = "Projects - Keyur's Portfolio"; // Reset the title when component unmounts

    // Trigger the message to show after a delay
    setTimeout(() => {
      setShowMessage(true);
    }, 500); // Adjust delay as needed (500ms here)
  }, []);

  return (
    <div className="PojectsClass">
      <div className="loading-container">
        {showMessage && (
          <h1 className="loading-text">
            Page is working... Stay tuned with me ! :) ⚒️
          </h1>
        )}
      </div>
      {/* <h1>My Projects</h1>
      <p>Page on working...::) stay tune with me !!</p> */}
      {/* <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul> */}
    </div>
  );
};

export default Projects;
