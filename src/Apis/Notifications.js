
import ReactDOM from "react-dom";
import React from "react";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
function close(container, alert){
    ReactDOM.unmountComponentAtNode(document.getElementById(container));
}
export const Notifications = {
    drawActionResult (container, Msg, severity, variant,  duration)  {
        if(typeof  Msg !== "string"){
            Msg = "Critique Error, check console"
        }
        const View = ({}) => {

            return (
                <>
                    <Alert
                        id={"alert"}
                        severity={severity}
                        sx={{mb: 2}}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    close(container, "")
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {Msg}
                    </Alert>
                </>

            )
        }
        try {
            ReactDOM.render(<View/>, document.getElementById(container))
            if(duration != null){
                setTimeout(() => {
                    ReactDOM.unmountComponentAtNode(document.getElementById(container));
                }, duration)
            }

        } catch (err) {
            console.log("could not render teh notifications, check again")
            console.log(err)
        }
    }
}

