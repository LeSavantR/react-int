function Error ({ error }){
  return (
    <li className='item'>
      <p className='item-p'>
        Ha fallado, tuvimos un error de tipo {error}
      </p>
    </li>
  );
};

export { Error };