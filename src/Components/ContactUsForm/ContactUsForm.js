import React from 'react';
import "./ContactUsForm.css"

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


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

    }
    changeHolder(e) {
        let nam = e.target.name;
        let val = e.target.value;
        if(e.target.type === "number"){
            val = parseInt(val)
        }
        this.state.newInfo[nam]= val
    }
    onSubmit(){
        alert("hihihihi")
        this.props.onSubmit(this.state.newInfo)
    }
    render() {


    return (
                <form className={"contactUsForm"} noValidate>
                    <Grid container spacing={2} >
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <span className={"topText"}>Schedule an online meeting</span><br></br>
                                </Grid>
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={12}>
                                    <b>Personal Information</b>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        name={"fullName"}
                                        onChange={this.changeHolder.bind(this)}
                                        label="Full Name"
                                        defaultValue=""
                                        fullWidth
                                        helperText=""
                                        required
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        name={"type"}
                                        label="Type"
                                        fullWidth
                                        select
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText=""
                                        variant="outlined"
                                        onChange={this.changeHolder.bind(this)}
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
                                        onChange={this.changeHolder.bind(this)}
                                    />
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
                                        onChange={this.changeHolder.bind(this)}/>
                                </Grid>

                            </Grid>

                            <Grid container spacing={2}>
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
                                        onChange={this.changeHolder.bind(this)}
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
                                        name={"reason"}
                                        label="Preferred Time"
                                        select
                                        defaultValue=""
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText=""
                                        variant="outlined"
                                        onChange={this.changeHolder.bind(this)}
                                    >
                                        {meetingReasons.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <span style={{fontFamily: 'Poppins'}}>By hitting the "submit" button, you agree to our service conditions</span>
                                </Grid>
                                <Grid item xs={2}>

                                </Grid>
                                <Grid item xs={5}>

                                    <Button variant="contained" color="primary" onClick={this.props.onCancel}
                                    style={{width: "100%", height: 50, backgroundColor: "red"}}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item xs={5}>

                                    <Button variant="contained" color="error" onClick={this.onSubmit.bind(this)}
                                            style={{width: "100%", height: 50, backgroundColor: "#0ba4d4"}}>
                                        Submit
                                    </Button>
                                </Grid>


                                </Grid>
                    </Grid>

                </form>
    );
    }
}

export default ContactUsForm;