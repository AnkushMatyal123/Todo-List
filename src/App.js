import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/todoForm";
import Task from "./components/task";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 5);
    user();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      const updatedTodo = todos?.map((item) => {
        const data =
          item?.id === editId
            ? { id: item.id, todo: todo }
            : { id: item?.id, todo: item?.todo };
        return data;
      });
      console.log(updatedTodo, "243dfdf");
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
    } else {
      if (todo) {
        setTodos([{ id: new Date(), todo: todo }, ...todos]);
        setTodo("");
        setEditId(0);
      }
    }
  }
  function handleDelete(id) {
    console.log(id, todos, "840284234023408");
    const delTodo = todos?.filter((item) => item?.id !== id);
    console.log(delTodo, "42083248023048");
    setTodos(delTodo);
  }
  function handleEdit(id) {
    const editTodo = todos?.find((item) => item?.id === id);
    setTodo(editTodo?.todo);
    setEditId(id);
  }
  async function user() {
    try {
      const userDetail = await axios.get("https://randomuser.me/api");
      console.log(userDetail?.data?.results, "08240842083");
    } catch (error) {}
  }

  return (
    <div className="todo">
      <h1>Your Daily Todo List {count}</h1>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
        editId={editId}
      />
      {todos.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Todo not found </p>
      ) : (
        <div className="result">
          {todos?.map((item) => {
            return (
              <Task
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
