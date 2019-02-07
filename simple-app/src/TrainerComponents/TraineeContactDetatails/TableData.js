import React, { Component} from 'react';

class TableData extends Component{
    render(){
      return(
        <tr>
          <td>{this.props.trainee.id}</td>
          <td>{this.props.trainee.name}</td>
          <td>{this.props.trainee.PhoneNumber}</td>
          <td>{this.props.trainee.Email}</td>
        </tr>
      );
    }
}

export default TableData;