//Function, accepts only one props, aka is for a simple project or code:
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

//Component, accepts more props and are better for organization:
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

//Elements can represent user-defined components:
const element = <Welcome name="Sara" />; 


//This is a exemple of Props
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );


//You can use more than one props, with the same name and value for the properties
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

//It is better to create a new file for only some parts that can be easly accessed and to be reusable.
...<div className="UserInfo">
<Avatar user={props.author} />
...