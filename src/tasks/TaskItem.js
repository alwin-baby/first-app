import DataContext from "../store/DataContext";

import classes from "./TaskItem.module.css"

import { useContext } from "react";

//gets task object as obj and task name as item from TaskList
function TaskItem({ obj, item }) {
    const data = useContext(DataContext); //using context

    return (
        //displaying Tasks
        <div className={classes.taskTextContainer} onClick={() => data.deleteCompletedTask(obj)}>
            {/* calls the function inside the context to delete the task */}
            <p className={classes.taskText} >{item}</p>
        </div>
    );
}

export default TaskItem;
