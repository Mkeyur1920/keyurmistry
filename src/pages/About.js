import React, { useEffect } from "react";
import "./About.css";
import { SocialIcon } from "react-social-icons";

const About = () => {
  useEffect(() => {
    document.title = "About - Keyur Portfolio";
  }, []);

  return (
    <div className="about-container">
      <h1 className="section-title">🙋‍♂️ About Me</h1>

      <div className="about-intro fade-in">
        <p>
          I'm <strong>Keyur Mistry</strong>, a passionate software developer
          enthusiastic about building scalable backend systems and clean, modern
          frontend interfaces. My journey revolves around solving real-world
          problems with logical precision and creative flair.
        </p>
        <p>
          I enjoy working with modern tools and tech—whether it's building APIs
          in Java, writing Python scripts, exploring Android with Kotlin, or
          deploying on cloud platforms.
        </p>
      </div>

      <h2 className="section-title">📲 Connect with Me</h2>
      <p className="connect-text">
        I’d love to network, collaborate or simply have a tech chat. Reach out!
      </p>

      <div className="social-links">
        <SocialIcon
          url="https://www.linkedin.com/in/keyurmistry19"
          aria-label="LinkedIn"
          target="_blank"
        />
        <SocialIcon
          url="https://www.twitter.com/_keyurmistry"
          aria-label="Twitter"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/Mkeyur1920"
          aria-label="GitHub"
          target="_blank"
        />
        <SocialIcon
          url="mailto:keyurmistry19@gmail.com"
          aria-label="Email"
          network="email"
        />
        <SocialIcon
          url="https://wa.me/9586379555" // ✅ Replace with actual number
          aria-label="WhatsApp"
          network="whatsapp"
        />
      </div>
    </div>
  );
};

export default About;
