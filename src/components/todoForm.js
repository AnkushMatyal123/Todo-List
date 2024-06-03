import React from "react";

export default function TodoForm({ todo, setTodo, handleSubmit, editId }) {
  return (
    <form className="input-div" onSubmit={handleSubmit}>
      <input
        value={todo}
        placeholder="Enter the task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button> {editId ? "Edit" : "Add"}</button>
    </form>
  );
}
