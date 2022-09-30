import { createContext, useReducer } from "react";

//creates the context and initial values are set
const initialState = {
    tasks: [],
    toastStatus: false,
};
const DataContext = createContext(initialState);

export const ACTIONS = { //defining actions and exporting them
    ADD_TASK: "add-task",
    DELETE_TASK: "delete-task",
    DISPLAY_TOAST: "display-toast",
    UNDISPLAY_TOAST: "undisplay-toast"
};

const taskReducer = (tasks, action) => { //functions for adding and removing tasks
    switch (action.type) {
        case "add-task":
            return addTask(tasks, action.payload);
        case "delete-task":
            return deleteTask(tasks, action.payload.id);
        default:
            return tasks;
    }
};

const toastReducer = (toastStatus, action) => { //functions for displaying and undisplaying toast
    switch (action.type) {
        case "display-toast":
            return (toastStatus = true);
        case "undisplay-toast":
            return (toastStatus = false);
        default:
            return (toastStatus = false);
    }
};

const addTask = (tasksArray, input) => { //add task function
    const newTask = {
        text: input,
        id: Date.now(),
    };
    return [newTask, ...tasksArray];
};

const deleteTask = (tasksArray, id) => { //delete task function
    return tasksArray.filter((obj) => obj.id !== id);
};

export const DataContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [toastStatus, dispatchToastStatus] = useReducer(toastReducer, false);

    const context = {
        tasks: tasks,
        dispatch: dispatch,
        toastStatus: toastStatus,
        dispatchToastStatus: dispatchToastStatus,
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContext;
