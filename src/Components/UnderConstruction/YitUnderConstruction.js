import React from 'react';
import "./YitUnderConstruction.css"
import 'react-under-construction/build/css/index.css';
import fb from "../YitSocialMedia/fb.jpg"
import li from "../YitSocialMedia/li.png"
import gmail from "../YitSocialMedia/gmail.png"
import phone from "../YitSocialMedia/phone.png"
import logo from "../../Imgs/logoBlue.svg"
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import YitTimer from "../YitTimer";
import {BrowserRouter, Route} from "react-router-dom";
import twitter from "./twitter.svg"
import { SocialIcon } from 'react-social-icons';
import Button from "@mui/material/Button";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import RequestHandler from "../../Apis/RequestHandler";


class YitUnderConstruction extends React.Component{
    constructor(props){
        super(props);
        this.state = {styles : {
                paper: "",
                avatar: "",
                form: "",
                submit: ""
            }}


    }

    componentDidMount() {

    }
    mountBackDrop(){
        let backDrop = document.getElementById("backDrop")

        backDrop.style.display = "block"
    }

    onCancel(){
        let backDrop = document.getElementById("backDrop")

        backDrop.style.display = "none"
    }

    async onSubmit(newData) {
        alert("hi")
        let url = 'http://localhost:8080/Guest/sendMessage'
        let request = await RequestHandler.POST(url, newData, null)
        console.clear()
        console.log(request)
    }

    render() {


        return (


                <BrowserRouter>
                    <Route exact path={"/"}>
                        <div className="BackDrop" id={"backDrop"}>
                            <div className="requestMeetingContainer">
                                <ContactUsForm
                                    onSubmit={this.onSubmit.bind(this)}
                                    onCancel={this.onCancel}
                                />
                            </div>
                        </div>
                        <div className={"YitUnderConstruction"}>
                            <div className={"entry"}>
                                <div className={"text"}>
                                    ------<span style={{fontFamily: 'Electrolize', fontWeight: "bold", marginRight: 15, marginLeft: 15}}>Your New IT Department</span>------
                                    UNDER <br></br>CONSTRUCTION<br></br>
                                    ------------------------------------------
                                </div>
                                <YitTimer expiryTimestamp={6000000} />
                            </div>
                            <div className={"note"}>
                                <div className={"cantWaitButton"} onClick={this.mountBackDrop} >I cant wait</div>
                            </div>
                                <div className="SocialMediaContainer">
                                    <div className="socialMediaEntry"><a href="https://web.facebook.com/youritdepartment" target={"_blank"}>
                                        <img src={fb} className={'socialMediaImage'}/>
                                    </a></div>
                                    <div className="socialMediaEntry"><a href="https://www.linkedin.com/company/yourit-department/" target={"_blank"}>
                                        <img src={li} className={"socialMediaImage"} />
                                    </a></div>
                                    <div className="socialMediaEntry">
                                        <a href="mailto:walid.khial@gmail.com" target={"_blank"} >
                                            <img src={gmail} className={'socialMediaImage'}/>
                                        </a>
                                    </div>
                                    <div className="socialMediaEntry"><a href="tel:0550750576" target={"_blank"}>
                                        <img src={phone} className={"socialMediaImage"} />
                                    </a></div>
                                </div>
                        </div>
                    </Route>
                    <Route exact path={"/GetStarted"}>


                    </Route>
                </BrowserRouter>



        );
    }
}

export default YitUnderConstruction;