import React, { Component } from 'react';


class ChangeTextClass extends Component{
    render(){
        return(
            <button onClick={this.props.buttonfunction}> 
                click!
            </button>
        )
                
    }
}
    
export default ChangeTextClass;