import React, { Component } from 'react';


class PropExample extends Component{

render() { 
        return (
            <div>
                <div>
                   <h1> { this.props.sampleText } </h1>
                </div>
            </div>
        );

    }

}

export default PropExample;





