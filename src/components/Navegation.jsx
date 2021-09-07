import React from 'react';
import MenuButton from './MenuButton';
import '../styles/Navegation.css';
import MenuList from './MenuList';

function Navegation() {
  return (
    <aside>
      {/* <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faTimesCircle} /> */}
      <MenuButton />
      <MenuList />
    </aside>
  );
}

export default Navegation;
