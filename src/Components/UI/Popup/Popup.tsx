import React, {FC, useContext} from "react";
import {PopupVisibleContext} from "../../../Context/PopupVisibleContext.ts";
import classes from "./Popup.module.scss";

interface PopupProps {
    PopupContent: React.ElementType;
}

const Popup: FC<PopupProps> = ({PopupContent}) => {

    const {popupVisible} = useContext(PopupVisibleContext)!;

    if (!popupVisible) return null;

    return (
        <div className={classes.popup}>
            <PopupContent/>
        </div>
    );
};

export default Popup;