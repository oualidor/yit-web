import React from "react";
import "../Style/Components/Header.css"
import NavBar from "./NavBar";
import Logo from "./Logo";
import $ from 'jquery';
import PageTitle from "./PageTitle";
import {isMobile} from "../CustomLibs/Functions";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function getSectionIndex(){
    let currentPosition = $(window).scrollTop();
    let scrollIndex = 0 ;
    let date = new Date();
    let lastTimesSec = date.getMilliseconds();
    let sectionHeight  = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    sectionHeight = sectionHeight -100;
    if(currentPosition <= sectionHeight){
        return 0;
    }else{
        if(currentPosition <= sectionHeight*2){
            return 1;
        }else{
            if(currentPosition <= sectionHeight * 3){
                return 2;
            }else{
                if(currentPosition <= sectionHeight * 4){
                    return 3;
                }else{
                    return 4;
                }
            }
        }
    }
}


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "pageTitle" : "",
            "backgroundColor": this.props.backgroundColor
        }
    }

    changeHeaderStyle(sectionHeight){
        if($(window).scrollTop() > sectionHeight -500) {
            //Header
            $( ".Header" ).css("background", "-webkit-linear-gradient(white, white)")
            $( ".Header" ).css("top", "0%")
            $( ".navA" ).css("color", "#0ba4d4")

            $( ".menuIcon" ).css("color", "#0ba4d4")

            //Logo
            $( ".HeaderLogoContainer" ).css("display", "block")
            $( ".navDropDownContent" ).css("background", "-webkit-linear-gradient(white, white)")



            //NavBar
            if(isMobile){
                $( ".NavBar" ).css("top", "10%")
                $( ".NavBar" ).css("width", "100%")
            }
            $( "#navApply" ).css("background-color", "#0ba4d4")
            $( "#navApply" ).css("border-radius", "20px")
            $( ".navApplyText" ).css("color", "white")
        } else {

            //Header
            $( ".Header" ).css("background-color", "")
            $( ".Header" ).css("top", "2%")
            $( ".Header" ).css("height", "9%")

            //Logo
            $( ".HeaderLogoContainer" ).css("display", "none")

            $( ".navDropDownContent" ).css("background", "none")


            $( ".navA" ).css("color", "white")
            $( ".navA" ).css("border-color", "")
            $( ".Header" ).css("background", "")
            $( ".menuIcon" ).css("color", "white")

            //NavBar
            if(isMobile){
                $( ".NavBar" ).css("top", "10%")
                $( ".NavBar" ).css("width", "100%")
            }

            //Apply button
            $( "#navApply" ).css("background-color", "#EEEEEE")
            $( "#navApply" ).css("border-radius", "20px")
            $( ".navApplyText" ).css("color", "black")

            //NavBar
            if(isMobile){
                $( ".navA" ).css("color", "#0ba4d4")
                $( ".NavBar" ).css("top", "0%")
            }

        }
    }

    setSectionTitle(index, title){
        switch (index){
            case 0:
                $(".headerPageTitleContainer").css("display", "block");
                $(".PageTitle").css("color", "white");
                this.setState({
                    pageTitle: title[0]
                });
                break;
            case 1:
                $(".headerPageTitleContainer").css("display", "block");
                $(".PageTitle").css("color", "black");
                this.setState({
                    pageTitle: title[1]
                });
                break;
            case 2:
                $(".headerPageTitleContainer").css("display", "block");
                this.setState({
                    pageTitle: title[2]
                });
                break;
            case 3:
                $(".headerPageTitleContainer").css("display", "block");
                this.setState({
                    pageTitle: title[3]
                });
                break;


        }
    }


    componentDidMount() {
        let currentPosition = $(window).scrollTop();
        let scrollIndex = 0 ;
        let date = new Date();
        let lastTimesSec = date.getMilliseconds();
        let sectionHeight  = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        window.onscroll = () =>{
            if(this.props.page == "home" || this.props.page == "whyUs" || this.props.page == "GetStarted"){
                this.setSectionTitle(getSectionIndex(), this.props.titles);
                //$('#projectNumber').html("+"+parseInt(0.02 * $(window).scrollTop()))
                this.changeHeaderStyle(sectionHeight);
                currentPosition = sectionHeight;
            }

        };
    }



    render(){
        return(
            <React.Fragment>
                <div className={"Header"} style={{backgroundColor: this.state.backgroundColor}}>
                    <div className="mobileHeaderLogoContainer">
                        <Logo/>
                    </div>
                    <div className="HeaderLogoContainer">
                        <Logo/>
                    </div>
                    <div className="headerPageTitleContainer">
                        <PageTitle title={this.state.pageTitle}/>
                    </div>
                    <div className="socialMediaContainer">
                        <a href={"https://web.facebook.com/youritdepartment"} target={"_blank"}>
                            <FacebookIcon className={"menuIcon"} style={{color: "white", fontSize: "1.8vw"}}/>
                        </a>
                        <a href={"https://www.linkedin.com/company/yourit-department/"} target={"_blank"}>
                            <LinkedInIcon className={"menuIcon"} style={{color: "white", fontSize: "1.8vw"}}/>
                        </a>
                    </div>
                    <div className="navBarContainer">
                        <NavBar
                        page={this.props.page}></NavBar>
                    </div>


                </div>
            </React.Fragment>

        )
    }
}


export default Header