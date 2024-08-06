import React from "react";
import "./Hero.css";
// import profile_img from "../../assets/Profile-about.png";
import profile_img from "../../assets/Profile_image.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={profile_img} alt="" /> */}
      <h1>
        <span>I'm Rashid Mahmood</span>, Web developer based in Pakistan
      </h1>
      <p>
        As a .net developer with 2 years of experience in companies like
        s.abdullahome and softech. Email Marketing as well as in Curve Digital
        Solutions
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
