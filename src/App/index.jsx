import React from 'react';
import { useProvider } from './useProvider';
import { Header } from '../components/Header';
import { Counter } from '../components/Counter';
import { Search } from '../components/Search';
import { List } from '../components/List';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';
import { Empty } from '../components/Empty';
import { EmptyResult } from '../components/EmptyResult';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Model } from '../components/Model';
import { Form } from '../components/Form';


// Colocar fechas en las tareas, notificacion, contador atras
function App() {
  const {
      loading, error, all, model, setModel,
      listCompleted, search, setSearch,
      listSearch, complete, del, addItem
  } = useProvider();

  return (
    <>
      <Header>
        <Counter
          all={all}
          finished={listCompleted}
          loading={loading}
        />
        <Search
          search={search}
          setSearch={setSearch}
          loading={loading}
        />
      </Header>
      <List
        error={error}
        loading={loading}
        all={all}
        listSearch={listSearch}
        onError={() => <Error error={error} />}
        onLoading={() => <Loading/>}
        onEmpty={() => <Empty/>}
        onEmptyResult={() => <EmptyResult search={search} />}
        render={todo => (
          <Card
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => complete(todo.text)}
            onDelete={() => del(todo.text)}
          />
        )}
      />
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