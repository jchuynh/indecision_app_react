
class Counter extends React.Component {

  constructor(props) {
    super(props);
    // bound to the correct this object
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    //setting default state value
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    }); 
  }

  handleMinusOne() {
    this.setState((prevState)=> {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0 
      };
    });
    // the bewlow happens before it renders
    // this passes a state that was 0 not something else
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++; //count = count + 1
//   renderCounterApp(); //need to render ever time the counter changes
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

//     // Code running behind the scene
//     // var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app,js");


// const renderCounterApp = () => {
//   const templateTwo = (
//     // templateTwo creates an object
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className="button">+1</button>
//       <button onClick={minusOne} className="button">-1</button>
//       <button onClick={reset} className="button">reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

