import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component{
  constructor(props){
    super(props);

    /** Reading the State from props **/
    this.state = {currentValue : this.props.startWith};

    /** Updating the state using setState method **/
    setInterval(() => {
      this.setState({currentValue: this.state.currentValue - 1});
    },10000);
  }
  render(){
    console.log("In Timer Render")
    return(
      <div className="Timer">
        {this.state.currentValue}
      </div>
    );
  }
}

class App extends Component {
  render() {
    console.log("In App render");
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Timer startWith={150}/>
        </p>
      </div>
    );
  }
}

export default App;
