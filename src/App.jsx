import React from 'react';
import Counter from './components/Counter';
import Search from './components/Search';
import List from './components/List';
import { Card } from './components/Card';
import Button from './components/Button';
// import './App.css';

const DEF = [
  {text: 'React', completed: true},
  {text: 'Redux', completed: false},
  {text: 'React Router', completed: true},
]


function App() {

  const [ list, setList ] = React.useState(DEF);
  const [ search, setSearch ] = React.useState('');

  const listCompleted = list.filter(item => item.completed).length;

  let listSearch = [];

  if (!search.length >= 1) {listSearch = list;}
  else {listSearch = list.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));}

  const complete = (text) => {
    let indexItem = list.findIndex(item => item.text === text);
    let newList = [...list];
    newList[indexItem].completed = true;
    setList(newList);
  }

  const del = (text) => {
    let indexItem = list.findIndex(item => item.text === text);
    let newList = [...list];
    newList.splice(indexItem, 1);
    setList(newList);
  }

  return (
      <>
      <Counter finished={listCompleted} all={list.length} />
      <Search search={search} setSearch={setSearch} />
      <List>
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
