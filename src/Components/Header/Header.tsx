import {FC} from "react";
import classes from "./Header.module.scss";
import AddTodoButton from "../UI/AddTodoButton/AddTodoButton.tsx";
import HeaderDate from "../HeaderDate/HeaderDate.tsx";

interface HeaderProps {
    formattedDate: string;
    tasksCount: number;
}

const Header: FC<HeaderProps> = ({formattedDate, tasksCount}) => {
    return (
        <div className={classes.Header}>
            <div className={classes.actionBox}>
                <HeaderDate content={formattedDate}/>
                <AddTodoButton/>
            </div>
            <span>{`${tasksCount} tasks`}</span>
        </div>
    );
};

export default Header;