import classes from "./Toast.module.css";

function Toast() {
    return (
        <div className={classes.div}>
            <div className={classes.toastContainer}>
                <p className={classes.toast}>Task Completed</p>
            </div>
        </div>
    );
}

export default Toast;
