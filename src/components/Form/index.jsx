import React from 'react';
import './Form.css';

function Form({ setModel, model, addItem }) {

  const [ text, setText ] = React.useState('');

  const onWrit = (event) => {
    setText(event.target.value);
  };
  const onCanc = () => {
    setModel(!model);
  };
  const onAdd = (event) => {
    event.preventDefault();
    addItem(text);
    setModel(!model);
  };

  return (
    <form onSubmit={onAdd}>
      <label>Agregar un Nuevo TODO!</label>
      <textarea value={text} onChange={onWrit} placeholder='Realizar las cuentas del mes.' />
      <section>
        <button className='cancel' type='button' onClick={onCanc}>✗</button>
        <button className='submit' type='submit'>✓</button>
      </section>
    </form>
  );
};

export { Form };