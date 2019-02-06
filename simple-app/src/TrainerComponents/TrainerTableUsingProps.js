import React, { Component } from 'react';


class TrainerTableUsingProps extends Component {
  render() {
    return (
        <tr>
            <td>{ this.props.trainer.id }</td>
            <td>{ this.props.trainer.name }</td>
            <td>{ this.props.trainer.startTime }</td>
            <td>{ this.props.trainer.endTime }</td>
        </tr>
      );
  }
}

export default TrainerTableUsingProps;
