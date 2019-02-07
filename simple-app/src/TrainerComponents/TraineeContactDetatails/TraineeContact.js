import React, { Component } from 'react';

import TrainerHeader from './TrainerHeader.js'
import MyTable from './TraineeTable.js'
import TableTitle from './TableTitle.js'

class TrainerContact extends Component{ 
    
    render(){
        return(
            <div>
                <div>
                    <TrainerHeader /> 
                </div>
                <div> 
                    <TableTitle />
                </div>
                <div>
                    <MyTable />
                </div>
            </div>
        )
    }
}

export default TrainerContact;