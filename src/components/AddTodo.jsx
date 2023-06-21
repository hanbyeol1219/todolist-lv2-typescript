import React from "react";
import uuid from "react-uuid";
import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
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

  return (
    <form>
      <div>
        <span>제목</span>
        <input type="text" value={title} onChange={todoTitleOnChangeHandler} />
        <span>내용</span>
        <input
          type="text"
          value={content}
          onChange={todoContentOnChangeHandler}
        />
      </div>
      <button onClick={todoAddBtnHandler}>추가하기</button>
    </form>
  );
};

export default AddTodo;
