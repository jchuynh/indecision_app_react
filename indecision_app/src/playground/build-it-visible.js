// Visibility Toggle - render, contrusctor, handleToggleVisibility
// Visibility -> False

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    // Step One
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                
                {this.state.visibility && (
                    <div>
                        <p>Hey, these are some details that you can now see.</p>
                    </div>
                    )}

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// let visibility = false;

// const app = {
//     title: 'Visibility Toggle'
// };

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show Details'}
//             </button>
            // {visibility && (
            // <div>
            //     <p>Hey, these are some details that you can now see.</p>
            // </div>
            // )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();

