import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact, index) => (
        <li className={css.contactContainer} key={index}>
          <div className={css.icons}>
            <FaUser className={css.firstIcon} size="14" />
            <FaPhoneAlt size="14" />
          </div>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
