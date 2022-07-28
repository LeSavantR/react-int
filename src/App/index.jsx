import React from 'react';
import { useProvider } from './useProvider';
import { Header } from '../components/Header';
import { Counter } from '../components/Counter';
import { Search } from '../components/Search';
import { List } from '../components/List';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Empty } from '../components/Empty';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Model } from '../components/Model';
import { Form } from '../components/Form';


/* Colocar fechas en las tareas, notificacion, contador atras */
function App() {
  const {
      loading, error, all, model, setModel,
      listCompleted, search, setSearch,
      listSearch, complete, del, addItem
  } = useProvider();

  return (
    <>
      <Header>
        <Counter all={all} finished={listCompleted} />
        <Search search={search} setSearch={setSearch} />
      </Header>
      <List>
        {error && <Error  error={error}/>}
        {loading && <Loading/>}
        {(!loading && !listSearch.length) && <Empty/>}
        {listSearch.map(item => (
          <Card
            key={item.text} text={item.text}
            completed={item.completed} onComplete={() => complete(item.text)}
            onDelete={() => del(item.text)}
          />
        ))}
      </List>
      { model && (
        <Model>
          <Form setModel={setModel} model={model} addItem={addItem} />
        </Model>
        )
      }
      <Button openModel={setModel} model={model} />
    </>
  );
};

export default App;