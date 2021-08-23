import { faHome, faBars, faAt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faTimesCircle, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Navegation() {
  return (
    <aside>
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faTimesCircle} />
      <p>Navigation button</p>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
        <p>Home</p>
      </Link>
      <Link to="/sobre">
        <FontAwesomeIcon icon={faNewspaper} />
        <p>Sobre</p>
      </Link>
      <Link to="/projetos">
        <FontAwesomeIcon icon={faWindowMaximize} />
        <p>Projetos</p>
      </Link>
      <Link to="/contatos">
        <FontAwesomeIcon icon={faAt} />
        <p>Contatos</p>
      </Link>

    </aside>
  );
}

export default Navegation;
