import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Main from '../sections/Main';
import Projects from '../sections/Projects';

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
