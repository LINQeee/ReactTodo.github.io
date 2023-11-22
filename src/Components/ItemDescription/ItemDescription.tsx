import classes from "./ItemDescription.module.scss";
import {FC} from "react";

interface ItemDescriptionProps {
    name: string;
    formattedTime: string;
    completed: boolean;
}

const ItemDescription: FC<ItemDescriptionProps> = ({name, formattedTime, completed}) => {

    const className = [classes.itemDescription, completed ? classes.completed : undefined].join(" ");

    return (
        <div className={className}>
            <span>{name}</span>
            <span>{formattedTime}</span>
        </div>
    );
};

export default ItemDescription;