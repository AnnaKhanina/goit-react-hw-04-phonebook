import Phonebook from './Phonebook/Phonebook';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid/non-secure';
import General from './General/General';
import Contacts from './Phonebook/Contacts/Contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = window.localStorage.getItem('contacts');
    const parsedContats = JSON.parse(localStorageContacts);
    return parsedContats || [];
  });
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmitHandle = data => {
    const id = nanoid();
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts(prevState => {
      return [...prevState, { name: data.name, number: data.number, id: id }];
    });
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <General title="Phonebook">
      <Phonebook onSubmit={formSubmitHandle} />
      {contacts.length > 0 ? (
        <Contacts
          name="Contacts"
          contactsList={visibleContacts}
          onChange={handleChange}
          value={filter}
          deleteContact={deleteContact}
        />
      ) : (
        <p>Phonebook empty</p>
      )}
    </General>
  );
};

export default App;