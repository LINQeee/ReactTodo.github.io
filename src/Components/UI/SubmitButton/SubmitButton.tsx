import classes from "./SubmitButton.module.scss";
import React, {FC} from "react";

interface SubmitButtonProps {
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: FC<SubmitButtonProps> = ({callback}) => {
    return (
        <button className={classes.submitButton} onClick={callback}>Create todo</button>
    );
};

export default SubmitButton;