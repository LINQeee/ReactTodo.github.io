import classes from "./DelteTodoButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FC} from "react";

interface DeleteTodoButtonProps {
    deleteTodo: () => void;
}

const DeleteTodoButton: FC<DeleteTodoButtonProps> = ({deleteTodo}) => {
    return (
        <button className={classes.deleteTodoButton} onClick={deleteTodo}>
            <FontAwesomeIcon icon={faTrash}/>
        </button>
    );
};

export default DeleteTodoButton;