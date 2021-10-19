import React from 'react';
import Skills from '../components/Skills';
import techStack from '../data/techStack';

function About() {
  return (
    <section id="about">
      <h2>Sobre</h2>
      <section className="formation">
        <h4>Formação</h4>
        <p>Biólogo, formado em Ciências Biológicas - Bacharelado e Licenciatura, pelo UniFOA.</p>
        <p>
          Desenvolvedor Web em formação, cursando a
          <a href="https://www.betrybe.com/"> Trybe</a>
          , atualmente no módulo de Back-end.

        </p>
      </section>
      <section className="skills">
        <h4>Tech Stack</h4>
        <section className="skills-tables">
          {techStack.map((tech) => <Skills skills={tech} />)}
        </section>
      </section>
    </section>
  );
}

export default About;
