import React from 'react';
import { useStorage } from './useStorage';


function useProvider() {
  // Manejo de estados en App.jsx
  const { list, saveData, loading, error } = useStorage('todos', []);
  const [ search, setSearch ] = React.useState('');
  const [ model, setModel ] = React.useState(false);

  // Listado de todos los elementos listos.
  const all = list.length;
  const listCompleted = list.filter(item => item.completed).length;

  // Listado de elementos en busqueda
  let listSearch = [];
  if (!search.length >= 1) {listSearch = list;}
  else {
    listSearch = list.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
  };

  // Marcar elementos completados.
  const addItem = (text) => {
    let newList = [...list];
    newList.push({ text, completed: false });
    saveData(newList);
  }

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

  return ({
      loading, error, all, model, setModel,
      listCompleted, search, setSearch,
      listSearch, complete, del, addItem
  });
};


export { useProvider };