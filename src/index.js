import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = React.createElement('h2', {className: 'BAGAGVA'}, 'Hello There!');

// const elem = (
//   <div>
//     <h2>Hello There!</h2>
//     <input type="text" />
//     <button></button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>,
);

