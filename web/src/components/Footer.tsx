import React from 'react';
import './Footer.scss';

export default function Footer(): JSX.Element {
  const links = [
    {
      label: 'Twitter',
      link: 'https://twitter.com/JonEsparaz',
      icon: '/svg/twitter.svg',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/JonEsparaz',
      icon: '/svg/github.svg',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jonathanesparaz/',
      icon: '/svg/linkedin.svg',
    },
    {
      label: 'YouTube',
      link: 'https://www.youtube.com/c/JonEsparaz',
      icon: '/svg/youtube.svg',
    },
  ];

  return (
    <div className="container mt-5 mb-4 text-center">
      {links.map((item) => {
        return (
          <a
            key={item.label}
            aria-label={item.label}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
            className="footer-link"
          >
            <img src={item.icon} alt="" width={32} height={32} />
          </a>
        );
      })}
      <p className="mt-4">&copy; {new Date().getFullYear()} Jonathan Esparaz</p>
    </div>
  );
}
