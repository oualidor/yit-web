import React from "react";
import "./YitForm.css"
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import {Notifications} from "../../Apis/Notifications";
import DynamicSubmitButton from "../DynamicSubmitButton/DynamicSubmitButton";

function  drawSubmit(isSubmitting){
    if(!isSubmitting){
        return (
            <Button fullWidth startIcon={<SaveIcon />} variant="contained" color="primary" type={"submit"}>
                Submit
            </Button>
        )
    }
    else {
        return (

            <LoadingButton
                fullWidth
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Requesting
            </LoadingButton>
        )
    }
}


const DoneMsg = () =>{
    return (<div className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </div>)
}

class YitForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted: false,
            isSubmitting: false,
            done: false,
            newInfo: {},
            doneMsg : this.props.doneMsg === undefined ? "Operation success" : "Operation failed",
            errMsg : this.props.errMsg !== undefined ? this.props.errMsg : "Operation failed"
        }
        this.submitButton = React.createRef()

    }

    changeHolder(e) {
        let nam = e.target.name;
        let val = e.target.value;
        if(e.target.type === "number"){
            val = parseInt(val)
        }
        this.state.newInfo[nam]= val
    }

    onDragEnd(lat, long){
        let newLat = lat,
            newLng = long;
        this.state.newInfo["x"]= newLat
        this.state.newInfo["y"]= newLng
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.submitButton.current.setState({
            isSubmitting: true
        })
        this.setState({
            isSubmitting: true
        })

        if(await this.props.handleSubmit(this.state.newInfo) === true){

            this.setState({isSubmitted: true})
            Notifications.drawActionResult("pagesNotifications", this.state.doneMsg, "success")
            if(this.props.onSuccess !== undefined){
                this.props.onSuccess()
            }
            setTimeout(()=>{
                this.setState({
                    isSubmitted: false,
                    isSubmitting: false
                })
            }, 2000)

        }else {
            this.setState({
                isSubmitted: false,
                isSubmitting: false
            })
            Notifications.drawActionResult("pagesNotifications", this.state.errMsg, "error")
            this.submitButton.current.setState({
                isSubmitting: false
            })
        }
    }

    recursiveCloneChildren(children) {
        return React.Children.map(children, child => {
            if(!React.isValidElement(child)) return child;
            if(child.type.displayName === "YitLocationPicker"){
                let childProps = {onDragEnd: this.onDragEnd.bind(this)};
                return React.cloneElement(child, childProps);
            }else {
                let  childProps = {onChange: this.changeHolder.bind(this)};
                childProps.children = this.recursiveCloneChildren(child.props.children);
                return React.cloneElement(child, childProps);
            }
        })
    }

    async componentDidMount() {

    }

    render() {
        if(!this.state.isSubmitted){
            return (
                <div className={"YitForm"} id={"YitForm"}>
                    <form  onSubmit={this.handleSubmit.bind(this)} id={"myForm"} >
                        {this.recursiveCloneChildren(this.props.children)}
                        <br></br>
                        <br></br>
                        <Grid container item spacing={2}>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    variant={"outlined"}
                                    fullWidth
                                    color="secondary"
                                    id="outlined-error-helper-text"
                                    label="Password"
                                    defaultValue={"APN.APN"}
                                    type={"reset"}
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <DynamicSubmitButton ref={this.submitButton}></DynamicSubmitButton>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            )
        }else{
            return (
                <div className={"YitForm"} id={"YitForm"}>
                    <DoneMsg/>
                </div>
            )
        }

    }
}
export default YitForm