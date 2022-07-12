import React from 'react';
import Counter from '../components/Counter';
import Search from '../components/Search';
import List from '../components/List';
import { Card } from '../components/Card';
import Button from '../components/Button';
import { useStorage } from '../Context/useStorage';


function App() {
  // Manejo de estados en App.jsx
  const { list, saveData, loading, error } = useStorage('todos', []);
  const [ search, setSearch ] = React.useState('');

  // Listado de todos los elementos listos.
  const listCompleted = list.filter(item => item.completed).length;

  // Listado de elementos en busqueda
  let listSearch = [];
  if (!search.length >= 1) {listSearch = list;}
  else {listSearch = list.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));}

  // Marcar elementos completados.
  const complete = (text) => {
    let indexItem = list.findIndex(item => item.text === text);
    let newList = [...list];
    newList[indexItem].completed = true;
    saveData(newList);
  }

  // Eliminar elementos deseados.
  const del = (text) => {
    let indexItem = list.findIndex(item => item.text === text);
    let newList = [...list];
    newList.splice(indexItem, 1);
    saveData(newList);
  }

  // Renderizacion de elementos en App.jsx
  return (
    <>
      <Counter finished={listCompleted} all={list.length} />
      <Search search={search} setSearch={setSearch} />
      <List>
        {error ? <p>Hubo un error 😱 </p> : ''}
        {loading ? <p>Estamos cargando 🔃 </p> : ''}
        {(!loading && !listSearch.length) ? <p>Crea tu primer TODO</p> : ''}
        {
          listSearch.map(
            (item) => (
              <Card
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => complete(item.text)}
                onDelete={() => del(item.text)}
              />)
            )
        }
      </List>
      <Button />
    </>
  );
};

export default App;
