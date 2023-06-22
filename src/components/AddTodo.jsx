import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/modules/todo";
import S from "../AddTodoStyle";

const AddTodo = () => {
  // dispatch 가져오기
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const todoTitleOnChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const todoContentOnChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const todoAddBtnHandler = () => {
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
      setTitle("");
      setContent("");

      dispatch(addTodo(newTodo));
    }
  };

  return (
    <S.TodoListPage_Form>
      <S.TodoListPage_FormInputContainer>
        <S.TodoListPage_FormText>제목</S.TodoListPage_FormText>
        <S.TodoListPage_FormInput
          type="text"
          value={title}
          onChange={todoTitleOnChangeHandler}
        />
        <S.TodoListPage_FormText>내용</S.TodoListPage_FormText>
        <S.TodoListPage_FormInput
          type="text"
          value={content}
          onChange={todoContentOnChangeHandler}
        />
      </S.TodoListPage_FormInputContainer>
      <S.TodoListPage_FormBtn
        onClick={(event) => {
          event.preventDefault();
          todoAddBtnHandler();
        }}
      >
        추가하기
      </S.TodoListPage_FormBtn>
    </S.TodoListPage_Form>
  );
};

export default AddTodo;
