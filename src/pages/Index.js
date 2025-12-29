import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Subhadra Mishra's portfolio website. Data Analyst, Software Engineer, and Media Technology Specialist. "
      + 'Computer Science graduate student at Indiana University Bloomington.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome</Link>
          </h2>
          <p>
            Data Analyst | Software Engineer | Media Technology Specialist
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my portfolio! I'm passionate about leveraging technology and data to solve complex problems. 
        Feel free to explore my{' '}
        <Link to="/about">background</Link>, check out my{' '}
        <Link to="/resume">resume</Link>, browse my{' '}
        <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">get in touch</Link>.
      </p>
      <p>
        {' '}
        I'm currently pursuing my Master's in Computer Science at Indiana University Bloomington, 
        with expertise in full-stack development, data science, cloud computing, and machine learning. 
        I bring hands-on experience from roles in software development, data analysis, and educational technology.
      </p>
    </article>
  </Main>
);

export default Index;
