import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projectsList';

function Projects() {
  const [modulo, setModulo] = useState('Fundamentos');

  console.log(modulo);
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <nav>
        {Object.keys(projectList).map((model) => <button type="button" value={model} onClick={({ target }) => setModulo(target.value)}>{model}</button>)}
      </nav>
      <section className="projects-container">
        <ProjectCard modulo={projectList[modulo]} />
      </section>
    </section>
  );
}

export default Projects;
