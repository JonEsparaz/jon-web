import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Project.scss';

function Projects() {
  return (
    <div>
      <Menu />
      <div className="ProjectsContainer">
        <h2 className="Header2">projects</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;