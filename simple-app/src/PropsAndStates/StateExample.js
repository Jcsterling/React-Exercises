import React, { Component } from 'react';

class StateExample extends Component{
   constructor(){
    super();
    this.state = {
      stateText: "Hello world",
      stateNumber: 5
    }
 }
    render() {
    return (
      <div>
        <h1>{ this.state.stateText }</h1>
        <p>
          { this.state.stateNumber }
        </p>
      </div>
      );
  }
}
export default StateExample;
            