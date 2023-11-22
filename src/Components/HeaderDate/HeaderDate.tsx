import classes from "./HeaderDate.module.scss";
import DateChanger from "../UI/DateChanger/DateChanger.tsx";
import {FC} from "react";

interface HeaderDateProps {
    content: string;
}

const HeaderDate: FC<HeaderDateProps> = ({content}) => {
    return (
        <div className={classes.headerDate}>
                <span>{content}</span>
                <DateChanger/>
        </div>
    );
};

export default HeaderDate;