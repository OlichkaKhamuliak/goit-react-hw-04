import { useState } from 'react';
import css from './SearchBar.module.css';
import { MdOutlineImageSearch } from 'react-icons/md';
export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
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
          required
          value={query}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          <MdOutlineImageSearch size="30px" />
        </button>
      </form>
    </header>
  );
};
