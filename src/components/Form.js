import TaskList from "../tasks/TaskList";
import NoTaskImage from "./NoTaskImage";
import Toast from "./Toast";
import DataContext from "../store/Data-Context";

import { useState, useEffect, useContext } from "react";

function Form(props) {

    const data = useContext(DataContext);

    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [toastStatus, setToastStatus] = useState(false);

    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......

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

    //Displaying Toast
    const handleSetToastStatus = () => {
        setToastStatus(true);

        setTimeout(() => {
            setToastStatus(false);
        }, 800);
    };

    //deleting completed tasks on clicking
    const deleteCompletedTask = (clickedObj) => {
        const updatedArray = tasks.filter((obj) => obj.id !== clickedObj.id);
        setTasks(updatedArray);
        handleSetToastStatus();
    };

    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......
    //.......moved.......

    //listening for enter-key press and calling the handleSetTasks function
    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                handleSetTasks();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    //form
    return (
        <div>
            <div>
                <form>
                    <div>
                        <input
                            type="text"
                            placeholder="Add new task"
                            value={input}
                            onChange={handleInput}
                            required
                        />
                    </div>
                </form>
            </div>
            <div>
                {tasks.length === 0 && <NoTaskImage />}

                {tasks.length > 0 && (
                    <TaskList
                        list={tasks}
                        deleteCompletedTask={deleteCompletedTask}
                    />
                )}

                {toastStatus === true && <Toast />}
            </div>
        </div>
    );
}
export default Form;
