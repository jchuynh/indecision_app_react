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

const user = {
  name: 'Jessica',
  age: 28,
  location: 'San Jose, CA',
};
function getLocation(location){
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

    // Code running behind the scene
    // var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);