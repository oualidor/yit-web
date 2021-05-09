import React from "react";
import "../Style/Components/SquareAnimation.css"

class SquareAnimation extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {


    }
    render(){
        return(
            <React.Fragment>
                    <ul className={"SquareAnimation"}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </React.Fragment>

        )
    }
}


export default SquareAnimation