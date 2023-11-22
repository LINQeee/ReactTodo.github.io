import React, {useContext, useEffect} from "react";
import {PopupVisibleContext} from "../Context/PopupVisibleContext.ts";

type usePopupButtonType = () => [
    popupVisible: boolean,
    openPopup: (event: React.MouseEvent<HTMLButtonElement>) => void
]

export const usePopupButton: usePopupButtonType = () => {
    const {popupVisible, setPopupVisible} = useContext(PopupVisibleContext)!;

    useEffect(() => {
        document.addEventListener("click", () => setPopupVisible(false));

        return () => document.removeEventListener("click", () => setPopupVisible(false));
    }, [setPopupVisible]);

    const openPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (popupVisible) return;

        event.stopPropagation();
        setPopupVisible(true);
    }

    return [popupVisible, openPopup];
}