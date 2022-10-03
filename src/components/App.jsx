import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}


  addContacts = ({ name, number }) => {
   const newContact = {
      id: nanoid(),
      name,
      number,
    }
    const searchRepeatName = this.state.contacts.map(contact => contact.name.toLocaleLowerCase()).includes(newContact.name.toLocaleLowerCase());
    searchRepeatName ? alert(`${newContact.name} is alredy in contacts` ) : this.setState(prevState => ({ contacts: [newContact, ...prevState.contacts] })); 
  }

  filterChange = e => {
     const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    };

  
  filterByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }


  render() {
    const visibleName = this.filterByName();
    const { filter, contacts } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts}></ContactForm>
        {contacts.length !== 0 && 
        <div>
        <h2>Contacts</h2>
        <Filter 
          value={filter} 
          onChange={this.filterChange}>
        </Filter>
        <ContactList visibleName={visibleName} onDeleteContact={this.deleteContact}></ContactList>
        </div>}
      </div>
       
         
      
    );
  };
 
};
