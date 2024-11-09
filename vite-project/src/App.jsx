import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  function add() {
    if (counter>=20) return;
    setCounter(counter + 1);
  }

  function sub() {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter Value: {counter}</h1>  

      <button onClick={add}>Add</button>
      <br />
      <button onClick={sub}>Subtract</button>
    </>
  );
}

export default App;
