import React, { Component } from 'react';
import TrainerTableUsingProps from './TrainerTableUsingProps.js'

class TrainerDataConstructor extends Component{
    constructor() {
    super();
    this.state = {
        trainers: [

            {
                id: "114",
                name: "Deckard Shaw",
                startTime: "09:00",
                endTime: "17:00"
            },
            {
                id: "007",
                name: "Domonic Torretto",
                startTime: "10:00",
                endTime: "17:30"
            },
            {
                id: "118",
                name: "Luke Hobbs",
                startTime: "10:00",
                endTime: "17:30"
            }
        ]
    }
    }

render() {
    return(
         <div>
             <div>
            <table width="800" align="center" class="table table-striped">

                <tr>
                    <th>Trainer ID</th>
                    <th>Trainer name</th>
                    <th>Start time</th>
                    <th>End time</th>
                </tr>

             {
                this.state.trainers.map((trainer) => (
                <TrainerTableUsingProps key={trainer.id.toString()} trainer= {trainer} />
           ))
        }
        </table>
    </div>
    </div>
    );
}
}

export default TrainerDataConstructor;



    
