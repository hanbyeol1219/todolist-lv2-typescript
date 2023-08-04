import uuid from "react-uuid";
import { Todo } from "../../model/todo";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

// 초기 상태값
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트 공부하기",
      content: "리액트 입문 공부하기",
      isDone: true,
    },
    {
      id: uuid(),
      title: "리액트 공부하기",
      content: "리액트 숙련 공부하기",
      isDone: true,
    },
    {
      id: uuid(),
      title: "리액트 공부하기",
      content: "리액트 심화 공부하기",
      isDone: false,
    },
  ],
};

export const addTodo = (newTodo: Todo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const updateTodo = (id: string) => {
  return {
    type: UPDATE_TODO,
    payload: id,
  };
};

const todoReducer = (state = initialState, action: any) => {
  console.log("check", state, action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;

/**
 * 2가지 훅
 * useDispatch - store에 있는 값을 변경하기
 */
