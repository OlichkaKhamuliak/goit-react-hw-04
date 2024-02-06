import { useState } from 'react';
import css from './SearchBar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';
// import toast from 'react-hot-toast';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [emptyInput, esetEmptyInput] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    esetEmptyInput(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      esetEmptyInput(true);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          <MdOutlineImageSearch className={css.svg} size="30px" />
        </button>
      </form>
      {emptyInput && <ErrorMessage>Please enter text to search images.</ErrorMessage>}
    </header>
  );
};
