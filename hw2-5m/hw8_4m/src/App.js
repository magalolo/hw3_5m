
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEntry, setEntries } from './actions';

function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    dispatch(setEntries(savedEntries));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim()) {
      const newEntry = {
        name: inputValue,
        date: new Date().toLocaleDateString(),
      };
      dispatch(addEntry(newEntry));
      setInputValue('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a name"
      />
      <button onClick={handleButtonClick}>Add name</button>
      <div>
        {entries.map((entry, index) => (
          <p key={index}>{entry.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
