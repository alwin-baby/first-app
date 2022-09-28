import { createContext, useState, useEffect } from "react";

//creates the context and initial values are set
const DataContext = createContext({
    input: "",
    tasks: [],
    handleInput: (e) => {},
    handleSetTasks: () => {},
    deleteCompletedTask: (clickedObj) => {},
    toastStatus: false,
});

// creates context provider
export function DataContextProvider(props) {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [toastStatus, setToastStatus] = useState(false);

    const handleInput = (e) => setInput(e.target.value); //obtaining the value from the input field

    //adding the values to the tasks array
    const handleSetTasks = () => {
        const newTask = {
            text: input,
            id: Date.now(), //current date and time in milliseconds
        };
        if (input.length) {
            setTasks([newTask, ...tasks]);
        }

        setInput(""); //makes the input field empty
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
        input: input,
        tasks: tasks,
        handleInput: handleInput,
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
