import React from 'react';
import { useProvider } from './useProvider';
import { Header } from '../components/Header';
import { Counter } from "../components/Counter";
import { Search } from "../components/Search";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Model } from "../components/Model";
import { Form } from "../components/Form";


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
        {error && <p>Ha fallado, hubo un error {error}</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !listSearch.length) && <p>Crea tu primer TODO!</p>}
        {listSearch.map(item => (
          <Card
            key={item.text} text={item.text}
            completed={item.completed} onComplete={() => complete(item.text)}
            onDelete={() => del(item.text)}
          />
        ))}
      </List>
      { model && (
        <Model setModel={setModel}>
          <Form setModel={setModel} model={model} addItem={addItem} />
        </Model>
        )
      }
      <Button openModel={setModel} model={model} />
    </>
  );
};

export default App;