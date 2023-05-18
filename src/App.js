import "./App.css";

function App() {
  const data = "welcome";
  return (
    <div>
      <Hello />
      <Show item={data} />
    </div>
  );
}

export default App;

function Hello() {
  return <h1 className="color">hello world</h1>;
}

function Show(props) {
  return <p>this is data - {props.item}</p>;
}
