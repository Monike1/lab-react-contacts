import React, { Component } from 'react';

class DeleteButton extends Component {

render() {
  return (
    <button class="button-delete" onClick={()=>{this.props.handleDeleteContact(this.props.index)}}>Delete</button>
    )
  }
}

export default DeleteButton;