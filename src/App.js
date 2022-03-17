import React, { useState } from 'react';

import './App.css';

let clickTrack = 0;

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    clickTrack++;
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
    clickTrack++;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter-box">
          <h1>Counter</h1>
          <p>Increment and Decrement</p>
          <div className="counter">
            <button onClick={minusOne}>-</button>
            <span>{count}</span>
            <button onClick={addOne}>+</button>
          </div>
          <p className="click-track">{clickTrack} clicks have been made</p>
        </div>
      </header>
    </div>
  );
}

export default App;
