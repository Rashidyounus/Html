import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            I am a frontend developer from, Pakistan with 2 years of experience
            in companies like s.abdullahome and Softech.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2024 Rashid. All rights</p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy policy</p>
          <p>Connect</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
