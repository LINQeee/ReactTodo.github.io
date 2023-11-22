import {ITodo} from "../Types/TodoTypes.ts";


export const getTodosWithDate = (date: Date, todosList: ITodo[]): ITodo[] => {
    return todosList.filter(todo => new Date(todo.ISODate).toLocaleDateString() === date.toLocaleDateString());
}

export const generateId = (): string => {
    return new Date().toISOString()+Math.random()*500;
}