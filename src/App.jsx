import "./reset.css";
import "./App.css";
import React, { useState } from "react";
import uuid from "react-uuid";
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
      <form>
        <div>
          <span>제목</span>
          <input
            type="text"
            value={title}
            onChange={todoTitleOnChangeHandler}
          />
          <span>내용</span>
          <input
            type="text"
            value={content}
            onChange={todoContentOnChangeHandler}
          />
        </div>
        <button onClick={todoAddBtnHandler}>추가하기</button>
      </form>
      <div>
        <h2>Working..🔥</h2>
        <ul>
          {todos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <h3>{todo.title}</h3>
                  <p>{todo.content}</p>
                  <button onClick={() => todoDeleteBtnHandler(todo.id)}>
                    삭제하기
                  </button>
                  <button onClick={() => todoDoneBtnHandler(todo.id)}>
                    완료
                  </button>
                </li>
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
                <li key={todo.id}>
                  <h3>{todo.title}</h3>
                  <p>{todo.content}</p>
                  <button onClick={() => todoDeleteBtnHandler(todo.id)}>
                    삭제하기
                  </button>
                  <button onClick={() => todoCancleBtnHandler(todo.id)}>
                    취소
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
