import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <div className="degree-header">
        <h4 className="degree">{data.degree}</h4>
        <div className="degree-right">
          {data.gpa && (
            <span className="degree-gpa">GPA: {data.gpa}</span>
          )}
          <span className="degree-year">{data.year}</span>
        </div>
      </div>
      <p className="school">
        <a href={data.link}>{data.school}</a>
      </p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    gpa: PropTypes.string,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
