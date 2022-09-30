import DeviceLogo from "./DeviceLogo";

import classes from "./Header.module.css";

function Header() {
    return (
        <div className={classes.headerContainer}>
            <div className={classes.header}>
                <h1 className={classes.task}>Task</h1>
                <h1 className={classes.manager}>Manager</h1>
            </div>
            <DeviceLogo className={classes.deviceIcon} />
        </div>
    );
}

export default Header;
