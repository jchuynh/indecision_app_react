let visibility = false;

const app = {
    title: 'Visibility Toggle'
};

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show Details'}
            </button>
            {visibility && (
            <div>
                <p>Hey, these are some details that you can now see.</p>
            </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

