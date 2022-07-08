import './Search.css';

function Search() {

  const onSearch = (event) => {
    console.log(event.target.value);
  }

  return (
      <input
        className='search'
        type="text"
        placeholder="Buscar..."
        onChange={onSearch}
      />
  );
};

export default Search;