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
                    list.map((obj) => {
                        return (
                            <TaskItem
                                key={obj.id}
                                deleteCompletedTask={deleteCompletedTask}
                                item={obj.text}
                                obj={obj}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default TaskList;
