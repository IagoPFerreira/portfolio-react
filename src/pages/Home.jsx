import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import About from '../sections/About';
import Main from '../sections/Main';
import Projects from '../sections/Projects';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
