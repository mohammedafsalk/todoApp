import React from "react";

function ToDos({ title }) {
//   const deleteHandler = () => {

//   };

  return (
    <div className="todo">
      <li className="todo-item">{title}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDos;
