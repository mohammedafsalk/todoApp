import React from "react";
import ToDos from "./ToDos";

function ToDoList({ toDo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDo.map((item) => (
          <ToDos key={item.id} title={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
