// This is an Element:
const element = <h1>Hello, world</h1>;


//To render a element:
const element = <h1>Hello, world</h1>; //Want to render this
ReactDOM.render(element, document.getElementById('root'));//element: what is going to be rendered. Id: where it is going.


//Updating a rendered method with setInterval, but it is better to use the State method:
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);