import React from 'react';


function useStorage(key, initialValue) {

  // useState para loading.
  const [ loading, setLoading ] = React.useState(true);

  // useState para error.
  const [ error, setError ] = React.useState(false);

  // Cambio de estado en la lista.
  const [ list, setList ] = React.useState(initialValue);

  // useState para simular consulta a una API.
  React.useEffect(() => {

    // Simulacion de carga de datos.
    setTimeout(() => {
      try {
          //  Leer datos en LocalStorage.
        const localStore = localStorage.getItem(key);
        let parsedStore;

        if (!localStore) {
          localStorage.setItem(key, JSON.stringify(initialValue));
          parsedStore = initialValue;
        } else {
          parsedStore = JSON.parse(localStore);
        };

        setList(parsedStore);
        setLoading(false);
      } catch (error) {
        setError(error);
      };

    }, 3000);
  });

  // Funcion para almacenar los datos en LocalStorage.
  const saveData = (saveList) => {
    try {
      const stringifiedList = JSON.stringify(saveList);
      localStorage.setItem(key, stringifiedList);
      setList(saveList);
    } catch (error) {
      setError(error);
    };
  };

  // Finalmente.
  return { list, saveData, loading, error };
};

export { useStorage };