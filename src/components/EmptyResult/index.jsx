function EmptyResult({ search }){
  return (
    <li className='item'>
      <p className='item-p'>
        No hay TODOs para {search}
      </p>
    </li>
  );
};

export { EmptyResult };