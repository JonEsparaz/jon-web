import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

function Footer() {
  return (
    <div className="FooterContainer">
      <span><a href="https://twitter.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><TwitterIcon className="footer-link" fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#ffffff"}}/></a></span>
      <span><a href="https://github.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><GitHubIcon className="footer-link" fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#ffffff"}}/></a></span>
      <span><a href="https://www.youtube.com/c/JonEsparaz" rel="noopener noreferrer" target="_blank"><YouTubeIcon className="footer-link" fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#ffffff"}}/></a></span>
      <span><a href="https://www.linkedin.com/in/jonathanesparaz/" rel="noopener noreferrer" target="_blank"><LinkedInIcon className="footer-link" fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#ffffff"}}/></a></span>
      <div style={{marginTop:"20px", color:"#ffffff"}}> &copy; {new Date().getFullYear()} Jonathan Esparaz</div>
    </div>
  );
}

export default Footer;
