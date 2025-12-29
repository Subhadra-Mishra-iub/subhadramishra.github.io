import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

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
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Subhadra. I am a Computer Science graduate student at{' '}
        <a href="https://luddy.indiana.edu">Indiana University Bloomington</a>. 
        Currently, I work as a Data Analyst, Schedule Director, and Broadcast TMC Operator at{' '}
        <a href="https://wtiu.org">WFIU/WTIU</a>. I have experience in full-stack development, 
        data science, cloud computing, and machine learning.
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
