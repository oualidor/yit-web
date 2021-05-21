import React from "react";
import "../Style/Components/NavBar.css"
import burgerMenuIconBlue from "../Imgs/burgerMenuBlue.png"
import $ from 'jquery';
import {isMobile} from "../CustomLibs/Functions"
import { Link } from "react-router-dom";

function homeAdds(page){
    switch (page){
        case "home":
            return(
                <div className="navDropDownContent">
                    <br/>
                    <a className={"navA"} href="#Home">Home</a>
                    <a className={"navA"} href="#AboutsUs">About US</a>
                    <a className={"navA"} href="#Services">Services</a>
                    <a className={"navA"} href="#ContactUS">Contact Us</a>
                </div>
            )
    }

    if(page == "home"){

    }
}

function whyUsAdds(page){
    switch (page){
        case "whyUs":
            return(
                <div className="navDropDownContent">
                    <br/>
                    <a className={"navA"} href="#WhyUs">WhyUs</a>
                    <a className={"navA"} href="#AboutsUs">Our Policy</a>
                    <a className={"navA"} href="#OurTeam">Meet The team</a>
                    <a className={"navA"} href="#ReasonsWhy">Top Reasons</a>
                </div>
            )
    }
}

class NavBar extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        $(document).ready(function() {
            if(isMobile){
                $('.NavBar').click(function () {

                    $('.NavBar').fadeOut("fast");
                });

            }

            $('.BurgerMenu').click(function () {

                $('.NavBar').fadeToggle("fast");
            });
        });
    }

    render(){
        return(
            <React.Fragment>

                <ul className="NavBar">
                    <li className="navLi" id="navHome">
                        <a className={"navA"} href="/yit-web/">YourIT DEPARTMENT</a>
                        {homeAdds(this.props.page)}
                    </li>
                    <li className="navLi" id="navServices">
                        <Link className={"navA"} to={"/yit-web/WhyUs"}>WHY US</Link>
                        {whyUsAdds(this.props.page)}
                    </li>
                    <li className="navLi" id="navPortfolio">
                        <Link className={"navA"} to={"/yit-web/Portfolio"}>PORTFOLIO</Link>
                    </li>
                    <li className="navLi" id="navApply">
                        <Link className={"navA navApplyText"}  id={""} to="/yit-web/GetStarted">Get Started</Link>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default NavBar