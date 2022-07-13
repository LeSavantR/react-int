import React from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../../Context';
import './Model.css';


function Model({ children }) {
  const { setModel } = React.useContext(Context);
  const element = document.querySelector('#model');
  return ReactDOM.createPortal(
    <div className="modelBackground" onClick={() => setModel(false)}>
      {children}
    </div>
    , element);
};

export { Model };