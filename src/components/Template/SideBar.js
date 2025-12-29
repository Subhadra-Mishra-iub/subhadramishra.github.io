import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Subhadra Mishra</h2>
        <p>
          <a href="mailto:subhadramishrag@gmail.com">subhadramishrag@gmail.com</a>
        </p>
        <p>
          <a href="tel:+18123454904">+1 (812) 345-4904</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Subhadra. I am a Software Engineer specializing in Backend (Python/Java),
        {' '}Data Pipelines, Cloud, and Scalable Systems. Currently working as a Broadcast Systems Engineer
        {' '}& Production Data Analyst at{' '}
        <a href="https://wtiu.org">WTIU/WFIU</a>. I have experience in full-stack development,
        {' '}data engineering, cloud infrastructure, and AI/ML systems.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Subhadra Mishra <Link to="/">Portfolio</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
