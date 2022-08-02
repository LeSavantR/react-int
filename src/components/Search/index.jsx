import './Search.css';

function Search({ search, setSearch, loading }) {

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
      disabled={loading}
    />
  );
};

export { Search };