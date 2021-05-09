import React from "react";
import Style from "./GetStarted.css"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";
import RequestMeeting from "../RequestMeeting/RequestMeeting";
import {render} from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jquery";
import TelegramIcon from '@material-ui/icons/Telegram';

class GetStarted extends React.Component{

    constructor(props){
        super(props);
        $("a").on('click', function(event) {


            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        })
    }

    componentDidMount() {


    }

    scrollToSection(){

    }


    changePage(page){
        if(page == "RequestMeeting"){
            $(".RequestMeeting").css("display", "block")
            $(".Home").css("display", "none")
        }else {
            $(".RequestMeeting").css("display", "none")
            $(".Home").css("display", "flex")

        }



    }

    render(){
        return(
            <React.Fragment>
                <section className={"GetStarted"} id={"GetStarted"}>
                    <div className="topMenuSpacer"></div>
                    <div className="topMenuSpacer"></div>
                    <div className="GetStartedContainer" >
                        <div className="GetStartedText">
                            First of all, <br/>
                            <span className={"toHide"}>&nbsp;&nbsp;&nbsp;</span>Lets see what fits you most
                        </div>
                        <div className="GetStartedOptions">
                            <a href={"#RequestMeeting"}  onClick={() => this.changePage("RequestMeeting")}>
                                <div className="GetStartedOption" id={"startWithMeeting"}>
                                    Start With Meeting
                                </div>
                            </a>

                            <a href={"#Home"} onClick={() => this.changePage("Home")}>
                            <div className="GetStartedOption" id={"startWithPaper"}>
                               <TelegramIcon style={{marginRight: "10px"}}/> Ready to GO
                            </div>
                            </a>
                        </div>

                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default GetStarted