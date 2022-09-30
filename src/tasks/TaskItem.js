import DataContext from "../store/DataContext";
import { ACTIONS } from "../store/DataContext";

import classes from "./TaskItem.module.css";

import { useContext } from "react";

//gets task object as obj and task name as item from TaskList
function TaskItem(props) {
    const { obj } = props;
    const data = useContext(DataContext); //using contextcx,

    const deleteCompletedTask = () => {  //deleting completed task and diplaying toast
        data.dispatch({ type: ACTIONS.DELETE_TASK, payload: obj }); //dispatches object to Data-Context

        data.dispatchToastStatus({ type: ACTIONS.DISPLAY_TOAST }); //displaying toast

        setTimeout(() => {
            data.dispatchToastStatus({ type: ACTIONS.UNDISPLAY_TOAST });
        }, 5000); // toast undisplayed after 5 seconds
    };

    return (
        //displaying Tasks
        <div
            className={classes.taskTextContainer}
            onClick={deleteCompletedTask}
        >
            <p className={classes.taskText}>{obj.text}</p>
        </div>
    );
}

export default TaskItem;