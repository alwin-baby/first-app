import image from "../images/undraw_snow_games_ohkc 1.png";

import classes from "./NoTaskImage.module.css";

function NoTaskImage() {
    return (
        <div>
            <div className={classes.imageContainer}>
                <img src={image} className={classes.image} alt="No taks" />
            </div>
            <div className={classes.textContainer}>
                <p className={classes.text}>Hoooray, Time to chill ! No Tasks.</p>
            </div>
        </div>
    );
}

export default NoTaskImage;
