import React, { useEffect, useState } from "react";
import "./Home.css";
import dummy_profile from "./../assest/images/mineImage.jpg";
import dsLogo from "./../assest/logo/ds.png";
import gitLogo from "./../assest/logo/git.png";
import javaLogo from "./../assest/logo/javaLogo.webp";
import pythonLogo from "./../assest/logo/python.png";
import springLogo from "./../assest/logo/spring.png";
import htmlLogo from "./../assest/logo/html.png";
import intellijLogo from "./../assest/tools/intellij.png";
import vscodeLogo from "./../assest/tools/vscode.png";
import postmanLogo from "./../assest/tools/postmanLogo.png";

const Home = () => {
  const userName = "Keyur Mistry";

  const items = [
    { name: "Java", dis: javaLogo, level: "Advanced" },
    { name: "Python", dis: pythonLogo, level: "Intermediate" },
    { name: "Data Structures & Algorithms", dis: dsLogo, level: "Advanced" },
    { name: "Spring Boot", dis: springLogo, level: "Intermediate" },
    // { name: "Git", dis: gitLogo, level: "Intermediate" },
    { name: "HTML", dis: htmlLogo, level: "Advanced" },
  ];

  const tools = [
    {
      name: "Git",
      logo: gitLogo,
      use: "Version Control",
    },
    {
      name: "IntelliJ IDEA",
      logo: intellijLogo,
      use: "Java Development",
    },
    {
      name: "VS Code",
      logo: vscodeLogo,
      use: "Frontend & Scripting",
    },
    {
      name: "Postman",
      logo: postmanLogo,
      use: "API Testing",
    },
  ];

  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    document.title = "Home - Keyur's Portfolio";
  }, []);

  // const toggleBlur = () => setIsBlurred(!isBlurred);

  return (
    <div className="home-container">
      {/* Intro */}
      <section className="intro-container">
        <h1>Welcome 🎉</h1>
        <h2>
          Hi, I'm <span className="highlight">{userName}</span>!
        </h2>
        <h3>Full-Stack Software Developer 👨🏻‍💻</h3>
        <p>
          I'm a passionate developer who thrives on building robust backend
          systems and clean, scalable frontends. I love combining logical
          problem-solving with UI creativity to deliver high-impact digital
          products.
        </p>
        <p>
          With hands-on experience in enterprise-level applications, REST APIs,
          and modern web technologies, I aim to bring value by building
          performance-optimized and maintainable solutions.
        </p>
        {/* <button className="blur-toggle-btn" onClick={toggleBlur}>
          {isBlurred ? "Remove Blur" : "Blur Skills"}
        </button> */}
      </section>

      {/* Profile Image */}
      <section className="profile-container">
        <img src={dummy_profile} alt="Profile" className="profile-image" />
      </section>

      {/* Skills */}
      <section className="skill-set-container">
        <h4>Tech Stack</h4>
        <div className="skills-grid">
          {items.map((item) => (
            <div
              className={`skill-card ${isBlurred ? "blur" : ""}`}
              key={item.name}
              onClick={() => console.log(`${item.name} clicked!`)}
            >
              <img src={item.dis} alt={item.name} className="skill-icon" />
              <p>{item.name}</p>
              <span className="level-badge">{item.level}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Tools Section */}
      <section className="tools-container">
        <h4>Tools & IDEs</h4>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <img src={tool.logo} alt={tool.name} className="tool-icon" />
              <p>{tool.name}</p>
              <span className="tool-use">{tool.use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="footer-container">
        <p>Looking to collaborate or hire?</p>
        <a href="/Keyur_Mistry_Resume.pdf" className="resume-btn" download>
          Download Resume
        </a>
      </footer>
    </div>
  );
};

export default Home;
