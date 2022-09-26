import TaskItem from "./TaskItem";
import DataContext from "../store/DataContext";

import { useContext } from "react";

function TaskList() {
    const data = useContext(DataContext); //using context

    return (
        <div>
            {/* Task count */}
            <div>
                {/* &#40; = '(' and &#41 =')' */}
                <p>My Tasks &#40;{data.tasks.length}&#41;</p>
            </div>

            {/* Listing out Tasks */}
            <div>
                {data.tasks.length > 0 &&
                    data.tasks.map((obj) => {
                        return (
                            //passing each object and its text to TaskItem
                            <TaskItem key={obj.id} item={obj.text} obj={obj} />
                        );
                    })}
            </div>
        </div>
    );
}

export default TaskList;
