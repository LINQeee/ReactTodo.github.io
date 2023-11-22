import {createContext, Dispatch, SetStateAction} from "react";

interface IPopupVisibleContext {
    popupVisible: boolean;
    setPopupVisible: Dispatch<SetStateAction<boolean>>;
}

export const PopupVisibleContext = createContext<IPopupVisibleContext | undefined>(undefined);