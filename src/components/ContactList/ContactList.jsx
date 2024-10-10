import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";
import { selecIstLoading, selecIstError } from "../../redux/contactsSlice.js";
import { selectVisibleContacts } from '../../redux/contactsSlice.js';
// import Loader from "../Loader/Loader.jsx";
// import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";


import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selecIstLoading);
  const isError = useSelector(selecIstError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 
  return (
    <>

    <ul className={css.list}>
      {filteredContacts.length > 0 
        ? filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact key={contact.id} {...contact} />
          </li>
        ))
        : !isLoading && !isError && <p className={css.error}>This contact is not found</p>}
    </ul>
    {/* {isLoading && <Loader />}
    {isError && <ErrorMessage />} */}
    </>
  );
    }
