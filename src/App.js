import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <Counter count={count} />
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
}

export default App;
