import DataContext from "../store/DataContext";

import classes from "./Form.module.css";

import { useState, useEffect, useContext } from "react";

function Form() {
    const [input, setInput] = useState("");
    const data = useContext(DataContext); //using context

    const handleInput = (event) => setInput(event.target.value); //obtaining the value from the input field

    //listening for enter-key press and calling the handleSetTasks function
    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                if (input.length) data.handleSetTasks(input);
                setInput(""); //makes the input field empty
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
            <form>
                <div className={classes.inputContainer}>
                    <input
                        className={classes.inputBox}
                        type="text"
                        placeholder="Add new task"
                        value={input} //saves entered data in the input state
                        onChange={handleInput} //calls input handling function
                        required
                    />
                </div>
            </form>
        </div>
    );
}
export default Form;
