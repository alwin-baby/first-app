import { createContext, useState, useEffect } from "react";

//creates the context and initial values are set
const DataContext = createContext({
    tasks: [],
    handleSetTasks: (input) => {},
    deleteCompletedTask: (clickedObj) => {},
    toastStatus: false,
});

// creates context provider
export function DataContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    const [toastStatus, setToastStatus] = useState(false);

    //adding the values to the tasks array
    const handleSetTasks = (input) => {
        const newTask = {
            text: input,
            id: Date.now(), //current date and time in milliseconds
        };
        setTasks([newTask, ...tasks]);
    };

    //logging the array for reference
    useEffect(() => {
        if (tasks.length) {
            console.log("changing");
            console.log(tasks);
        }
    }, [tasks]);

    //deleting completed tasks on clicking
    const deleteCompletedTask = (clickedObj) => {
        const updatedArray = tasks.filter((obj) => obj.id !== clickedObj.id);
        setTasks(updatedArray);
        handleSetToastStatus(); //calls the function which initiates the display of toast
    };

    //initiates the display of toast
    const handleSetToastStatus = () => {
        setToastStatus(true);

        setTimeout(() => {
            setToastStatus(false);
        }, 5000); // toast undisplayed after 5 seconds
    };

    //context object to pass and update data in the context, dynamically
    const context = {
        tasks: tasks,
        handleSetTasks: handleSetTasks,
        deleteCompletedTask: deleteCompletedTask,
        toastStatus: toastStatus,
    };

    return (
        <DataContext.Provider value={context}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContext;
