import React from "react";
import "./Home.css";

const Home = () => {
  const userName = "Keyur Mistry";
  return (
    <div className="HomeClass">
      <h1>Welcome</h1>
      <h2>Hi, I'm {userName} !</h2>
      <p>
        I’m a dedicated Software Developer with a passion for exploring new
        technologies and solving complex problems. Over the years, I've honed my
        skills in various programming languages and frameworks, continuously
        striving to deliver high-quality software solutions.
      </p>
    </div>
  );
};

export default Home;
