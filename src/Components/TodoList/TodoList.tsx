import {FC} from 'react';
import classes from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem.tsx";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./transitions.scss";
import {ITodo} from "../../Types/TodoTypes.ts";

interface TodoListProps {
    filteredTodoList: ITodo[]
}

const TodoList: FC<TodoListProps> = ({filteredTodoList}) => {

    if (!filteredTodoList.length) return <h3 className={classes.emptyWarn}>There's no any task yet</h3>;

    return (
        <div className={classes.todoList}>
            <TransitionGroup>
                {
                    filteredTodoList.map(todo =>
                        <CSSTransition
                            key={todo.id}
                            timeout={300}
                            classNames="item"
                        >
                            <TodoItem todo={todo}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default TodoList;