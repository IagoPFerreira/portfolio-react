import React from 'react';

function MenuButton() {
  const changeClassList = (e) => {
    e.classList.toggle('change');
  };

  const classes = ['bar1', 'bar2', 'bar3'];

  return (
    <button type="button" className="container" onClick={(e) => changeClassList(e.target)}>
      { classes.map((c) => (
        <div
          role="toolbar"
          className={c}
          onClick={(e) => changeClassList(e.target.parentNode)}
          onKeyPress={(e) => changeClassList(e.target.parentNode)}
        />
      ))}
    </button>
  );
}

export default MenuButton;
