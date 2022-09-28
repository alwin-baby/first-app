import smartPhoneIcon from "../images/icons8-smartphone-161.png";

import classes from "./SmartPhoneIcon.module.css";

function SmartPhoneIcon() {
    return (
        <div>
            <img
                src={smartPhoneIcon}
                className={classes.smartPhoneIcon}
                alt="Smart Phone Icon"
            />
        </div>
    );
}

export default SmartPhoneIcon;
