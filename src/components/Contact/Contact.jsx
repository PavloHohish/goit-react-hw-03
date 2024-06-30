import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.contactInfoFirst}>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}
