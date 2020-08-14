import React from 'react';
import './Home.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home() {

  return (
    <div className="Home">
      <Menu />
      <div className="HomePage">
        <div className="ContentContainer">
          <h1 className="Header1 White">Jon Esparaz</h1>
          <div className="Text1 White" style={{ textAlign: 'center' }}>Engineering Science Student <br />@ the Univerity of Toronto</div>
          <div className="Text1 White" style={{ textAlign: 'center' }}>3rd Year Undergraduate <br />Machine Intelligence Major</div>
          {/*<button className="ActionButton" onClick={scroll} ><span className="Underline">Learn More</span></button>*/}
        </div>
        <img className="HeroImage" src="/images/keyboard.jpg" alt="mechanical keyboard"></img>
        <div className="HomeContainer">
          {/*<h2 className="Header2">check out my previous work</h2>
        <div className="CardArea">
          <a className="Card" href="/projects">
            The Meeting House Website
          </a>
          <div className="Card">
            alyssaesparaz.ca
          </div>
        </div>*/}

          <h2 className="Header2" >expertise and experience</h2>
          <div className="SkillsArea">
            <div className="Skill">
              <div className="SkillTitle" >
                <img src='/svg/code.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Languages</div>
              </div>
              <div className="SkillText">My top languages are: Typescript, Python, C/C++, Javascript, GraphQL, CSS/SASS and HTML5. Languages I'm familar with and/or learning include: Go, VTL, Web Assembly, ARM Assembly and Verilog.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://source.unsplash.com/NsyU41QcsxM/720x1080)" }} />

            </div>
            <div className="Skill" >
              <div className="SkillTitle">
                <img src='/svg/cloud.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Cloud</div>
              </div>
              <div className="SkillText">I have six months of professional experience with AWS Amplify and I've deployed projects on Google Firebase and Microsoft Azure. Cloud services I've used in production include: DynamoDB, AWS Appsync, AWS Lambda, Google Firestore and S3 Storage, just to name a few.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://source.unsplash.com/G9i_plbfDgk/720x1080)" }} />
            </div>
            <div className="Skill">
              <div className="SkillTitle">
                <img src='/svg/build.svg' alt='' className="SkillIcon"></img>
                <div className="Header2 Small" style={{ margin: 0 }}>Frameworks &amp; More</div>
              </div>
              <div className="SkillText">I have professional experience working with ReactJS, React Native, NodeJS, Expo, Bootstrap, and of course, GitHub. As a Machine Learning major, I am learning both Tensorflow and PyTorch.</div>
              <div className="SkillImage" style={{ backgroundImage: "url(https://source.unsplash.com/cwqG1N1AtI0/1080x720)" }} />
            </div>
          </div>
          <h2 className="Header2" style={{ marginBottom: 0 }}>have an idea you want to discuss?</h2>
          <a href="/contact" className="ActionButton2"><span className="Underline2">Contact Me</span></a>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Home;
