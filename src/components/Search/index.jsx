import React from 'react';
import { Context } from '../../Context';
import './Search.css';

function Search() {

  const { search, setSearch } = React.useContext(Context);

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <input
      className='search'
      type="text"
      placeholder="Buscar..."
      value={search}
      onChange={onSearch}
    />
  );
};

export { Search };