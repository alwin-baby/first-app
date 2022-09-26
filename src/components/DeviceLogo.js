import DesktopIcon from "./DesktopIcon";
import SmartPhoneIcon from "./SmartPhoneIcon";

import { useState, useEffect } from "react";

function DeviceLogo() {
    const getWidth = () => window.innerWidth;

    function useCurrentWidth() {
        // save current window width in the state object
        let [width, setWidth] = useState(getWidth());

        // in this case useEffect will execute only once because
        // it does not have any dependencies.
        useEffect(() => {
            const resizeListener = () => {
                // change width from the state object
                setWidth(getWidth());
            };
            // set resize listener
            window.addEventListener("resize", resizeListener);

            // clean up function
            return () => {
                // remove resize listener
                window.removeEventListener("resize", resizeListener);
            };
        }, []);

        return width;
    }

    let width = useCurrentWidth();

    return (
        <div>
            {width > 768 && <DesktopIcon />}
            {width <= 768 && <SmartPhoneIcon />}
        </div>
    );
}

export default DeviceLogo;
