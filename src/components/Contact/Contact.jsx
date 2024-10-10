import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.containerContact}>
      <div className={css.containerUserData}>
        <p className={css.text}>
          <FaPhone className={css.iconPerson} />
          {name}
        </p>
        <p className={css.text}>
          <IoPerson className={css.iconPhone} />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => handleDelete(id)}
        id = {id}>
        Delete
      </button>
    </div>
  );
}
