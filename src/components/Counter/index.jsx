import React from 'react';
import './Counter.css';

function Counter({ all, finished, loading }) {
  return (
    <h2 className={`todo-counter${loading ? ' todo-counter--loading' : ''}`}>
      Has completado {finished} de {all}.
    </h2>
  );
};

export { Counter };