import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []})
  const [filter, setFilter] = useState('')


    useEffect(()=> {
      let dataStorage = JSON.stringify(contacts);
      window.localStorage.setItem('contacts', dataStorage)
    },[contacts])


     
    const GetContactData = data => {
    const isContactPresent = contacts.find( contact => contact.name === data.name);
    if (isContactPresent) {
      Notiflix.Notify.failure(`${data.name} is already in contacts`)
      return;
    }
    const newContact = { id: nanoid(),...data };
    const updateContacts = [newContact, ...contacts]
    setContacts(updateContacts);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const contactDelete = id => {
    const filtredContacts = contacts.filter((contact)=> contact.id !==id)
    setContacts(filtredContacts)
  }

   return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          addContact={GetContactData}
          filter={filter}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onClick={contactDelete}
        />
      </>
    );

}

export default App;