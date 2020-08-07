'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No Options'
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

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};

var minusOne = function minusOne() {
  console.log('minusOne');
};

var reset = function reset() {
  console.log('reset');
};

var templateTwo =
// templateTwo creates an object
React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne, className: 'button' },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne, className: 'button' },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset, className: 'button' },
    'reset'
  )
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"
// Code running behind the scene
// var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
