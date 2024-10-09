import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
        <Contact key={contact.id} {...contact} />
        </li>
      ))}
    </ul>
  );
}
