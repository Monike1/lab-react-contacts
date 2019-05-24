import React, {Component} from 'react';
import './App.css';
import contactsDataBase from './contacts.json';
import Contact from './components/Contact';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactsDataBase:contactsDataBase,
      contacts: contactsDataBase.slice(0 , 5)    
    }
    this.handleDeleteContact.bind(this)
  }

  handleClickAdd = () =>{
    let newContact = this.state.contactsDataBase[Math.floor(Math.random() * this.state.contactsDataBase.length)];
    let newContacts = [...this.state.contacts];
    newContacts.push(newContact);

    this.setState({
      contacts: newContacts
    });
  }

  handleClickSortName = () => {
    console.log('this works');
    let sortedContacts = [...this.state.contacts];
    sortedContacts.sort(function(contactA, contactB) {
      if (contactA.name > contactB.name) {return 1}
      if (contactA.name < contactB.name) {return -1}
      else return 0;
    });
    this.setState({
      contacts: sortedContacts
    });
  }

  handleClickSortPopularity = () => {
    let sortedContacts = [...this.state.contacts];
    sortedContacts.sort(function(contactA, contactB) {
      if (contactA.popularity > contactB.popularity) {return -1}
      if (contactA.popularity < contactB.popularity) {return 1}
      else return 0;
    });
    this.setState({
      contacts: sortedContacts
    });
  }

  handleDeleteContact = (key) => {
    let editedByDeleteContacts = [...this.state.contacts];
    editedByDeleteContacts.splice(key, 1)
    this.setState({
      contacts: editedByDeleteContacts
    })
  }

  // handleClickDelete = (e) => {
  //   let editedByDeletingContacts = [...this.state.contacts];
  //   let index = editedByDeletingContacts.prototype.slice.call(el.parentElement.children).indexOf(el)
  //   // let contactIndex = editedByDeletingContacts.indexOf(e);
  //   editedByDeletingContacts.splice(index, 1);
  //   this.setState({
  //     contacts: editedByDeletingContacts
  //   });
  // }

  render() {
   console.log(this.state.contacts)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
        <main>
          <div class="buttons-row">
            <button onClick={this.handleClickAdd}>Add Random Contact</button> 
            <button onClick={this.handleClickSortName}>Sort by Name</button> 
            <button onClick={this.handleClickSortPopularity}>Sort by Popularity</button> 
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className="tablecell">Picture</th>
                <th className="tablecell">Name</th>
                <th className="tablecell">Popularity</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.contacts.map((contact, index) => {
                  return <Contact 
                  key={index.toString()}
                  pictureUrl={contact.pictureUrl} 
                  alt={contact.name} name={contact.name} 
                  popularity={contact.popularity}
                  handleDeleteContact={this.handleDeleteContact} /> 
                })
              }
            </tbody>
          </table>
        </main>
      </div>
    );
}
}

export default App;


// -------------------------------------------------------

// import React, { Component } from 'react';
// import Task from "./Task"

// class App extends Component {
//   constructor() {
//     super()
//     this.updateContacts = this.updateContacts.bind(this)
//   }

//   state = {contacts: ["Getting Coffee", "Task2", "Task3", "Getting Coffee"]}

//   updateContacts(indexN) {
//     /***  
//       State shouldn't be modified directly and splice 
//       modifies the orginal array it's called on. 
//       Therefore we're using the spread operator to copy the array first. ;)
//     ***/
//     var newContactList = [...this.state.tasks]
//     newContactList.splice(indexN, 1)
//     this.setState({contacts: newContactList})
//   }

//   render() {
//     return (
//       <div>
//         {this.state.tasks.map((aTask, index) => 
//           <Task index={index.toString()} deleteTask={this.updateToDoList} taskName={aTask} />
//         )}
//       </div>
//     )
//   }
// }

// export default ToDo;
