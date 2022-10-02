import { Component } from "react";
import { nanoid } from 'nanoid'

export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}


  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  addContacts = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }
    
    this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }));  
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addContacts();
    this.reset();
  }

  reset = () => {
   this.setState({ name: '', number: '', });
  }
  
  filterByName = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {

    const visibleName = this.filterByName();
    console.log(this.state.contacts)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
           <label>
            Number
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
         <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </label>
        {this.state.contacts.length !== 0 &&    
            <ul>
              {visibleName.map(contact =><li key={contact.id}>{contact.name}: {contact.number}</li>)}
            </ul>}
        
       
         
      </div>
    );
  };
 
};
