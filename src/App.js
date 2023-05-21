import { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  return (
    <>
      <Header />
      <Form toDo={toDo} setToDo={setToDo} input={input} setInput={setInput} />
      <ToDoList toDo={toDo} setToDo={setToDo} />
    </>
  );
}

export default App;
