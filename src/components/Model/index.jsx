import React from 'react';
import ReactDOM from 'react-dom';
import './Model.css';


function Model({ children }) {
  const element = document.querySelector('#model');
  return ReactDOM.createPortal(
    <div className="modelBackground">
      {children}
    </div>
    , element);
};

export { Model };