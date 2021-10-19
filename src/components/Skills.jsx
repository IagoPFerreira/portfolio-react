import React from 'react';
import PropTypes from 'prop-types';

function Skills({ skills }) {
  const stack = Object.keys(skills);
  return (
    <table>
      <thead>
        <th>
          { stack }
        </th>
      </thead>
      <tbody>
        {skills[stack].map(({ tech, image }, index) => {
          const line = index % 2 === 0 ? 'par' : 'odd';
          return (
            <tr className={`${line}`}>
              <td>
                { tech }
                <img className="tech-icon" alt={`Tech-${tech}`} src={image} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Skills;

Skills.propTypes = {
  tech: PropTypes.object,
}.isRequired;
