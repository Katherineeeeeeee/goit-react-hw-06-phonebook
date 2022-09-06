// import { useState, useEffect } from 'react';
import s from './Phonebook/Phonebook.module.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  addContactAction,
  removeContactAction,
} from '../redux/contacts/contacts-actions';
import { filterAction } from 'redux/filter/filter-actions';
import {
  getFilterContacts,
  getContacts,
} from '../redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

//redux

import ContactForm from './Phonebook/Form-elements/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/Form-elements/ContactList';

const App = () => {
  // const arrayContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  //redux

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const filtredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  const addContact = data => {
    dispatch(addContactAction(data));
  };

  const removeContact = id => {
    dispatch(removeContactAction(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(filterAction(target.value));
  };

  //old
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem('contacts'));
  //   return value ?? arrayContacts;
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const submitContact = data => {
  //   if (isDublicate(data)) {
  //     return alert(`${data.name} : ${data.number} is already in list`);
  //   }

  // setContacts(prevContacts => {
  //   const newContact = {
  //     ...data,
  //     id: nanoid(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   return [newContact, ...prevContacts];
  // });
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const isDublicate = ({ name, number }) => {
  //   const result = contacts.find(
  //     item => item.name === name && item.number === number
  //   );
  //   return Boolean(result);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getfilterContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.number.includes(filter.toLowerCase())
  //   );
  // };

  // const filterContacts = getfilterContacts();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />

      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList contacts={filtredContacts} removeContact={removeContact} />
    </div>
  );
};

export default App;
