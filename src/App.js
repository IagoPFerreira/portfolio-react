import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Switcher from './components/Switcher';
import Home from './pages/Home';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <section className="App">
        {/* <Switcher /> */}
        <Home />
      </section>
    </BrowserRouter>
  );
}

export default App;
