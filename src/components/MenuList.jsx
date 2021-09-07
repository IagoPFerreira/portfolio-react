import React from 'react';
import { faHome, /* faBars */ faAt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, /* faTimesCircle */ faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuList({ display }) {
  console.log(display);
  return (
    <ul style={{ display }}>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/sobre">
          <FontAwesomeIcon icon={faNewspaper} />
          <p>Sobre</p>
        </Link>
      </li>
      <li>
        <Link to="/projetos">
          <FontAwesomeIcon icon={faWindowMaximize} />
          <p>Projetos</p>
        </Link>
      </li>
      <li>
        <Link to="/contatos">
          <FontAwesomeIcon icon={faAt} />
          <p>Contatos</p>
        </Link>
      </li>
    </ul>
  );
}

MenuList.propTypes = {
  display: PropTypes.bool,
}.isRequired;

export default MenuList;
