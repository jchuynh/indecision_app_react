let count = 0;
const addOne = () => {
  count++; //count = count + 1
  renderCounterApp(); //need to render ever time the counter changes
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

    // Code running behind the scene
    // var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");


const renderCounterApp = () => {
  const templateTwo = (
    // templateTwo creates an object
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button">+1</button>
      <button onClick={minusOne} className="button">-1</button>
      <button onClick={reset} className="button">reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();