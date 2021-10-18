import React from 'react';
import PropTypes from 'prop-types';

function Skills({ skills }) {
  const stack = Object.keys(skills);
  return (
    <table>
      <thead>
        { stack }
      </thead>
      <tbody>
        {skills[stack].map(({ tech, image }) => (
          <tr>
            <td>{ tech }</td>
            <td>
              <img className="tech-icon" alt="Tech-HTML" src={image} />

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Skills;

Skills.propTypes = {
  tech: PropTypes.object,
}.isRequired;
