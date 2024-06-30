import css from './Contact.module.css';
import clsx from 'clsx';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <ul>
        <li className={clsx(css.contactInfo, css.contactName)}>
          <FaUser className={css.firstIcon} size="12" />
          <p className={css.contactInfoFirst}>{name}</p>
        </li>
        <li className={css.contactInfo}>
          <FaPhoneAlt size="12" />
          <p>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
