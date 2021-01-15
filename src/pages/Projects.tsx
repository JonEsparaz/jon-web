import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Project.scss';

function Projects(): JSX.Element {
  return (
    <div className="page-wrapper">
      <Menu mode="dark" />
      <div className="ProjectsContainer page-body">
        <h2 className="Header2 Big">projects</h2>
        <div className="Text1">(coming soon)</div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
