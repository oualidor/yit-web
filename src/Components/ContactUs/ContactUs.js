import React from "react";
import style from './ContactUs.css'

import contactUs from "../../Imgs/contactUs2.png";


//Icons
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';

import { makeStyles } from '@material-ui/core/styles';
import { green} from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import ContactUsFormm from "../ContactUsFormm";
import $ from "jquery";
import {isMobile} from "../../CustomLibs/Functions";

class ContactUs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            map: "",
        }
    }

    componentDidMount() {
        this.setState({

        })
    }

    setMapPosition = () =>{

    }
    render(){
        return(
            <section className={"ContactUS"} id={"ContactUS"}>
                <div className="topMenuSpacer"></div>
                <div className="footerContent">
                    <div className="contactInfoContainer">
                        <div className="mail">
                            <div className="iconContainer">
                                <EmailIcon style={{height: '100%', width: "100%"}}/>
                            </div>
                            <div className="valueContainer"> admin@yit.tech<br/></div>
                        </div>
                        <div className="phone">
                            <div className="iconContainer"><PhoneIcon  style={{height: '100%', width: "100%"}} color={"primary"}/></div>
                            <div className="valueContainer">
                                (213) 550 75 05 76 <br/>
                                (213) 696 82 51 94
                            </div>
                        </div>
                        <div className="whatsUp">
                            <div className="iconContainer"> <WhatsAppIcon style={{height: '100%', width: "100%"}} style={{ color: green[500] }}/></div>
                            <div className="valueContainer"> (213) 550 75 05 76 <br/>
                                (213) 696 82 51 94</div>
                        </div>
                        <div className="faceBook" >
                            <div className="iconContainer"> <FacebookIcon style={{height: '100%', width: "100%"}} color={"primary"}/></div>
                            <div className="valueContainer">  @yourItDepartment<br/></div>
                        </div>
                        <div className="faceBook" >
                            <div className="iconContainer"> <RoomIcon  style={{height: '100%', width: "100%", color: red[500]}} /></div>
                            Algeria, El Bayadh<br/>
                            Algeria, Saida<br/>
                        </div>
                        <div className="mobileHide faceBook">
                            <div className="iconContainer"><MapIcon  style={{height: '100%', width: "100%", color: red[500]}}/></div>
                            Open Map<br/>
                        </div>
                    </div>
                    <img src={contactUs} className={"contactUsImage"}/>
                </div>

            </section>
        )
    }
}

export default ContactUs;

