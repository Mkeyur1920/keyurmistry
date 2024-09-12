import React, { useEffect } from "react";
import "./About.css";
import { SocialIcon } from "react-social-icons";
import { DiJava, DiPython } from "react-icons/di";

const About = () => {
  useEffect(() => {
    return () => {
      document.title = "About - Keyur's Portfolio"; // Reset the title when component unmounts
    };
  }, []);
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
          <h3>
            Python <DiPython />
          </h3>
          {/* <h3>
            Python <img src={pythonLogo} alt="Python" />
          </h3> */}
          <p>
            Python taught me the power of simplicity and readability in code.
            It’s my go-to language for quick scripting, data analysis, and
            automation.
          </p>
        </div>

        <div className="skill-item">
          <h3>
            Java <DiJava />
          </h3>

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
      <div className="social-media-section">
        <h2>Connect with Me</h2>
        <p>Feel free to connect with me on my social media accounts:</p>
        <div class="social-links">
          <div>
            <SocialIcon
              url="www.linkedin.com"
              aria-label="Keyur's LinkedIn"
              href="https://www.linkedin.com/in/keyurmistry19"
            />
          </div>
          <div>
            <SocialIcon
              url="www.twitter.com"
              aria-label="Keyur's Twitter"
              href="https://www.twitter.com/_keyurmistry"
            />
          </div>
          <div>
            <SocialIcon
              url="www.github.com"
              aria-label="Keyur's Git hub"
              href="https://www.github.com/Mkeyur1920"
            />
          </div>
          <div>
            <SocialIcon
              url="www.email.com"
              label="Send Me Email"
              href="keyurmistry19@gmail.com"
            />
          </div>
          <div>
            <SocialIcon
              url="www.whatsapp.com"
              aria-label="Keyur's Git hub"
              label="1234567555"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
