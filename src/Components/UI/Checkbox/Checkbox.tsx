import classes from "./Checkbox.module.scss";
import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

interface CheckboxProps {
    initValue?: boolean;
    onChange: (value: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({initValue = false, onChange}) => {

    const className = [classes.checkbox, initValue ? classes.checked : undefined].join(" ");

    return (
        <div className={className}>
            <input type={"checkbox"} onChange={event => onChange(event.target.checked)} checked={initValue}/>
            {initValue && <FontAwesomeIcon icon={faCheck}/>}
        </div>
    );
};

export default Checkbox;