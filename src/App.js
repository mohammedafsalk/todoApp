import "./App.css";

function App() {
  let count = 0;
  function add() {
    count = count++;
  }
  return (
    <div>
      <button onClick={add}>Add</button>
      <h1>Counter:{count}</h1>
    </div>
  );
}

export default App;
