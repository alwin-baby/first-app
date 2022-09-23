import { useState, useEffect } from "react";

function Form() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    //obtaining the value from the input field
    const handleInput = (e) => {
        setInput(e.target.value);
    };

    //adding the values to the tasks array
    const handleSetTasks = (e) => {
        setTasks([...tasks, input]);
    };

    //logging the array for reference
    useEffect(() => {
        if (tasks.length) {
            console.log(tasks);
        }
    }, [tasks]);

    //listening for enter key press and calling the handleSetTasks function
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
        </div>
    );
}
export default Form;
