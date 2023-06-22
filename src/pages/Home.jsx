import GlobalStyleReset from "../GlobalStyleReset";
import React from "react";
import AddTodo from "../components/AddTodo";
import { useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import S from "../HomeStyle";

function Home() {
  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <>
      <GlobalStyleReset />
      <S.TodoListPageLayout>
        <S.TodoListPageHeader>
          <h1>My Todo List</h1>
          <span>React</span>
        </S.TodoListPageHeader>

        <AddTodo todos={todos} />

        <S.TodoListPage_TodoListContainer>
          <S.TodoListPage_TodoStateTitle>
            Working..🔥
          </S.TodoListPage_TodoStateTitle>
          <S.TodoListPage_TodoList>
            {todos
              .filter((todo) => {
                return todo.isDone === false;
              })
              .map((todo) => {
                return <TodoItem todo={todo} />;
              })}
          </S.TodoListPage_TodoList>
        </S.TodoListPage_TodoListContainer>

        <S.TodoListPage_TodoListContainer>
          <S.TodoListPage_TodoStateTitle>
            Done..!🎉
          </S.TodoListPage_TodoStateTitle>
          <S.TodoListPage_TodoList>
            {todos
              .filter((todo) => {
                return todo.isDone === true;
              })
              .map((todo) => {
                return <TodoItem todo={todo} />;
              })}
          </S.TodoListPage_TodoList>
        </S.TodoListPage_TodoListContainer>
      </S.TodoListPageLayout>
    </>
  );
}

export default Home;
