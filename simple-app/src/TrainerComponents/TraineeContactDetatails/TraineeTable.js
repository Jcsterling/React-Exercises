import React, { Component} from 'react';
import TableData from './TableData';


class MyTable extends Component {
    constructor(){
        super();
        this.state={
            trainees : [
                {
                    name : "mike walzalski",
                    id : "2220",
                    PhoneNumber : "01070694532",
                    Email : "mike@gmail.com"
                },
                {
                    name : "Qi-gon jin",
                    id : "3000",
                    PhoneNumber : "09011105010",
                    Email : "qi@qa.com"
                },
                {
                    name : "Steve rodgers",
                    id : "4112",
                    PhoneNumber : "02072071453",
                    Email : "steve@gmail.com"
                }
            ]
        }
    }
    render(){
        return(
        <div name ="table">
            <table width="100%" border="1" align='center'>
                <tr>
                    <th>Trainne ID</th>
                    <th>Trainee name</th>
                    <th>PhoneNumber</th>
                    <th>Email</th>
                </tr>
                {
                    this.state.trainees.map((trainee) => (
                        <TableData key={trainee.id.toString()} trainee={trainee}/>
                    ))
                }
            </table>
        </div>
        );
    }
}

export default MyTable;