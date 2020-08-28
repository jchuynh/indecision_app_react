console.log('App.js is running!');

// JSX - JavaScript XML (language extension)
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault(); //Prevents page from reloading

  const option = e.target.elements.option.value;
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

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
          })
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
};
 
render();