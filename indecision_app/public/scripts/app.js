'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //Prevents page from reloading

  var option = e.target.elements.option.value;
  //e.target: point to the element that the event started on
  //elements: on form elements we have access to elements -- we have
  //access to a list of elements that are accessible by name in
  //this case "option"
  //value, to get option's value

  if (option) {
    app.options.push(option);
    //push on the array, app.options with a new item, option
    e.target.elements.option.value = ''; //clears the input
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.random();
  console.log(randomNum);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 100];

var render = function render() {
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
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
