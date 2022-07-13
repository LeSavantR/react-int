import React from 'react';
import { TodoProvider } from '../Context';
import { AppUI } from './AppUI';


function App() {
  // Renderizacion de elementos en App.jsx
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
};

export default App;