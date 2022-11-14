import React from 'react';

import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from './Contact';
const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

function Contacts() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className="contacts__list">
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
