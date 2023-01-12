// Exemple of JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);





// Using JSX in a function
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );



//JSX accepts if, loop and many others statements
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }


//You can use Strings ('') to make a value literal
const element = <div tabIndex="0"></div>;

//You can use curly braces {} to reference a JS expression to an atribute
const element = <img src={user.avatarUrl}></img>;

//If a tag is empty, you may close it immediately with />, like XML
const element = <img src={user.avatarUrl} />;

//It is safe to embed (embutir) user input in JSX.
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;


//These two examples are identical:

const element = (
	 h1 className="greeting">
 	 Hello, world!
 	</h1>
);
	
const element = React.createElement(
	'h1',
    {className: 'greeting'},
  	Hello, world!'
);

//React.createElement() create a code like this:
// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };