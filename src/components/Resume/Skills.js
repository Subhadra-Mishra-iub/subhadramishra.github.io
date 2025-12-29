import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  // Sort skills alphabetically for clean display
  const sortedSkills = [...skills].sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Technical Skills</h3>
      </div>
      <div className="skills-grid">
        {sortedSkills.map((skill) => (
          <span key={skill.title} className="skill-badge">
            {skill.title}
          </span>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Skills.defaultProps = {
  skills: [],
};

export default Skills;
