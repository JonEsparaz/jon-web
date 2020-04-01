import React, { Component } from 'react';

function Footer() {
  return (
    <div className="FooterContainer">
      <span><a href="https://twitter.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="twitter.png" alt="Twitter Logo" /></a></span>
      <span><a href="https://github.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="github.png" alt="GitHub Logo" /></a></span>
      <span><a href="https://www.youtube.com/c/JonEsparaz" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="youtube.png" alt="YouTube Logo" /></a></span>
      <span><a href="https://www.linkedin.com/in/jonathanesparaz/" rel="noopener noreferrer" target="_blank"><img className="FooterSocialImg" style={{ marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw", height: "30px"}} src="linkedin.png" alt="LinkedIn Logo" /></a></span>

    </div>
  );
}

export default Footer;
