import "./reset.css";
import "./App.css";
import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Working from "./components/Working";
import Done from "./components/Done";

// import { styled } from "styled-components";

function App() {
  const [todos, setTodos] = useState([]);


  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todoTitleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const todoContentOnChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const todoAddBtnHandler = (event) => {
    event.preventDefault();
    if (title === "" && content === "") {
      alert("제목과 내용을 입력해주세요.");
    } else if (title === "") {
      alert("제목을 입력해주세요.");
    } else if (content === "") {
      alert("내용을 입력해주세요.");
    } else {
      const newTodo = {
        id: uuid(),
        title,
        content,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setContent("");
    }
  };
  const todoDeleteBtnHandler = (id) => {
    const deleteTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deleteTodo);
    alert("삭제되었습니다.");
  };

  const todoDoneBtnHandler = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = true;
      }
      return setTodos([...todos]);
    });
  };

  const todoCancleBtnHandler = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = false;
      }
      return setTodos([...todos]);
    });
  };

  return (
    <div id="layout">
      <header id="header">
        <h1>My Todo List</h1>
        <span>React</span>
      </header>
      <AddTodo todos={todos} setTodos={setTodos} />
      <div>
        <h2>Working..🔥</h2>
        <ul>
          {todos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo) => {
              return (
                <Working
                  todo={todo}
                  todoDoneBtnHandler={todoDoneBtnHandler}
                  todoDeleteBtnHandler={todoDeleteBtnHandler}
                />
              );
            })}
        </ul>
      </div>
      <div>
        <h2>Done..!🎉</h2>
        <ul>
          {todos
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map((todo) => {
              return (
                <Done
                  todo={todo}
                  todoCancleBtnHandler={todoCancleBtnHandler}
                  todoDeleteBtnHandler={todoDeleteBtnHandler}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
