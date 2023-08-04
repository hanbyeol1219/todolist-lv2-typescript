import GlobalStyleReset from "../GlobalStyleReset";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import S from "../AboutTodoStyle";
import { RootState } from "../redux/config/configStore";

const AboutTodo = () => {
  const { todos } = useSelector((state: RootState) => state.todoReducer);
  console.log(todos);

  const params = useParams();

  const foundTodo = todos.find((todo) => {
    // console.log("params.id", params.id);
    // console.log("todo.id", todo.id);
    return todo.id === params.id;
  });

  console.log(foundTodo);

  return (
    <>
      <GlobalStyleReset />
      <S.AboutTodoPageLayout>
        <S.AboutTodoPage>
          <S.AboutTodoPage_TodoIdTitle>
            ID :
            <S.AboutTodoPage_TodoIdValue>
              {foundTodo.id}
            </S.AboutTodoPage_TodoIdValue>
          </S.AboutTodoPage_TodoIdTitle>
          <S.AboutTodoPage_TodoTitle>
            {foundTodo.title}
          </S.AboutTodoPage_TodoTitle>
          <S.AboutTodoPage_TodoContent>
            {foundTodo.content}
          </S.AboutTodoPage_TodoContent>
          <Link to={"/"}>
            <S.AboutTodoPage_PrevButton>이전으로</S.AboutTodoPage_PrevButton>
          </Link>
        </S.AboutTodoPage>
      </S.AboutTodoPageLayout>
    </>
  );
};

export default AboutTodo;
