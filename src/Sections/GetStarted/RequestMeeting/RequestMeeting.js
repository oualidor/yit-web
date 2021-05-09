import React from "react";
import "./RequestMeeting.css"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";
import isMobile from "../../../CustomLibs/Functions";
import ContactUsForm from "../../../Components/ContactUsForm";
import meetingImage from "./Imgs/meeting.jpg"
import $ from "jquery";
import GoogleMap from "../../../Components/GoogleMap";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {render} from "react-dom";
import Select from "@material-ui/core/Select";
import App from "../../../App";

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
    render() {
        return (
            <div className={"RequestMeeting"} id={"RequestMeeting"}>
                <div className="topMenuSpacer"></div>
                <div className="OnlineMeetingContainer">
                    <span className={"title"} style={{fontSize: "4vh"}}><b>Schedule an online meeting</b></span><br/>
                    <div className="RequestMeetingFormContainer">
                        <ContactUsForm></ContactUsForm>
                    </div>

                </div>
                <div  className="positionChooser">
                    <div className="visitTitle">
                        <Grid container spacing={2} className={"SettingGrid"}>
                            <Grid item xs={8}>
                                <b>Or pay us a visit</b>
                            </Grid>
                            <Grid item xs={4}>
                                <Select
                                    name={"name"}
                                    label="Wilaya"
                                    select
                                    defaultValue=""
                                    fullWidth
                                    helperText=""
                                    variant="outlined"
                                    required
                                    onChange={this.wilayaChangeHolder}>
                                    {
                                        localPositions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                        ))
                                    }
                                </Select>
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </div>
                    <div className="mapHolder" id={"mapHolder"}>
                        <GoogleMap center={{lat: 34.8370849, lng: 0.1563617}} zoom={15}/>
                    </div>
                </div>

            </div>
        );
    }
}
export default RequestMeeting