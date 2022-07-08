import React from 'react';
import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import { Card } from './components/Card';
import Button from './components/Button';
// import './App.css';

const DEF = [
  {id: 1, text: 'React', completed: true},
  {id: 2, text: 'Redux', completed: false},
  {id: 3, text: 'React Router', completed: true},
]


function App() {

  const [ list, setList ] = React.useState(DEF);
  const [ search, setSearch ] = React.useState('');

  const listCompleted = list.filter(item => item.completed).length;

  let listSearch = [];

  if (!search.length >= 1) {
    listSearch = list;
  } else {
    listSearch = list.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));
  }

  const complete = (text) => {
    let newList = [...list];
    newList.forEach(item => {
      if (item.text === text) {
        item.completed = !item.completed;
      }
    });
  }

  return (
      <>
      <Counter finished={listCompleted} all={list.length} />
      <Search search={search} setSearch={setSearch} />
      <List>
        {listSearch.map((item) => (<Card key={item.id} text={item.text} id={item.id} completed={item.completed} />))}
      </List>
      <Button />
    </>
  );
};

export default App;
