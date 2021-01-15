import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

export default function Footer(): JSX.Element {
  return (
    <div className="FooterContainer">
      <a
        aria-label="Twitter"
        href="https://twitter.com/JonEsparaz"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <TwitterIcon fontSize="large" style={{ color: 'black' }} />
      </a>
      <a
        aria-label="GitHub"
        href="https://github.com/JonEsparaz"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <GitHubIcon fontSize="large" style={{ color: 'black' }} />
      </a>
      <a
        aria-label="YouTube"
        href="https://www.youtube.com/c/JonEsparaz"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <YouTubeIcon fontSize="large" style={{ color: 'black' }} />
      </a>
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/jonathanesparaz/"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <LinkedInIcon fontSize="large" style={{ color: 'black' }} />
      </a>
      <div style={{ marginTop: '20px', color: 'black' }}>
        {' '}
        &copy; {new Date().getFullYear()} Jonathan Esparaz
      </div>
    </div>
  );
}
