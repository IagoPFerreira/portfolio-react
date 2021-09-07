import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

function Switcher() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/projetos" component={Projects} />
      <Route path="/contatos" component={Contact} />
    </Switch>
  );
}

export default Switcher;
