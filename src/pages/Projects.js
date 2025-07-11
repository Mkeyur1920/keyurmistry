import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isNullList, setIsNullList] = useState(false);

  const projectList = [
    {
      title: "Driver Mileage Tracker",
      description:
        "Mobile-first app for logging daily vehicle kilometers with image uploads and analytics. Built for field drivers to streamline monthly reporting.",
      techStack: ["React Native", "Java", "Postgres", "Spring Boot"],
      github: "https://github.com/Mkeyur1920/DriverMileageTracker.git",
      demo: "https://driver-mileage-tracker-app.vercel.app/auth/login", // optional live demo link
    },
    {
      title: "Real-time Attendance Tracker",
      description:
        "One-click attendance system using facial recognition powered by YOLOv8. Web frontend with Angular, backend in Java + Python integration.",
      techStack: ["Angular", "YOLOv8", "Java", "Python"],
      github: "https://github.com/Mkeyur1920/LiveAttendanceCallSystem.git",
      demo: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase my skills, tools, and projects with smooth animations and modular React components.",
      techStack: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/Mkeyur1910/keyurmistry.git",
      demo: "https://keyurmistry.vercel.app",
    },
  ];

  useEffect(() => {
    document.title = "Projects - Keyur's Portfolio";
    setIsNullList(projectList.length === 0); // ✅ validate list

    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="projects-container">
      <div className="loading-container">
        {showMessage && isNullList && (
          <h1 className="loading-text fade-in">
            🚧 Page is under construction... Stay tuned! ⚒️
          </h1>
        )}
      </div>
      <div className="loading-container">
        {showMessage && (
          <h1 className="loading-text fade-in">
            🚧 Projects... Stay tuned! ⚒️
          </h1>
        )}
      </div>

      <div className="projects-grid">
        {!isNullList &&
          projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
