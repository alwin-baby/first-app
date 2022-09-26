import TaskItem from "./TaskItem";
import DataContext from "../store/Data-Context";

import { useContext } from "react";

function TaskList() {
    const data = useContext(DataContext);

    return (
        <div>
            {/* Task count */}
            <div>
                <p>My Tasks &#40;{data.tasks.length}&#41;</p>
            </div>

            {/* Listing out Tasks */}
            <div>
                {data.tasks.length > 0 &&
                    data.tasks.map((obj) => {
                        return (
                            <TaskItem key={obj.id} item={obj.text} obj={obj} />
                        );
                    })}
            </div>
        </div>
    );
}

export default TaskList;
