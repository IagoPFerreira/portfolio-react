import React/* ,  { useState } */ from 'react';
// import MenuButton from './MenuButton';
import '../styles/Navegation.css';
// import MenuList from './MenuList';
import { faHome, /* faBars */ faAt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, /* faTimesCircle */ faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

function Navegation() {
  // const [display, setDisplay] = useState('hide');

  // const changeClassList = (e) => {
  //   e.classList.toggle('change');
  //   if (display === 'hide') {
  //     setDisplay('show');
  //   } else {
  //     setDisplay('hide');
  //   }
  // };

  return (
    <nav className="menu">
      {/* <MenuButton onClick={changeClassList} /> */}
      {/* <MenuList /> */}
      <Link
        activeClass="active"
        to="main"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <FontAwesomeIcon icon={faHome} />
        <p className="link-name">Home</p>
      </Link>
      <Link to="/sobre">
        <FontAwesomeIcon icon={faNewspaper} />
        <p className="link-name">Sobre</p>
      </Link>
      <Link to="/projetos">
        <FontAwesomeIcon icon={faWindowMaximize} />
        <p className="link-name">Projetos</p>
      </Link>
      <Link to="/contatos">
        <FontAwesomeIcon icon={faAt} />
        <p className="link-name">Contatos</p>
      </Link>
    </nav>
  );
}

export default Navegation;
