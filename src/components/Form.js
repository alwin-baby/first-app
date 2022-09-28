import DataContext from "../store/DataContext";

import classes from "./Form.module.css";

import { useState, useContext } from "react";

function Form() {
    const [input, setInput] = useState("");
    const data = useContext(DataContext); //using context

    const handleInput = (e) => setInput(e.target.value); //obtaining the value from the input field

    const submitListner = (e) => {
        e.preventDefault();
        if (input.length) data.handleSetTasks(input);
        setInput(""); //makes the input field empty
    };

    //form
    return (
        <div>
            <form onSubmit={submitListner}>
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
