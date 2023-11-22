import {getTodosWithDate} from "../../Services/TodoService.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../Types/TodoTypes.ts";

interface ITodoState {
    allTodos: ITodo[];
    filteredTodos: ITodo[];
    filteredCount: number;
    filteredISODate: string;
}

const initialState: ITodoState = {
    allTodos: [],
    filteredTodos: [],
    filteredCount: 0,
    filteredISODate: new Date().toISOString()
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        fetchTodosByDate(state, action: PayloadAction<string>) {

            const filteredList = getTodosWithDate(new Date(action.payload), state.allTodos);
            state.filteredCount = filteredList.length;
            state.filteredTodos = filteredList;
            state.filteredISODate = action.payload;
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
        },
        addTodo(state, action: PayloadAction<ITodo>) {
            state.allTodos = state.allTodos.concat(action.payload);
        },
        changeTodo(state, action: PayloadAction<ITodo>) {
            state.allTodos.forEach(todo => {
                if (todo.id === action.payload.id) todo.completed = action.payload.completed;
            });
        },
        updateAllTodos(state, action: PayloadAction<ITodo[]>) {
            state.allTodos = action.payload;
        }
    }
});

export const todoReducer = todoSlice.reducer;