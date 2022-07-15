import React from 'react';
import { Context } from '../../Context';
import './Form.css';

function Form(){

  const [ text, setText ] = React.useState('');
  const { addItem, model, setModel } = React.useContext(Context);

  const onWrit = (event) => {
    setText(event.target.value);
  };
  const onCanc = () => {
    setModel(!model);
  };
  const onAdd = (event) => {
    event.preventDefault();
    if (text !== '') {
      addItem(text);
      setModel(!model);
    } else {
      return false;
    }
  };

  return (
    <form onSubmit={onAdd}>
      <label>Agregar un Nuevo TODO!</label>
      <textarea autoFocus value={text} onChange={onWrit} placeholder='Realizar las cuentas del mes.' />
      <section>
        <button className='cancel' type='button' onClick={onCanc}>✗</button>
        <button className='submit' type='submit'>✓</button>
      </section>
    </form>
  );
};

export { Form };