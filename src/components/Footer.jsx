import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

function Footer() {
  return (
    <div className="FooterContainer">
      <span><a href="https://twitter.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><TwitterIcon fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#212529"}}/></a></span>
      <span><a href="https://github.com/JonEsparaz" rel="noopener noreferrer" target="_blank"><GitHubIcon fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#212529"}}/></a></span>
      <span><a href="https://www.youtube.com/c/JonEsparaz" rel="noopener noreferrer" target="_blank"><YouTubeIcon fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#212529"}}/></a></span>
      <span><a href="https://www.linkedin.com/in/jonathanesparaz/" rel="noopener noreferrer" target="_blank"><LinkedInIcon fontSize="large" style={{ marginRight: "1.5vw", marginLeft: "1.5vw", color: "#212529"}}/></a></span>
      <p style={{marginTop:"20px"}}> &copy; {new Date().getFullYear()} Jonathan Esparaz</p>
    </div>
  );
}

export default Footer;
