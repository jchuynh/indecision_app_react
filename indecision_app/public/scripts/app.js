'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Jessica Huynh'
  ),
  React.createElement(
    'p',
    null,
    'Age: 28'
  ),
  React.createElement(
    'p',
    null,
    'Location: San Jose, CA'
  )
);

// Code runnign behind the scene
// var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
