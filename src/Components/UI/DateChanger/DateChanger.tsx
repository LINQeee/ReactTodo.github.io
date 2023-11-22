import classes from "./DateChanger.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-regular-svg-icons";
import {useAppDispatch, useAppSelector} from "../../../Hooks/redux.ts";
import React from "react";
import {fetchTodos} from "../../../Store/ActionCreators/TodoActionCreators.ts";

const DateChanger = () => {

    const {filteredISODate} = useAppSelector(state => state.todoReducer);
    const dispatch = useAppDispatch();

    const updateTodosWithDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchTodos(new Date(event.target.value).toISOString()));
    }

    const openPicker = (event: React.MouseEvent<HTMLInputElement>) => {
        event.currentTarget.showPicker();
    }

    return (
        <div className={classes.dateChanger}>
            <input type="date" onClick={openPicker} value={filteredISODate.split('T')[0]} onChange={updateTodosWithDate}/>
            <FontAwesomeIcon icon={faCalendarDays}/>
        </div>
    );
};

export default DateChanger;