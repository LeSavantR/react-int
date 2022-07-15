import React from 'react';
import ReactDOM from 'react-dom';
// import { Context } from '../../Context';
import './Model.css';


function Model({ children }) {
  // const { setModel } = React.useContext(Context);
  const target = document.querySelector('#model');
  return ReactDOM.createPortal(
    <div className="modelBackground">
      {children}
    </div>
    , target);
};

export { Model };