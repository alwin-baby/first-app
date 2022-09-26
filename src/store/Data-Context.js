import { createContext, useState, useEffect} from "react";

const DataContext = createContext({
    tasks: [],
    handleInput: (e) => {},
    handleSetTasks: () => {},
    deleteCompletedTask: (clickedObj) => {},
    toastStatus: false
});

export function DataContextProvider(props) {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [toastStatus, setToastStatus] = useState(false);

    //obtaining the value from the input field
    const handleInput = (e) => setInput(e.target.value);

    //adding the values to the tasks array
    const handleSetTasks = () => {
        const newTask = {
            text: input,
            id: Date.now(),
        };
        if (input.length) {
            setTasks([...tasks, newTask]);
        }

        setInput("");
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
        handleSetToastStatus();
    };

    //Displaying Toast
    const handleSetToastStatus = () => {
        setToastStatus(true);

        setTimeout(() => {
            setToastStatus(false);
        }, 800);
    };

    const context = {
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
