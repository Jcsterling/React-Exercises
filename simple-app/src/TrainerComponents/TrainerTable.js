import React, { Component } from 'react';
import TrainerField1 from './TrainerField1';
import TrainerField2 from './TrainerField2';
import TrainerField3 from './TrainerField3';

class TrainerTable extends Component{
    render(){
        return(
    <div name = "table">
        <table width="100%" border="2" BORDERCOLOR = "#4d04ea" bgcolor = "#f2c6c6">
            <tr>
                <th>Trainer name</th>
                <th>Start name</th>
                <th>End time</th>
            </tr>
            <TrainerField1 />
            <TrainerField2 />
            <TrainerField3 />
            </table>
            
        </div>
        )
    }
}

export default TrainerTable;