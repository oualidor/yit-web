import React from "react";
import "./mobileNavigation.css"

import $ from 'jquery';

import {isMobile} from "../../CustomLibs/Functions";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { Link } from "react-router-dom";
import yitLogo from "../../Imgs/logo.svg"


class MobileNavigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "pageTitle" : "",
            "backgroundColor": this.props.backgroundColor
        }
    }






    componentDidMount() {
        $(".mobileNavigationLogo").click(function (){
          $(".mobileMenu").toggle("display")
          $(".mobileMenu").css("display", "flex")
        })
    }



    render(){
        return(
            <React.Fragment>
                <div className="mobileNavigationMenu">
                    <input type="checkbox" id="toggle"/>
                    <label id="show-menu" htmlFor="toggle">
                        <div className="btn">
                            <i className="material-icons md-36 toggleBtn menuBtn">menu</i>
                            <i className="material-icons md-36 toggleBtn closeBtn">close</i>
                        </div>

                        <div className="btn">
                            <Link to={"/yit-web"}><div className="linkContent"><HomeIcon className={"navigationIcon"}/>Home</div></Link>
                        </div>
                        <div className="btn">
                            <Link to={"/yit-web/WhyUs"}><div className="linkContent"><ThumbUpIcon className={"navigationIcon"}/><span className={"menuText"}>WhyUs</span></div></Link>
                        </div>
                        <div className="btn">

                                <Link to={"/yit-web/Portfolio"}><div className="linkContent"><BusinessCenterIcon className={"navigationIcon"}/>Portf</div></Link>

                        </div>
                        <div className="btn">
                            <Link to={"/yit-web/getStarted"}><div className="linkContent"><TouchAppIcon className={"navigationIcon"}/>Get Started</div></Link>
                        </div>
                    </label>
                </div>

            </React.Fragment>

        )
    }
}


export default MobileNavigation