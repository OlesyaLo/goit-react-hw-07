import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from "../../redux/contactsOps.js";
import { selecIstLoading, selecIstError } from "../../redux/contactsSlice.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selecIstLoading);
  const isError = useSelector(selecIstError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
}

export default App;
