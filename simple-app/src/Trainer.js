import React, { Component } from 'react';
import TrainerHeader from './TrainerHeader';
import TrainerTableName from './TrainerTableName';
import TrainerTable from './TrainerTable';

class Trainer extends Component {
    render(){
        return(
            <div>
                <TrainerHeader />  
                <TrainerTableName />
                <TrainerTable />
            </div>
        )

    }
}

export default Trainer;