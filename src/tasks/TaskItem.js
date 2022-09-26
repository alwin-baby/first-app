import DataContext from "../store/DataContext";

import { useContext } from "react";

//gets task object as obj and task name as item from TaskList
function TaskItem({ obj, item }) {
    const data = useContext(DataContext); //using context

    return (
        //displaying Tasks
        <div>
            {/* calls the function inside the context to delete the task */}
            <p onClick={() => data.deleteCompletedTask(obj)}>{item}</p>
        </div>
    );
}

export default TaskItem;
