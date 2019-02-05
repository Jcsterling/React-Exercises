import React, { Component } from 'react';
import Header from './PropHeader.js';
import Content from './PropContent.js';


class PropAndStateExample extends Component {
    constructor() {
    super();
    this.state = {
        header: "Hello wolrd",
        content: "Show me ya moves"
    }
}
render() {
    return (
        <div>
        <Header headerProp={this.state.header}/>
         <Content contentProp={this.state.content}/>
        </div>
        );
    }
}
export default PropAndStateExample;

