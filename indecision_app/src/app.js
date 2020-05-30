console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Jessica Huynh</h1>
    <p>Age: 28</p>
    <p>Location: San Jose, CA</p> 
  </div>
);

    // Code runnign behind the scene
    // var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);