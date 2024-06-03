import React from "react";

export default function Task({ item, handleDelete, handleEdit }) {
  return (
    <div className="result-item" key={item?.id}>
      <li>{item?.todo}</li>
      <li>
        <button onClick={() => handleEdit(item?.id)}> Edit </button>
        <button onClick={() => handleDelete(item?.id)}>Delete</button>
      </li>
    </div>
  );
}
