import React, { useState } from 'react';
import MenuButton from './MenuButton';
import '../styles/Navegation.css';
import MenuList from './MenuList';

function Navegation() {
  const [display, setDisplay] = useState('none');

  const changeClassList = (e) => {
    e.classList.toggle('change');
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };

  return (
    <aside>
      <MenuButton onClick={changeClassList} />
      <MenuList display={display} />
    </aside>
  );
}

export default Navegation;
