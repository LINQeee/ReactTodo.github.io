import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./redux.ts";
import {updateAllTodos} from "../Store/ActionCreators/TodoActionCreators.ts";

export const useTodoLocalStorage = () => {

    const todoState = useAppSelector(state => state.todoReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const jsonTodos = localStorage.getItem("todos");
        if (jsonTodos !== null) dispatch(updateAllTodos(JSON.parse(jsonTodos)));
    }, [dispatch]);


    useEffect(() => {
        if (!todoState.allTodos.length) return;
        localStorage.setItem("todos", JSON.stringify(todoState.allTodos));
    }, [todoState.allTodos]);
}