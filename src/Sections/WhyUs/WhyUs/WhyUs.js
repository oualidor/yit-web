import React from "react";
import "./WhyUs.css"
import $ from 'jquery';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TelegramIcon from "@material-ui/icons/Telegram";
import {setMobileDimensions, setDimenstions} from "../../../CustomLibs/Functions"


class WhyUs extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        $(document).ready(function(){

            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                setMobileDimensions();
                $(window).resize(function(){
                    setMobileDimensions();
                });

            }else {
                setDimenstions();
                $(window).resize(function(){
                    setDimenstions();
                });
            }

        })
    }
    render(){
        return(
                <div className={"WhyUs"} id={"WhyUs"}>
                    <div className="topMenuSpacer"></div>
                    <div className="topMenuSpacer"></div>
                    <div className="WhyUsText">
                        Be patient to know us better!<br/>
                        &nbsp;&nbsp;&nbsp;You will <FavoriteBorderIcon style={{color: "red", fontSize:"100%"}}/> US<br/><br/>
                    </div>

                    <div className="options">
                        <a href={"#AboutsUs"}  >
                            <div className="option" id={"optionAboutUS"}>
                                AboutUS
                            </div>
                        </a>

                        <a href={"#OurTeam"} >
                            <div className="option" id={"optionOurTeam"}>
                                <TelegramIcon style={{marginRight: "10px"}}/> Meet The Team
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}
export default WhyUs