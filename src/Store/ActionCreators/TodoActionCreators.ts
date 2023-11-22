import {AppDispatch} from "../store.ts";
import {todoSlice} from "../Reducers/TodoSlice.ts";
import {ITodo} from "../../Types/TodoTypes.ts";

export const addTodo = (todo: ITodo) => (dispatch: AppDispatch) => {
    dispatch(todoSlice.actions.addTodo(todo));
    dispatch(todoSlice.actions.fetchTodosByDate(todo.ISODate));
}

export const removeTodo = (id: string, ISODate: string) => (dispatch: AppDispatch) => {
    dispatch(todoSlice.actions.removeTodo(id));
    dispatch(todoSlice.actions.fetchTodosByDate(ISODate));
}

export const fetchTodos = (ISODate: string) => {
    return todoSlice.actions.fetchTodosByDate(ISODate);
}

export const changeTodo = (todo: ITodo) => (dispatch: AppDispatch) => {
    dispatch(todoSlice.actions.changeTodo(todo));
    dispatch(todoSlice.actions.fetchTodosByDate(todo.ISODate));
}

export const updateAllTodos = (todos: ITodo[]) => (dispatch: AppDispatch) => {
    dispatch(todoSlice.actions.updateAllTodos(todos));
    dispatch(todoSlice.actions.fetchTodosByDate(new Date().toISOString()));
}