import DesktopIcon from "./DesktopIcon";
import SmartPhoneIcon from "./SmartPhoneIcon";

import { useState, useEffect } from "react";

function DeviceLogo() {
    const getDevice = () => {
        if (window.innerWidth > 768) {
            return "Desktop";
        } else {
            return "Smartphone";
        }
    }; //obtains the current device type

    let [device, setDevice] = useState(getDevice()); // save current device in the state object

    useEffect(() => {
        const resizeListener = () => setDevice(getDevice()); // changes the device in the state object whenever there is screen resize

        window.addEventListener("resize", resizeListener); // set resize listener

        return () => {
            window.removeEventListener("resize", resizeListener); // clean up function
        };
    }, []);

    return (
        <div>
            {/* displays desktop icon when device is "Desktop", else displays smartphone icon */}
            {device === "Desktop" ? <DesktopIcon /> : <SmartPhoneIcon />}
        </div>
    );
}

export default DeviceLogo;
