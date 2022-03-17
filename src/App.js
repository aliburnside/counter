import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-box">
          <h1>Counter</h1>
          <p>Increment and Decrement</p>
          <div className="counter">
            <button>-</button>
            <span>{count}</span>
            <button onClick={addOne}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
