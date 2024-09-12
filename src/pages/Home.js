import React, { useEffect, useState } from "react";
import "./Home.css";
import dummy_profile from "./../assest/images/mineImage.jpg";
import dsLogo from "./../assest/logo/ds.png";
import gitLogo from "./../assest/logo/git.png";
import javaLogo from "./../assest/logo/javaLogo.webp";
import pythonLogo from "./../assest/logo/python.png";
import springLogo from "./../assest/logo/spring.png";
import htmlLogo from "./../assest/logo/html.png";
import { BsJustify } from "react-icons/bs";

const Home = () => {
  const userName = "Keyur Mistry";

  const items = [
    { name: "Java", dis: javaLogo },
    { name: "Python", dis: pythonLogo },
    { name: "Data Structure & Algorithm", dis: dsLogo },
    { name: "Spring Boot", dis: springLogo },
    { name: "Git", dis: gitLogo },
    { name: "HTML", dis: htmlLogo },
  ];

  useEffect(() => {
    return () => {
      document.title = "Home - Keyur's Portfolio"; // Reset the title when component unmounts
    };
  }, []);

  const onItemClicked = (name) => {
    alert(`Item ${name} clicked!`);
    setIsBlurred((prevState) => !prevState); // Toggle blur state on click
  };

  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <div className="home-container">
      <div className="intro-container">
        <h1>Welcome 🎉</h1>
        <h2>Hi, I'm {userName} !</h2>
        <h3> Software Developer 👨🏻‍💻</h3>

        <p>
          I’m a dedicated Software Developer with a passion for exploring new
          technologies and solving complex problems. Over the years, I've honed
          my skills in various programming languages and frameworks,
          continuously striving to deliver high-quality software solutions.
        </p>
      </div>
      <div className="profile-container">
        <div className="image-container">
          <img src={dummy_profile} className="random-shape-image" />
        </div>
      </div>

      <div className="skill-set-container">
        <p>
          <h4>List of Skills</h4>
        </p>
        {items.map((item) => (
          <div
            class="{`overlay ${isBlurred ? 'blur' : ''}`}"
            key={item.name}
            onClick={() => onItemClicked(item.name)}
          >
            <img src={item.dis} className="item" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
