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
          <div className="Text1 White" style={{ textAlign: 'center' }}>Engineering Science Student @ the Univerity of Toronto</div>
          <div className="Text1 White" style={{ textAlign: 'center' }}>3rd Year Undergraduate Machine Intelligence Major</div>
          <button className="ActionButton"><span className="Underline">Learn More</span></button>
        </div>
        <img className="HeroImage" src="/images/keyboard.jpg" alt="mechanical keyboard"></img>
        <h2 className="Header2">check out my previous work</h2>
        <div className="CardArea">
          <a className="Card" href="/projects">
            The Meeting House Website
          </a>
          <div className="Card">
            alyssaesparaz.ca
          </div>
        </div>

        <h2 className="Header2">about me</h2>
        <div className="CardArea">
          <div className="Card">
            Frameworks
          </div>
          <div className="Card">
            alyssaesparaz.ca
          </div>
          <div className="Card">
            Cloud Experience
          </div>
          <div className="Card">
            alyssaesparaz.ca
          </div>
        </div>
        <h2 className="Header2">have an idea you want to discuss?</h2>
        <button className="ActionButton2"><span className="Underline2">Contact Me</span></button>
      </div>
      <Footer />
    </div >
  );
}

export default Home;
