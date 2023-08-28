import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello World!</h2>;

const text = "Hello World"

const elem = (
  <div>
    <h2 classname="text">{text}</h2>
    <input type="text" />
    <button>Click me</button>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

