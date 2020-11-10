import React, { useEffect, createRef, useState } from 'react';
import './Home.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

function Home() {
  const [showButton, setShowButton] = useState(false);
  const aboutRef = createRef<HTMLDivElement>();

  const handleResize = () => {
    const h = window.innerHeight;
    const w = window.innerWidth;
    if (w / h <= 1.6 && w >= 768) setShowButton(false);
    else setShowButton(true);
  };

  useEffect(() => {
    smoothscroll.polyfill();
    handleResize();
  }, []);

  useEffect(() => {
    const cleanUp = window.addEventListener('resize', () => {
      handleResize();
    });
    return () => cleanUp;
  });

  const scroll = () => {
    aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Home">
      <Menu mode="light" absolute />
      <div className="HomePage">
        <div className="ContentContainer">
          <h1 className="Header1 White NameHeader">Jon Esparaz</h1>
          <div className="AccentBar" />
          <div className="Text1 White">
            Engineering Science | University of Toronto
          </div>
          {showButton ? (
            <button className="ActionButton" onClick={scroll}>
              <span className="Underline">About Me</span>
            </button>
          ) : null}
        </div>
        <img
          className="HeroImage"
          src="https://d3posj7vfpgqcz.cloudfront.net/images/keyboard.jpg"
          srcSet="https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-720.jpg 720w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-1080.jpg 1080w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard-1921.jpg 1921w, https://d3posj7vfpgqcz.cloudfront.net/images/keyboard.jpg 2870w"
          sizes="(min-width: 768px) 100vw, 50vw"
          alt="mechanical keyboard"
        />
        <div className="Text1 AboutMe" ref={aboutRef}>
          <b>About me: </b>I'm a 3rd year Machine Intelligence major in the
          University of Toronto's Engineering Science program. I enjoy writing
          software, solving Rubik's Cubes and a good game of basketball.
        </div>
        <div className="SkillsArea">
          <div className="SkillColumn">
            <div className="Skill">
              <div className="SkillTitle">
                <img src="/svg/code.svg" alt="" className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>
                  Languages
                </div>
              </div>
              <div className="SkillText">
                TypeScript, Python, C/C++, JavaScript, CSS/SASS, HTML5 and
                MATLAB. I'm familiar with Go and C#. Additionally, I have
                experience writing ARM Assembly and Verilog for coursework.
              </div>
              <div
                className="SkillImage"
                style={{
                  backgroundImage:
                    'url(https://d3posj7vfpgqcz.cloudfront.net/images/code-1.jpg)',
                }}
              />
            </div>
          </div>
          <div className="SkillColumn">
            <div className="Skill">
              <div className="SkillTitle">
                <img src="/svg/cloud.svg" alt="" className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>
                  Cloud
                </div>
              </div>
              <div className="SkillText">
                I have developed several applications using the AWS Amplify and
                Google Firebase frameworks. AWS products I've used in production
                include: DynamoDB, AppSync, Lambda, CloudFront and S3 Storage.
              </div>
              <div
                className="SkillImage"
                style={{
                  backgroundImage:
                    'url(https://d3posj7vfpgqcz.cloudfront.net/images/cloud.jpg)',
                }}
              />
            </div>
          </div>
          <div className="SkillColumn">
            <div className="Skill">
              <div className="SkillTitle">
                <img src="/svg/build.svg" alt="" className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>
                  Frameworks &amp; More
                </div>
              </div>
              <div className="SkillText">
                I am highly experienced with React, React Native, NodeJS and
                GitHub. As a Machine Intelligence major, I have experience using
                PyTorch, NumPy, OpenCV, pandas and scikit-learn.
              </div>
              <div
                className="SkillImage"
                style={{
                  backgroundImage:
                    'url(https://d3posj7vfpgqcz.cloudfront.net/images/code-2.jpg)',
                }}
              />
            </div>
          </div>
        </div>
        <h2 className="Header2" style={{ marginBottom: 0 }}>
          Have an idea? <br /> Let's connect
        </h2>
        <Link to="/contact" className="ActionButton2">
          <span className="Underline2">Contact Me</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
