import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("ul", null, 
    React.createElement("li", null, "This is my very first React App"),
    React.createElement("li", null, "I am learning to make apps in ReactJs"),
    React.createElement("li", null, "This is a very exciting journey for me"),
    React.createElement("li", null, "I like to explore new technologies and explore new domains"),
    React.createElement("li", null, "I am learning new things every single day"),
    React.createElement("li", null, "I am trying to incorporate the new things everyday in my life")
    ),
  document.getElementById('root')
);
