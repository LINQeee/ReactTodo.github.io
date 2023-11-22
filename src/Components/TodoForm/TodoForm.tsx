import classes from "./TodoForm.module.scss";
import DateTimeInput from "../UI/DateTimeInput/DateTimeInput.tsx";
import TextInput from "../UI/TextInput/TextInput.tsx";
import SubmitButton from "../UI/SubmitButton/SubmitButton.tsx";
import React, {useContext, useState} from "react";
import {validateFormValue, validateValues} from "../../Services/ValidateService.ts";
import {addTodo} from "../../Store/ActionCreators/TodoActionCreators.ts";
import {PopupVisibleContext} from "../../Context/PopupVisibleContext.ts";
import {useAppDispatch} from "../../Hooks/redux.ts";
import {generateId} from "../../Services/TodoService.ts";

const TodoForm = () => {

    const [dateTime, setDateTime] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);
    const {setPopupVisible} = useContext(PopupVisibleContext)!;

    const dispatch = useAppDispatch();

    const submitForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSubmitted(true);
        if (!validateValues(dateTime, description)) return;

        dispatch(addTodo(
            {ISODate: new Date(dateTime).toISOString(), description: description, completed: false, id: generateId()}
        ));

        setPopupVisible(false);
    }

    return (
        <form className={classes.todoForm} onClick={event => event.stopPropagation()}>
            <DateTimeInput value={dateTime} setValue={setDateTime} isValid={validateFormValue(dateTime, submitted)}/>
            <TextInput value={description} setValue={setDescription} isValid={validateFormValue(description, submitted)}/>
            <SubmitButton callback={submitForm}/>
        </form>
    );
};

export default TodoForm;