import React from "react";
import "./mobileNavigation.css"

import $ from 'jquery';

import isMobile from "../../CustomLibs/Functions";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { Link } from "react-router-dom";


class MobileNavigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "pageTitle" : "",
            "backgroundColor": this.props.backgroundColor
        }
    }






    componentDidMount() {

    }



    render(){
        return(
            <React.Fragment>
                <div className={"mobileNavigationBar"}>
                    <ul>
                        <li><Link to={"/"}><div className="linkContent"><HomeIcon className={"navigationIcon"}/>Home</div></Link></li>
                        <li><Link to={"/WhyUs"}><div className="linkContent"><ThumbUpIcon className={"navigationIcon"}/><span className={"menuText"}>WhyUs</span></div></Link></li>
                        <li><Link to={"/Portfolio"}><div className="linkContent"><BusinessCenterIcon className={"navigationIcon"}/>Portf</div></Link></li>
                        <li><Link to={"/getStarted"}><div className="linkContent"><TouchAppIcon className={"navigationIcon"}/>Get Started</div></Link></li>
                    </ul>
                </div>
            </React.Fragment>

        )
    }
}


export default MobileNavigation