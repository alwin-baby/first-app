import DataContext from "../store/Data-Context";

import { useContext } from "react";

function TaskItem({ obj, item }) {
    const data = useContext(DataContext);

    return (
        //Showing Tasks and Deleting Completed Tasks
        <div>
            <p onClick={() => data.deleteCompletedTask(obj)}>{item}</p>
        </div>
    );
}

export default TaskItem;
