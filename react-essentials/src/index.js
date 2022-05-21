import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return (
    <h1>This is the Second App</h1>
  );
}

const [boot, tent, light] = ["boots", "tents", "headlamp"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App authorized={true}/>
    <AppTwo />
  </React.Fragment>
);

reportWebVitals();
