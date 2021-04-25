import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './share/Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import initialContacts from './data/contacts.json';

class Phonebook extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  checkContactName = name => {
    console.log('before');
    console.log(
      this.state.contacts.find(contact =>
        contact.name === name ? 'ok' : 'not',
      ),
    );
    console.log('after');
  };

  getDataFromContactForm = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const normalizedThisFilterState = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedThisFilterState),
    );

    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    // );

    // const visibleContactsByTel = this.state.contacts.filter(contact =>
    //   contact.number.includes(this.state.filter),
    // );

    return (
      <Section>
        <ContactForm getData={this.getDataFromContactForm} />
        <br />
        <Filter
          valueState={this.state.filter}
          filterByName={this.changeFilter}
        />
        <ContactList
          items={visibleContacts}
          // items={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
export default Phonebook;
