import desktopIcon from "../images/image1.png";

import classes from "./DesktopIcon.module.css";

function DesktopIcon() {
    return (
        <div>
            <img
                src={desktopIcon}
                className={classes.desktopIcon}
                alt="Desktop Icon"
            />
        </div>
    );
}

export default DesktopIcon;
