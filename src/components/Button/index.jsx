import React from 'react';
import './Button.css';

function Button ({ openModel, model }) {

  const clicked = (event) => {
    openModel(!model);
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