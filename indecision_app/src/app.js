console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one', 'two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);


let count = 0;
const addOne = () => {
  console.log('addOne')
};

const minusOne = () => {
  console.log('minusOne')
};

const reset = () => {
  console.log('reset')
}

const templateTwo = (
  // templateTwo creates an object
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="button">+1</button>
    <button onClick={minusOne} className="button">-1</button>
    <button onClick={reset} className="button">reset</button>
  </div>
);




// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"
    // Code running behind the scene
    // var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);