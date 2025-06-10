import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
    alert("Count can't be negative");
    return setCount(0);
  };
  const reset = () => setCount(0);

  return (
    <div class="container">
      <h1 class="heading"><u>COUNTER APP</u></h1>
      <h2 class="count"><span class="span">Current Count: </span>{count}</h2>
      <div class="buttonGroup">
        <button class="buttonGreen" onClick={increment}>+</button>
        <button class="buttonRed" onClick={decrement}>-</button>
        <button class="buttonYellow" onClick={reset}>RESET</button>
      </div>
    </div>
  );
}