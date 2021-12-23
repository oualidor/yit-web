import React from 'react';
import Button from "@material-ui/core/Button";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
function  drawSubmit(isSubmitting){
    if(!isSubmitting){
        return (
            <Button fullWidth startIcon={<SaveIcon />} variant="contained" color="primary" id="4444" type={"submit"}>
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



class DynamicSubmitButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSubmitting : false
        }
    }


    async componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            drawSubmit(this.state.isSubmitting)
        )
    }
}

export default DynamicSubmitButton