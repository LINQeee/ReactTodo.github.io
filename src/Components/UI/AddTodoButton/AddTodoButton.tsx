import classes from "./AddTodoButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {usePopupButton} from "../../../Hooks/usePopupButton.ts";

const AddTodoButton = () => {

    const [, openPopup] = usePopupButton();

    return (
        <button className={classes.addTodoButton} onClick={event => openPopup(event)}>
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    );
};

export default AddTodoButton;