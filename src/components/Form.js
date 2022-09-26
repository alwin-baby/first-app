import DataContext from "../store/Data-Context";

import { useEffect, useContext } from "react";

function Form() {
    const data = useContext(DataContext);

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
                <div>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={data.input}
                        onChange={data.handleInput}
                        required
                    />
                </div>
            </form>
        </div>
    );
}
export default Form;
