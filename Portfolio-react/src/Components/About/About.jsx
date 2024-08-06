import React from "react";
import "./About.css";
//import theme_pattern from "../../assets/about-wave.png";
import theme_pattern from "../../assets/theme_pattern.svg";

import profile_img from "../../assets/Logo.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Welcome to my portfolio! I am a seasoned web developer
              specializing in .NET development. With years of experience
              creating robust, scalable, and user-friendly web applications, I
              bring a comprehensive skill set to every project. My expertise
              spans front-end and back-end development, allowing me to build
              dynamic, responsive websites that meet the highest standards of
              performance and usability.
            </p>
            <p>
              Participated in code reviews and provided feedback on coding
              standards and best practices. Collaborated with team members to
              analyze requirements, design solutions, and implement features.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Web Design</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Email Marketing</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>.Net Core</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
