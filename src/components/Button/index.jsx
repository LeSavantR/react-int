import React from 'react';
import './Button.css';

function Button (props) {

  const clicked = (event) => {
    console.log(event.target);
    props.openModel(true);
  }

  return (
    <button
      className="todo-button"
      onClick={clicked}
    >
      +
    </button>
  );
};

export { Button };