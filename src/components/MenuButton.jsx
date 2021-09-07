import React from 'react';
import PropTypes from 'prop-types';

function MenuButton({ onClick }) {
  const classes = ['bar1', 'bar2', 'bar3'];

  return (
    <button type="button" className="container" onClick={(e) => onClick(e.target)}>
      { classes.map((c) => (
        <div
          role="toolbar"
          className={c}
          onClick={(e) => onClick(e.target.parentNode)}
          onKeyPress={(e) => onClick(e.target.parentNode)}
        />
      ))}
    </button>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default MenuButton;
