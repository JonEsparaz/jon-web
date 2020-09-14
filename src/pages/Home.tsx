import React from 'react';
import './Home.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {

  const scroll = () => {
    const elem = document.getElementById('about-me');
    elem?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="Home" >
      <Menu mode='light' absolute />
      <div className="HomePage">
        <div className="ContentContainer">
          <h1 className="Header1 White NameHeader">Jon Esparaz</h1>
          <div className='AccentBar' />
          <div className="Text1 White">Engineering Science | University of Toronto</div>
          <button className="ActionButton" onClick={scroll} ><span className="Underline">About Me</span></button>
        </div>
        <img className="HeroImage" src="https://d3posj7vfpgqcz.cloudfront.net/keyboard.jpg"
          srcSet="https://d3posj7vfpgqcz.cloudfront.net/keyboard-720.jpg 720w, https://d3posj7vfpgqcz.cloudfront.net/keyboard-1080.jpg 1080w, https://d3posj7vfpgqcz.cloudfront.net/keyboard-1921.jpg 1921w, https://d3posj7vfpgqcz.cloudfront.net/keyboard.jpg 2870w"
          sizes="(min-width: 768px) 100vw, 50vw" alt="mechanical keyboard"
        />
        <div className="Text1 AboutMe" id="about-me"><b>About me: </b>I'm in my 3rd year of the University of Toronto's
        Engineering Science program, majoring in Machine Intelligence.
        I enjoy writing software, solving Rubik's Cubes and a good game of basketball.</div>
        <div className="SkillsArea">
          <div className="SkillColumn" >
            <div className="Skill">
              <div className="SkillTitle" >
                <img src='/svg/code.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Languages</div>
              </div>
              <div className="SkillText">Typescript, Python, C/C++, Javascript, GraphQL, CSS/SASS and HTML5. Languages I'm familar with and/or learning include: Go, VTL, Web Assembly, ARM Assembly and Verilog.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://d3posj7vfpgqcz.cloudfront.net/code-1.jpg)" }} />
            </div>
          </div>
          <div className="SkillColumn" >
            <div className="Skill" >
              <div className="SkillTitle">
                <img src='/svg/cloud.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Cloud</div>
              </div>
              <div className="SkillText">I have six months of professional experience with AWS Amplify and I've deployed projects on Google Firebase and Microsoft Azure. Cloud services I've used in production include: DynamoDB, AWS Appsync, AWS Lambda, Google Firestore and S3 Storage, just to name a few.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://d3posj7vfpgqcz.cloudfront.net/cloud.jpg)" }} />
            </div>
          </div>
          <div className="SkillColumn" >
            <div className="Skill">
              <div className="SkillTitle">
                <img src='/svg/build.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Frameworks &amp; More</div>
              </div>
              <div className="SkillText">I have professional experience working with ReactJS, React Native, NodeJS, Expo, Bootstrap, and of course, GitHub. As a Machine Learning major, I am learning both Tensorflow and PyTorch.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://d3posj7vfpgqcz.cloudfront.net/code-2.jpg)" }} />
            </div>
          </div>
        </div>
        <h2 className="Header2" style={{ marginBottom: 0 }}>Have an idea? <br /> Let's connect</h2>
        <Link to="/contact" className="ActionButton2"><span className="Underline2">Contact Me</span></Link>
      </div>
      <Footer />
    </div >
  );
}

export default Home;
