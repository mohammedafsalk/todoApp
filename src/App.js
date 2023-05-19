import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={add}>Add</button>
      <h1>Counter:{count}</h1>
    </div>
  );
}

export default App;
