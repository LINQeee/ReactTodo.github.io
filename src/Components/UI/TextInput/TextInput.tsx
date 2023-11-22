import classes from "./TextInput.module.scss";
import {Dispatch, FC, SetStateAction} from "react";

interface TextInputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    isValid: boolean;
}

const TextInput: FC<TextInputProps> = ({value, setValue, isValid}) => {

    const className = [classes.textInput, !isValid ? classes.error : undefined].join(" ");

    return (
        <div className={className}>
            <label>Description</label>
            <input type={"text"} required value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    );
};

export default TextInput;