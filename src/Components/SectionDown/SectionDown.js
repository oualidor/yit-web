import React from "react";
import "./SectionDown.css"
import $ from 'jquery';
import sorryIcon from "./Imgs/sorry.png";
import SquareAnimation from "../SquareAnimation";
import scrollDownIcon from "../../Imgs/scrollDown.gif";



class SectionDown extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        $(document).ready(function(){
            test();

        })
    }
    render(){
        return(
                <div className={"SectionDown"} id={"SectionDown"}>
                    <div className="topMenuSpacer"></div>
                    <div className="mainContainer">
                        <img src={sorryIcon} className={"sorryIcon"}/>

                        <div className={"MainText"}>
                            We are trying to make this section better :), <br/>please check it later.
                        </div>
                    </div>

                </div>
        )
    }
}
export default SectionDown