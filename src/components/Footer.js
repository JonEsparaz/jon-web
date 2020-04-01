import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="FooterContainer">
      <span><a href="https://twitter.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="/twitter.svg" alt="Twitter Logo" /></a></span>
      <span><a href="https://github.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="/github.png" alt="GitHub Logo" /></a></span>
      <span><a href="https://www.youtube.com/c/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="/youtube.svg" alt="YouTube Logo" /></a></span>
      <span><a href="https://www.linkedin.com/in/jonathanesparaz/" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="/linkedin-256.png" alt="LinkedIn Logo" /></a></span>
      <p> &copy; {new Date().getFullYear()} Jonathan Esparaz</p>
    </div>
  );
}

export default Footer;
