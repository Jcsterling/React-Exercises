import React, { Component } from 'react';
import TrainerHeader from './TrainerHeader.js'
import TrainerTableName from './TrainerTableName.js'
import TrainerDataConstructor from './TrainerDataConstructor.js'

class TrainerAvailability extends Component{ 
    
    render(){
        return(
            <div>
                <div>
                    <TrainerHeader /> 
                </div>
                <div> 
                    <TrainerTableName />
                </div>
                <div>
                <TrainerDataConstructor />
                </div>
            </div>
        )
    }
}

export default TrainerAvailability;