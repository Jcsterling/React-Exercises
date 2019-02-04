
import React, { Component } from 'react';

class HelloWorld extends Component{
  render(){
    const greeting = 'Hello World!';
    return(
      <div>
        <h1>{greeting}</h1>
      </div>
    )
  }
}
export default HelloWorld;