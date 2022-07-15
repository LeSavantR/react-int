import React from "react";
import { Context } from '../Context';
import { Counter } from "../components/Counter";
import { Search } from "../components/Search";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Model } from "../components/Model";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Empty } from "../components/Empty";


function AppUI() {

  const { error, loading, listSearch, complete, del, model, setModel } = React.useContext(Context);

  return (
    <>
      {(!loading && !listSearch.length) ? <Header/> : <Counter/>}
      <Search />
      <List>
        {error && <p>Ha fallado, hubo un error {error}</p>}
        {loading && <p>Cargando...</p>}
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
          <Form />
        </Model>
        )
      }
      <Button openModel={setModel} model={model} />
    </>
  );
};

export { AppUI };