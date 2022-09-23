import TaskItem from "./TaskItem";

function TaskList({ list, deleteCompletedTask }) {
    return (
        <div>
            {/* Task count */}
            <div>
                <p>My Tasks &#40;{list.length}&#41;</p>
            </div>

            {/* Listing out Tasks */}
            <div>
                {list.length > 0 &&
                    list.map((obj, index) => {
                        return (
                            <TaskItem
                                key={index}
                                deleteCompletedTask={deleteCompletedTask}
                                item={obj.text}
                                id={obj.id}
                                obj={obj}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default TaskList;
