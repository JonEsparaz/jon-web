import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Project.scss';

function Projects() {
  return (
    <div>
      <Menu mode="light" />
      <div className="ProjectsContainer">
        <h1 className="ProjectsH1">Coming soon</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;