import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Check if key is provided and is a non-empty string
  if (!key || typeof key !== 'string' || undefined === initialValue) {
    throw new Error('Invalid key provided to useLocalStorage.');
  }

  // Check if localStorage is available
  if (typeof window === 'undefined' || !window.localStorage) {
    // Handle the case where localStorage is not available
    console.warn('localStorage is not available. State will not persist.');
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
  }

  // Get data from local storage or use initial value
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  // console.log(key,storedValue, initial);

  // State to store the current value
  const [value, setValue] = useState(initial);

  // Function to set a new value to both state and local storage
  const setStoredValue = (newValue) => {
    if(typeof newValue === 'function') {
      newValue = newValue(value);
    }
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
