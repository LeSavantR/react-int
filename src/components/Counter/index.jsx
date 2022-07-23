import React from 'react';
import './Counter.css';

function Counter({ all, finished }) {
  return (
    <h2 className='todo-counter'>Has completado {finished} de {all}.</h2>
  );
};

export { Counter };