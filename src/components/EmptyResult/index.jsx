function EmptyResults({ search }){
  return (
    <li className='item'>
      <p className='item-p'>
        No hay TODOs para los valores {search}
      </p>
    </li>
  );
};

export { EmptyResults };