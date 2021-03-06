// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Render
const $ = element => document.querySelector(element)
const element = $('#root');
const root = ReactDOM.createRoot(element);
root.render(
    <App />
);

export { $ };