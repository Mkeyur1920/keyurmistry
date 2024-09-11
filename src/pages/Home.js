import React from "react";
import "./Home.css";
import dummy_profile from "./../assest/images/mineImage.jpg";

const Home = () => {
  const userName = "Keyur Mistry";

  return (
    <div class="home-container">
      <div class="intro-class">
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
      <div className="profile-picture-class">
        <div class="image-container">
          <img src={dummy_profile} class="random-shape-image" />
        </div>
      </div>

      <div className="skill-set-container">
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <h3>HTML</h3>
              <div class="progress-bar">
                <div class="progress" styles="width: 90%;"></div>
              </div>
            </li>
            <li>
              <h3>CSS</h3>
              <div class="progress-bar">
                <div class="progress" styles="width: 50%;"></div>
              </div>
            </li>
            <li>
              <h3>Java</h3>
              <div class="progress-bar">
                <div class="progress" styles="width: 85%;"></div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
