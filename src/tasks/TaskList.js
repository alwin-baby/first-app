import TaskItem from "./TaskItem";
import DataContext from "../store/DataContext";

import classes from "./TaskList.module.css"

import { useContext } from "react";

function TaskList() {
    const data = useContext(DataContext); //using context

    return (
        <div className={classes.divContainer}>
            {/* Task count */}
            <div className={classes.taskCountContainer}>
                {/* &#40; = '(' and &#41 =')' */}
                <p className={classes.taskCount}>My Tasks &#40;{data.tasks.length}&#41;</p>
            </div>

            {/* Listing out Tasks */}
            <div className={classes.listContainer}>
                {data.tasks.length > 0 &&
                    data.tasks.map((obj) => {
                        return (
                            //passing each object and its text to TaskItem
                            <TaskItem key={obj.id} obj={obj} />
                        );
                    })}
            </div>
        </div>
    );
}

export default TaskList;
