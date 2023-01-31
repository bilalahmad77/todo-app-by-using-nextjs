"use client";
import React, {useState} from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Item 1 ", completed: false},
    { todoText: "Item 2 ", completed: false },
    { todoText: "Item 3 ", completed: false},
    { todoText: "Item 4 ", completed: false },
  ]);
  const onClickHandler = (myElm: any) => {
    const newTodos = todos.map((todo) => {
     
      if (todo.todoText == myElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
   
    setTodos(newTodos);
  };
  return (
    <>
      <div>Todo App By Bilal Ahmad</div>
      <input
        placeholder="Please add Todo here"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((element) => {
          return (
            <li
              style={{
                color: element.completed ? "red" : "blue",
                listStyle: "none",
              }}
              key={element.todoText}>
              <input
                type="checkbox"
                checked={element.completed}
                onChange={() => {
                  onClickHandler(element);
                }}/>
              {element.todoText}
              <button
                onClick={() => {
                  deleteTodo(element);
                }}>
                {" "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}