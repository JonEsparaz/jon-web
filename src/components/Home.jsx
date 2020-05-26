import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="HomePage">
      <img className="SplashImage" src="/images/Keyboard.jpg" alt="background"></img>
      <div className="CardsArea">
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
