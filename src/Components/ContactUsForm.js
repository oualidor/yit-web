import React, {Component} from 'react';
import {isMobile} from "../CustomLibs/Functions";
import "../Style/Components/ContactUsForm.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const clientType = [
    {
        value: '0',
        label: 'Personal',
    },
    {
        value: '1',
        label: 'Company',
    },
]
const meetingTimes = [
    {
        value: '0',
        label: 'Morning',
    },
    {
        value: '1',
        label: 'After Noon',
    },
    {
        value: '2',
        label: 'Evening',
    }
];

const meetingReasons = [
    {
        value: '0',
        label: 'Discuss a deal',
    },
    {
        value: '1',
        label: 'Need Information',
    },
    {
        value: '2',
        label: 'Other',
    }
];

class ContactUsForm extends React.Component{
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
        if(isMobile){

        }else{

        }
    }
    render() {


    return (
                <form className={"contactUsForm"} noValidate>
                    <Grid container spacing={2} className={"SettingGrid"}>
                            <Grid container spacing={2} className={"SettingGrid"}>
                                <Grid item xs={12}>
                                    <b>Personal Information</b>
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        height="100%"
                                        name={"name"}
                                        label="Full Name"
                                        defaultValue=""
                                        fullWidth
                                        helperText=""
                                        variant="outlined"
                                        required/>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={"clientType"}
                                        label="Type"
                                        fullWidth
                                        select
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText=""
                                        variant="outlined"
                                    >
                                        {clientType.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="phone"
                                        name={"phone"}
                                        label="Phone"
                                        placeholder={"0XXX XX XX XX"}
                                        defaultValue=""
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={this.onChangeHolder}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="pĥone"
                                        name={"mail"}
                                        label="E mail"
                                        placeholder={"0XXX XX XX XX"}
                                        defaultValue=""
                                        variant="outlined"
                                        fullWidth
                                        required
                                        onChange={this.onChangeHolder}/>
                                </Grid>

                            </Grid>

                            <Grid container spacing={2} className={"SettingGrid"}>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}>
                                    <b>Meeting Information</b>
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name={"parentName"}
                                        label="Preferred Time"
                                        fullWidth
                                        select
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText=""
                                        variant="outlined"
                                        >
                                        {meetingTimes.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        fullWidth
                                        name={"parentName"}
                                        label="Preferred Time"
                                        select
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText=""
                                        variant="outlined"
                                    >
                                        {meetingReasons.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>

                                    <Button variant="contained" color="primary"
                                    style={{width: "100%", height: 50, backgroundColor: "#0ba4d4"}}>
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    By hitting the "submit" button, you agree to our service conditions<br/>
                                </Grid>

                                </Grid>
                    </Grid>

                </form>
    );
    }
}

export default ContactUsForm;