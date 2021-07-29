import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function NewApp() {
  return (
    <h1>This is just a dummy text to check how wrapping works </h1>
    );
}

ReactDOM.render(
  <React.Fragment>
    <App />
    <NewApp />
  </React.Fragment>,
  document.getElementById('root')
);
