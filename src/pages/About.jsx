import React from 'react';
import Skills from '../components/Skills';

function About() {
  const techStack = [
    {
      'Front-end': [
        {
          tech: 'HTML',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        },
        {
          tech: 'CSS',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        },
        {
          tech: 'JavaScipt',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        },
        {
          tech: 'React',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        },
        {
          tech: 'Redux',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
        },
        {
          tech: 'Markdown',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/markdown/markdown-original.svg',
        },
        {
          tech: 'Bootstrap',
          image: 'https://img.icons8.com/color/48/000000/bootstrap.png',
        },
      ],
    },
    {
      'Back-end': [
        {
          tech: 'Python',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        },
        {
          tech: 'MySQL',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
        },
        {
          tech: 'MongoDB',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
        },
        {
          tech: 'NodeJS',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        },
        {
          tech: 'Heroku',
          image: 'https://avatars.githubusercontent.com/u/23211?s=200&v=4',
        },
      ],
    },
    {
      Testes: [
        {
          tech: 'Jest',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
        },
        {
          tech: 'RTL',
          image: 'https://testing-library.com/img/octopus-128x128.png',
        },
        {
          tech: 'Mocha',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mocha/mocha-plain.svg',
        },
        {
          tech: 'Chai',
          image: 'https://avatars.githubusercontent.com/u/1515293?s=200&v=4',
        },
        {
          tech: 'Sinon',
          image: 'https://sinonjs.org/assets/images/logo.png',
        },
      ],
    }, {
      Ferramentas: [
        {
          tech: 'Linux',
          image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
        },
        {
          tech: 'VSCode',
          image: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg',
        },
        {
          tech: 'Slack',
          image: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg',
        },
        {
          tech: 'Trello',
          image: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
        },
      ],
    },
  ];

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
        {techStack.map((tech) => <Skills skills={tech} />)}
      </section>
    </section>
  );
}

export default About;
