import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import About from './About';
import Contact from './Contact';
import Main from './Main';
import Projects from './Projects';

/* <img src="../imagens/foto_Iago_Ferreira.jpeg"
alt="Iago de óculos escuro, sorrindo, com um um lago e uma montanha atrás dele"></img> */

function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
