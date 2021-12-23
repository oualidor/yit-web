import React from "react";
import "./RequestMeeting.css"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";
import {isMobile} from "../../../CustomLibs/Functions";
import ContactUsForm from "../../../Components/ContactUsForm/ContactUsForm";
import meetingImage from "./Imgs/meeting.jpg"
import $ from "jquery";
import GoogleMap from "../../../Components/GoogleMap";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {render} from "react-dom";
import Select from "@material-ui/core/Select";
import App from "../../../App";
import YitForm from "../../../Components/YitForm/YitForm";

function changeMap(center){
    render(
        <React.StrictMode>
            <GoogleMap center={center} zoom={15}/>
        </React.StrictMode>,
        document.getElementById("mapHolder"));
}

const localPositions = [
    {
        value: {lat: 33.689068, lng: 1.0248691},
        label: 'EL Bayadh',
    },
    {
        value: {lat: 34.8370849, lng: 0.1563617},
        label: 'Saida',
    },
    {

        value: {lat: 35.2926843, lng: -1.1417645},
        label: 'Ain tmouchent',
    },
]


class RequestMeeting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            styles : {
                paper: "",
                avatar: "",
                form: "",
                submit: "",

            },
            center : {lat: 34.8370849, lng: 0.1563617}}
        this.formRef = React.createRef()
    }

    wilayaChangeHolder = (event) => {
        let val = event.target.value;
        changeMap(val);
    }


    componentDidMount() {
        if(isMobile){

        }else{

        }
    }
    handleSubmit(){
        alert("hi")
    }
    render() {
        return (
            <div className={"RequestMeeting"} id={"RequestMeeting"}>
                <YitForm
                    ref={this.formRef}
                    handleSubmit={this.handleSubmit.bind(this)}
                >
                <div className="topMenuSpacer"></div>
                <div className="OnlineMeetingContainer">
                    <span className={"title"} style={{fontSize: "4vh"}}><b>Schedule an online meeting</b></span><br/>
                    <div className="RequestMeetingFormContainer">
                        <ContactUsForm></ContactUsForm>
                    </div>
                </div>
                </YitForm>
            </div>
        );
    }
}
export default RequestMeeting