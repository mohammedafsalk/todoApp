import React from "react";

function Form({ setInput, toDo, setToDo, input }) {
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setToDo([...toDo, { id: Date.now(), name: input, status: false }]);
    setInput('')
  };

  return (
    <form>
      <input onChange={setInputHandler} value={input} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
