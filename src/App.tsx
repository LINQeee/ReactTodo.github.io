import "./styles.scss";
import {useAppSelector} from "./Hooks/redux.ts";
import Header from "./Components/Header/Header.tsx";
import {formatDateString} from "./Services/DateService.ts";
import {useState} from "react";
import TodoList from "./Components/TodoList/TodoList.tsx";
import Popup from "./Components/UI/Popup/Popup.tsx";
import TodoForm from "./Components/TodoForm/TodoForm.tsx";
import {PopupVisibleContext} from "./Context/PopupVisibleContext.ts";
import {useTodoLocalStorage} from "./Hooks/useTodoLocalStorage.ts";

function App() {

    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const todoState = useAppSelector(state => state.todoReducer);

    useTodoLocalStorage();

    return (
        <PopupVisibleContext.Provider value={{popupVisible, setPopupVisible}}>
            <Header formattedDate={formatDateString(new Date(todoState.filteredISODate))} tasksCount={todoState.filteredCount}/>
            <TodoList filteredTodoList={todoState.filteredTodos}/>
            <Popup PopupContent={TodoForm}/>
        </PopupVisibleContext.Provider>
    )
}

export default App
