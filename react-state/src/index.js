import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.Fragment>
  <App authorised={false}/>
  <App authorised={true}/>
  </React.Fragment>,
  document.getElementById('root')
);
