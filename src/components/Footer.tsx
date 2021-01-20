import React from 'react';
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
        <img src="/svg/twitter.svg" alt="" className="footer-icon" />
      </a>
      <a
        aria-label="GitHub"
        href="https://github.com/JonEsparaz"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <img src="/svg/github.svg" alt="" className="footer-icon" />
      </a>
      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/jonathanesparaz/"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <img src="/svg/linkedin.svg" alt="" className="footer-icon" />
      </a>
      <a
        aria-label="YouTube"
        href="https://www.youtube.com/c/JonEsparaz"
        rel="noopener noreferrer"
        target="_blank"
        className="footer-link"
      >
        <img src="/svg/youtube.svg" alt="" className="footer-icon" />
      </a>
      <div style={{ marginTop: '20px', color: 'black' }}>
        &copy; {new Date().getFullYear()} Jonathan Esparaz
      </div>
    </div>
  );
}
