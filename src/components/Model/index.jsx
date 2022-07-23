import React from 'react';
import ReactDOM from 'react-dom';
import './Model.css';


function Model({ children, setModel }) {
  const element = document.querySelector('#model');
  return ReactDOM.createPortal(
    <div className="modelBackground">
      {children}
      <span onClick={() => setModel(false)}> ✗ </span>
    </div>
    , element);
};

export { Model };