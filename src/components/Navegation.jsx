import React/* ,  { useState } */ from 'react';
import '../styles/Navegation.css';
import { faHome /* faBars */ /* faAt */ } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, /* faTimesCircle */ faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { Nav } from 'react-bootstrap';

function Navegation() {
  return (
    <Nav
      className="menu"
      as="ul"
    >
      <Nav.Item as="li">
        <Link
          activeClass="active"
          to="home"
          spy
          smooth
          offset={-30}
        >
          <FontAwesomeIcon icon={faHome} />
          <p className="link-name">Home</p>
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-60}
        >
          <FontAwesomeIcon icon={faNewspaper} />
          <p className="link-name">Sobre</p>
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link
          activeClass="active"
          to="projects"
          spy
          smooth
          offset={-60}
        >
          <FontAwesomeIcon icon={faWindowMaximize} />
          <p className="link-name">Projetos</p>
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navegation;
