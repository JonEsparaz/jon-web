import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="HomePage">
      <img className="SplashImage" src="/images/Keyboard.jpg" alt="background"></img>
      <div className="CardsArea">
        <div className="Card">
          <div className="CardTitle">Top Languages</div>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>C/C++</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="Card TallCard ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/NsyU41QcsxM/640x960)"}}>
        </div>
        <div className="Card LongCard" style={{backgroundImage: "url(https://source.unsplash.com/G9i_plbfDgk/960x720)"}}>
          <div className="CardTitle">Frameworks, Runtimes, Libraries</div>
          <ul>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Bootstrap</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="Card" style={{backgroundImage: "url(https://source.unsplash.com/zMhwcAAzvTI/640x640)"}}>
          <div className="CardTitle">Learning</div>
          <ul>
            <li>Web Assembly</li>
            <li>Deno</li>
            <li>Golang</li>
            <li>Google Firebase</li>
          </ul>
        </div>
        <div className="Card">
          <div className="CardTitle">AWS Experience</div>
          <ul>
            <li>Amplify Framework</li>
            <li>S3 Storage</li>
            <li>Route 53 DNS</li>
            <li>Simple Email Service (SES)</li>
            <li>Lambda Functions</li>
            <li>DynamoDB</li>
          </ul>
        </div>
        <div className="Card ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/nePxBIvqUlU/640x360)"}}>
        </div>
        <div className="Card">
          <div className="CardTitle">Prototyping Skills</div>
          <ul>
            <li>Ardunio</li>
            <li>Raspberry Pi</li>
            <li>3D Printing</li>
            <li>OpenCV</li>
            <li>AutoDesk Fusion</li>
          </ul>
        </div>
        <div className="Card LongCard ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/cwqG1N1AtI0/768x432)"}}>
        </div>
        <div className="Card">
          <div className="CardTitle">Tools & Services</div>
          <ul>
            <li>GitHub</li>
            <li>Sentry</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="MobileContentContainer">
        <div className="MobileRectangle"></div>
        <div className="TextContainer mobile">
        <h1 className="HomePageH1 mobile">Jon Esparaz</h1>
        <div className="HomePageTag mobile">Engineering Science Student @ the Univerity of Toronto</div>
        </div>
      </div>

      <div className="ContentContainer">
        <div className="Rectangle"></div>
        <div className="TextContainer">
          <h1 className="HomePageH1 desktop">Jon Esparaz</h1>
          <div className="HomePageTag desktop">Engineering Science Student @ the Univerity of Toronto</div>
          <div className="HomePageTag">3rd Year Undergraduate Machine Intelligence Major</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
