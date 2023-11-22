import classes from "./DateTimeInput.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons";
import React, {Dispatch, FC, SetStateAction} from "react";

interface DateTimeInputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    isValid: boolean;
}

const DateTimeInput: FC<DateTimeInputProps> = ({value, setValue, isValid}) => {

    const className = [classes.dateTimeInput, !isValid ? classes.error : undefined].join(" ");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => event.currentTarget.showPicker();

    return (
        <div className={className}>
            <label>Date & time</label>
            <input type="datetime-local"
                   onClick={handleClick} required value={value} onChange={changeHandler}/>
            <FontAwesomeIcon icon={faCalendarDay}/>
        </div>
    );
};

export default DateTimeInput;