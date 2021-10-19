import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ modulo }) {
  return (
    <>
      {modulo.map(({ name, repo }) => (
        <section>
          <h5>{name}</h5>
          <a href={repo} target="_blank" rel="noreferrer" className="repo-links">Repositório</a>
        </section>
      ))}
    </>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  modulo: PropTypes.object,
}.isRequired;
