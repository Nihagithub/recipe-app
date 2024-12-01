import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© Nihrika 2024. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
