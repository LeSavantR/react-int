import React from 'react';
import './Search.css';

function Search({ search, setSearch }) {

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