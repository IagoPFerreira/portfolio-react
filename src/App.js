import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Switcher from './components/Switcher';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <section className="App">
        <Switcher />
      </section>
    </BrowserRouter>
  );
}

export default App;
