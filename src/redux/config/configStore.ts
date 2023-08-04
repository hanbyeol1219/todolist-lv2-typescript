import { createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "../modules/todo";

const rootReducer = combineReducers({
  todoReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
