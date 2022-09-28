import DesktopIcon from "./DesktopIcon";
import SmartPhoneIcon from "./SmartPhoneIcon";

import { useState, useEffect } from "react";

function DeviceLogo() {
    const getWidth = () => window.innerWidth; //obtains the current width of the screen

    function useCurrentWidth() {
        //This function returns the width of the screen whenever there is screen resize

        let [width, setWidth] = useState(getWidth()); // save current window width in the state object

        useEffect(() => {
            const resizeListener = () => {
                setWidth(getWidth()); // change width from the state object
            };

            window.addEventListener("resize", resizeListener); // set resize listener

            return () => {
                window.removeEventListener("resize", resizeListener); // clean up function
            };
        }, []);

        return width;
    }

    let width = useCurrentWidth();

    return (
        <div>
            {/* displays desktop icon when screen width is above 768px, else displays smartphone icon */}
            {width > 768 ? <DesktopIcon /> : <SmartPhoneIcon />}
        </div>
    );
}

export default DeviceLogo;
