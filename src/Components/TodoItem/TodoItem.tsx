import classes from "./TodoItem.module.scss";
import {FC} from "react";
import ItemDescription from "../ItemDescription/ItemDescription.tsx";
import {formatTimeString} from "../../Services/DateService.ts";
import Checkbox from "../UI/Checkbox/Checkbox.tsx";
import {changeTodo, removeTodo} from "../../Store/ActionCreators/TodoActionCreators.ts";
import DeleteTodoButton from "../UI/DeleteTodoButton/DeleteTodoButton.tsx";
import {useAppDispatch} from "../../Hooks/redux.ts";
import {ITodo} from "../../Types/TodoTypes.ts";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

    const dispatch = useAppDispatch();

    const handleCompletedChange = (newValue: boolean) => {
        dispatch(changeTodo({...todo, completed: newValue}));
    }

    const handleDeleteItem = () => {
        dispatch(removeTodo(todo.id, todo.ISODate));
    }

    return (
        <div className={classes.todoItem}>
            <Checkbox initValue={todo.completed} onChange={handleCompletedChange}/>
            <ItemDescription name={todo.description} formattedTime={formatTimeString(new Date(todo.ISODate))}
                             completed={todo.completed}/>
            <DeleteTodoButton deleteTodo={handleDeleteItem}/>
        </div>
    );
};

export default TodoItem;