import React, {Component} from 'react';
import DeleteButton from './DeleteButton';


class Contact extends Component {
  render () {
    return(
      <tr className="contact">
      <td className="tablecell">
        <img className="image" src={this.props.pictureUrl} alt={this.props.alt}/>
      </td>
      <td className="tablecell">
        {this.props.name}
      </td>
      <td className="tablecell">
        {this.props.popularity}
      </td>
      <td>
        <DeleteButton handleDeleteContact={this.props.handleDeleteContact}/> 
      </td>
    </tr>
    )
  }
}

export default Contact;
// const Contact = (props) => {
//   return (
   
//   )  
// }

// export default Contact;