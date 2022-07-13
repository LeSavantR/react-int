import React from 'react';
import { Context } from '../../Context';
import './Counter.css';

function Counter() {
  const { all, listCompleted:finished } = React.useContext(Context);
  return (
    <h2 className='todo-counter'>Has completado {finished} de {all}.</h2>
  );
};

export { Counter };