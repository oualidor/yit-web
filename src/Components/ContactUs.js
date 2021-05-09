import React from "react";
import "../Style/Components/ContactUs.css"
import GoogleMap from "./GoogleMap";

import ContactUsForm from "./ContactUsForm";
import contactUs from "../Imgs/contactUs2.png";


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
import ContactUsFormm from "./ContactUsFormm";
import $ from "jquery";
import isMobile from "../CustomLibs/Functions";

class ContactUs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            map: "",
        }
    }

    componentDidMount() {
        this.setState({
            map:<GoogleMap center={{lat: 35.2925851, lng: -1.1422442}} zoom={20}/>
        })
    }

    setMapPosition = () =>{
        this.setState({
            map:"loading"
        })
        this.setState({
            map:<GoogleMap center={{lat: 33.6892185, lng: 1.0247438}} zoom={20}/>
        })
    }
    render(){
        return(
            <React.Fragment>
                <section className={"ContactUS"} id={"ContactUS"}>
                    <div className="topMenuSpacer"></div>
                    <div className="footerContent">
                        <div className="contactInfoContainer">
                            <div className="mail">
                                <EmailIcon fontSize={"large"}/>
                                admin@yit.tech<br/>
                            </div>
                            <div className="phone">
                                <PhoneIcon fontSize={"large"} color={"green"}/>
                                (213) 550 75 05 76 <br/>
                                (213) 696 82 51 94</div>
                            <div className="whatsUp">
                                <WhatsAppIcon fontSize={"large"} style={{ color: green[500] }}/>
                                (213) 550 75 05 76 <br/>
                                (213) 696 82 51 94
                            </div>
                            <div className="faceBook" >
                                <FacebookIcon  fontSize={"large"} color={"primary"}/>
                                @yourItDepartment<br/>
                            </div>
                            <div className="faceBook" >
                                <RoomIcon  fontSize={"large"} style={{ color: red[500] }}/>
                                Algeria, El Bayadh<br/>
                                Algeria, Saida<br/>
                            </div>
                            <div className="faceBook" >
                                <MapIcon  fontSize={"large"}/>
                                Open Map<br/>
                            </div>
                        </div>
                        <img src={contactUs}/>
                    </div>
                    <div className="footerBottomBar"><span>All right reserved</span></div>
                </section>
            </React.Fragment>

        )
    }
}

export default ContactUs;

