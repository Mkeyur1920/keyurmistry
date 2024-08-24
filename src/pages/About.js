import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="AboutClass">
      <h1>About Me</h1>

      <p>
        Endeavoring Software Engineer | Work goal to give comprehensible
        services or product to world | Tyro in Google Cloud | PYTHON | JAVA .
        Data Structure | KOTLIN | Angular | #breakdown
      </p>

      <div className="skills">
        <div className="skill-item">
          <h2>Coding Languages</h2>
          <img src="./../assets//python_logo.jpg" alt="Python" />

          <h3>Python</h3>

          <p>
            Python taught me the power of simplicity and readability in code.
            It’s my go-to language for quick scripting, data analysis, and
            automation.
          </p>
        </div>

        <div className="skill-item">
          <h3>Java</h3>
          <p>
            Java helped me understand the importance of object-oriented design
            and scalability in large-scale applications.
          </p>
        </div>

        <div className="skill-item">
          <h3>Kotlin</h3>
          <p>
            Kotlin brought me a modern and concise approach to Android
            development, making my mobile applications more efficient and
            enjoyable to build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
