import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.field}
        type="text"
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </>
  );
}
