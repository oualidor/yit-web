import React from "react";
import "../Style/Components/Logo.css"
import logoImage from "../Imgs/logoWhite.svg"
import logoImageBlue from "../Imgs/logoBlue.svg"

class Logo extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className={"Logo"}>
                    <img id={"logoBlue"} className="logoImage" src={logoImageBlue}/>
                </div>
            </React.Fragment>

        )
    }
}


export default Logo