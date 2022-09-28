import DataContext from "../store/DataContext";

import classes from "./Form.module.css"

import { useEffect, useContext } from "react";

function Form() {
    const data = useContext(DataContext); //using context

    //listening for enter-key press and calling the handleSetTasks function
    useEffect(() => {
        const listener = (event) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                data.handleSetTasks();
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
                    <input className={classes.inputBox}
                        type="text"
                        placeholder="Add new task"
                        value={data.input} //saves entered data in the input object of context
                        onChange={data.handleInput} //calls input handling function from context
                        required
                    />
                </div>
            </form>
        </div>
    );
}
export default Form;
