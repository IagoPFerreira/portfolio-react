import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projectsList';

function Projects() {
  const [modulo, setModulo] = useState('Fundamentos');
  return (
    <section id="projects">
      <nav className="projects-navegation">
        {Object.keys(projectList).map((model) => {
          const disable = projectList[model].length > 0;

          return (
            <Button
              type="button"
              variant="secondary"
              value={model}
              disabled={!disable}
              onClick={({ target }) => setModulo(target.value)}
            >
              {model}
            </Button>
          );
        })}
      </nav>
      <section className="projects-container">
        <ProjectCard modulo={projectList[modulo]} />
      </section>
    </section>
  );
}

export default Projects;
