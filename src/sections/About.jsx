import React from 'react';
import Skills from '../components/Skills';
import techStack from '../data/techStack';

function About() {
  return (
    <section id="about">
      <section className="formation">
        <h4>Formação</h4>
        <ul>
          <li>
            Biólogo, formado em Ciências Biológicas - Bacharelado e Licenciatura, pelo UniFOA.
          </li>
          <li>
            Desenvolvedor Web FullStack, formado pela
            {' '}
            <a
              href="https://www.betrybe.com/"
              target="_blank"
              rel="noreferrer"
              id="link-trybe"
            >
              Trybe
            </a>
            .

          </li>
        </ul>
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
