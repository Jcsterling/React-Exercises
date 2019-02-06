import React, { Component } from 'react';
import Header from './PropHeader.js';
import Content from './PropContent.js';
import ChangeTextClass from './ChangeTextClass.js'
class ChangeStateConstructor extends Component{
    constructor() {
    super();
    this.state = {
        header: "Hello world",
        content: "Show me ya moves"
    }
    }

render() {
    return (
        <div>
        <Header headerProp={this.state.header}/>
         <Content contentProp={this.state.content}/>
         <ChangeTextClass buttonfunction = {this.ChangeText}/>
        </div>
        );
    }
    ChangeText = () => {
    this.setState({header : "Falcon pwaunch!!!"})
}
}


export default ChangeStateConstructor;