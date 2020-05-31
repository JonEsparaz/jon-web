import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="HomePage">
    <div className="HeroImageArea" style={{backgroundImage: "url(images/Keyboard.jpg)"}}></div>
      <div className="CardsArea">
        <div className="Card">
          <div className="CardTitle">Top Languages</div>
          <ul className="CardList">
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>C/C++</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="Card TallCard ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/NsyU41QcsxM/1920x2880)"}}>
        </div>
        <div className="Card LongCard" style={{backgroundImage: "url(https://source.unsplash.com/G9i_plbfDgk/1920x1440)"}}>
          <div className="CardTitle">Frameworks, Runtimes, Libraries</div>
          <ul className="CardList">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Bootstrap</li>
            <li>NodeJS</li>
            <li>OpenCV</li>
            <li>TensorFlow</li>
          </ul>
        </div>
        <div className="Card" style={{backgroundImage: "url(https://source.unsplash.com/Nho-1hXd3d4/1920x2880)"}}>
          <div className="CardTitle">Learning</div>
          <ul className="CardList">
            <li>Web Assembly</li>
            <li>Deno</li>
            <li>Golang</li>
            <li>Google Firebase</li>
          </ul>
        </div>
        <div className="Card">
          <div className="CardTitle">AWS Experience</div>
          <ul className="CardList">
            <li>Amplify Framework</li>
            <li>S3 Storage</li>
            <li>Route 53 DNS</li>
            <li>Simple Email Service (SES)</li>
            <li>Lambda Functions</li>
            <li>DynamoDB</li>
          </ul>
        </div>
        <div className="Card ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/nePxBIvqUlU/1920x1080)"}}>
        </div>
        <div className="Card">
          <div className="CardTitle">Prototyping Skills</div>
          <ul className="CardList">
            <li>Ardunio</li>
            <li>Raspberry Pi</li>
            <li>3D Printing</li>
            <li>AutoDesk Fusion</li>
          </ul>
        </div>
        <div className="Card LongCard ImageOnly" style={{backgroundImage: "url(https://source.unsplash.com/cwqG1N1AtI0/1920x1080)"}}>
        </div>
        <div className="Card">
          <div className="CardTitle">Tools & Services</div>
          <ul className="CardList">
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
