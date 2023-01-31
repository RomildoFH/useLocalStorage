import { useEffect, useState } from 'react';

const getStoredData = (key, initialState = '') => {
  const storedData = JSON.parse(localStorage.getItem(key));
  return storedData ? storedData : initialState;  
};

const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(() => getStoredData(key, initialState));

  useEffect(() => {
    const saveData = JSON.stringify(state);
    localStorage.setItem(key, saveData);
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;