import './List.css';

/* Que pendejada eso, pero el doble negacion en un numero si ayuda */
function List({ error, onError, loading, onLoading, all, onEmpty, listSearch, onEmptyResult, children, render }) {

  const child = children || render;

  return (
    <section className='TodoList-container'>
      <ul>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !all) && onEmpty()}
        {(!!all && !listSearch.length) && onEmptyResult()}
        {listSearch.map(child)}
      </ul>
    </section>
  );
};

export { List };