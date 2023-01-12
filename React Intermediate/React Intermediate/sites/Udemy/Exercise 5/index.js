import React from 'react';
import ReactDOm from 'react-dom';

class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString(), };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString(),})    
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<Clock />, document.querySelector('#root'));