import { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <Header />
      <Form setInput={setInput} />
      <ToDoList />
    </>
  );
}

export default App;
