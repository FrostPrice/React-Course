class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  }


  const node = this.myRef.current;



  class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }


  class AutoFocusTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
  
    componentDidMount() {
      this.textInput.current.focusTextInput();
    }
  
    render() {
      return (
        <CustomTextInput ref={this.textInput} />
      );
    }
  }



  function MyFunctionComponent() {
    return <input />;
  }
  
  class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
    render() {
      // This will *not* work!
      return (
        <MyFunctionComponent ref={this.textInput} />
      );
    }
  }



  function CustomTextInput(props) {
    // textInput must be declared here so the ref can refer to it
    const textInput = useRef(null);
    
    function handleClick() {
      textInput.current.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );
  }



/////// Exemple of callback refs

  class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
  
      this.textInput = null;
  
      this.setTextInputRef = element => {
        this.textInput = element;
      };
  
      this.focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.textInput) this.textInput.focus();
      };
    }
  
    componentDidMount() {
      // autofocus the input on mount
      this.focusTextInput();
    }
  
    render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }






  ///// Exemple of passing refs as components
  function CustomTextInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
  }
  
  class Parent extends React.Component {
    render() {
      return (
        <CustomTextInput
          inputRef={el => this.inputElement = el}
        />
      );
    }
  }