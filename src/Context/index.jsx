import React from 'react';

const Context = React.createContext();


function TodoProvider(props) {
  return (
    <Context.Provider value={{}}>
      {props.children}
    </Context.Provider>
  );
};


<Context.Consumer></Context.Consumer>


export { Context, TodoProvider };