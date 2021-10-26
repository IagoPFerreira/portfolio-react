import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projectsList';

function Projects() {
  const [modulo, setModulo] = useState('Fundamentos');
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <nav className="projects-navegation">
        {Object.keys(projectList).map((model) => <Button type="button" variant="secondary" value={model} onClick={({ target }) => setModulo(target.value)}>{model}</Button>)}
      </nav>
      <section className="projects-container">
        <ProjectCard modulo={projectList[modulo]} />
      </section>
    </section>
  );
}

export default Projects;
