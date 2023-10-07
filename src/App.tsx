import "./App.css";
import { ReactComponent as Twitter } from "./svg/twitter.svg";
import { ReactComponent as GitHub } from "./svg/github.svg";
import { ReactComponent as LinkedIn } from "./svg/linkedin.svg";
import { ReactComponent as YouTube } from "./svg/youtube.svg";

const LINKS = [
  {
    label: "Twitter",
    link: "https://twitter.com/JonEsparaz",
    Icon: Twitter,
  },
  {
    label: "GitHub",
    link: "https://github.com/JonEsparaz",
    Icon: GitHub,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathanesparaz/",
    Icon: LinkedIn,
  },
  {
    label: "YouTube",
    link: "https://www.youtube.com/c/JonEsparaz",
    Icon: YouTube,
  },
] as const;

export const App = () => {
  return (
    <>
      <div className="content-container">
        <div className="content">
          <h1 data-testid="header">Jon Esparaz</h1>
          <hr className="accent-bar" data-testid="accent-bar" />
          <div className="tagline-container" data-testid="tagline">
            <p>Software Developer @ Vena</p>
            <p>x</p>
            <p>Engineering Science @ U of T</p>
          </div>
          <div className="links-container">
            {LINKS.map(({ Icon, label, link }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                rel="noopener noreferrer"
                target="_blank"
                className="link-icon"
                data-testid="link"
              >
                <Icon width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        data-testid="image"
        className="hero-image"
        src="/images/keyboard.jpg"
        srcSet="/images/keyboard-720.jpg 720w, /images/keyboard-1080.jpg 1080w, /images/keyboard-1921.jpg 1921w, /images/keyboard.jpg 2870w"
        sizes="(min-width: 768px) 100vw, 50vw"
        alt="A mechanical keyboard on a desk."
      />
    </>
  );
};
