import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todo";
import { Link } from "react-router-dom";
import S from "../TodoItemStyle";
import { Todo } from "../model/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  return (
    <S.TodoListPage_TodoBox key={todo.id}>
      <S.TodoListPage_TodoContentsWrap>
        <S.TodoListPage_TodoTitle>{todo.title}</S.TodoListPage_TodoTitle>
        <S.TodoListPage_TodoContent>{todo.content}</S.TodoListPage_TodoContent>
        <div>
          <Link to={`/aboutTodo/${todo.id}`}>
            <S.TodoListPage_TodoBtns borderColor="gray" marginRight="2%">
              상세보기
            </S.TodoListPage_TodoBtns>
          </Link>
          <S.TodoListPage_TodoBtns
            borderColor="#008000"
            marginRight="2%"
            onClick={(event) => {
              event.preventDefault();
              dispatch(deleteTodo(todo.id));
            }}
          >
            삭제하기
          </S.TodoListPage_TodoBtns>
          <S.TodoListPage_TodoBtns
            borderColor="#ff0000"
            onClick={(event) => {
              event.preventDefault();
              dispatch(updateTodo(todo.id));
            }}
          >
            {todo.isDone === false ? "완료" : "취소"}
          </S.TodoListPage_TodoBtns>
        </div>
      </S.TodoListPage_TodoContentsWrap>
    </S.TodoListPage_TodoBox>
  );
};

export default TodoItem;
