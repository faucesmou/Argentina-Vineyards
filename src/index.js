import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('G-ZKDNXHSL4Z');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
