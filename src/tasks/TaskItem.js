function TaskItem({ deleteCompletedTask, obj, item }) {
    return (
        //Showing Tasks and Deleting Completed Tasks
        <div>
            <p onClick={() => deleteCompletedTask(obj)}>{item}</p>
        </div>
    );
}

export default TaskItem;
