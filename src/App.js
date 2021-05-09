import React from 'react';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Components/ContactUs";
import WhyUs from "./Sections/WhyUs/WhyUs/WhyUs";
import Contracts from "./Pages/Contracts";
import OurTeam from "./Sections/WhyUs/OurTeam/OurTeam";
import SectionDown from "./Components/SectionDown/SectionDown";
import GetStarted from "./Sections/GetStarted/GetStarted/GetStarted";
import RequestMeeting from "./Sections/GetStarted/RequestMeeting/RequestMeeting";
import whyUsImage from  "./Imgs/WhYs.jpg"
import ReasonsWhy from "./Sections/WhyUs/ReasonsWhy/ReasonsWhy";
import $ from "jquery";
import MobileNavigation from "./Components/mobileNavigation/mobileNavigation";

/*  "homepage": "file:///mnt/Bibliotheque/Programing/Projects/React/yit-web/build/",*/
class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }


    componentDidMount() {
        $(document).ready(function(){
            test();

        })
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Header
                            page={"home"}
                            backgroundColor={"none"}
                        titles={["", "Who We Are", "What We DO", "Contact Information"]}/>
                        <Home></Home>
                        <AboutUs></AboutUs>
                        <Services></Services>
                        <ContactUs></ContactUs>

                    </Route>
                    <Route exact path={"/WhyUs"}>
                        <Header
                            page={"whyUs"}
                            backgroundColor={"none"}
                            titles={["", "AboutUs", "Meet The Teem", "Top Reasons"]}/>
                        <WhyUs></WhyUs>
                        <AboutUs></AboutUs>
                        <OurTeam></OurTeam>
                        <ReasonsWhy></ReasonsWhy>
                    </Route>
                    <Route exact path={"/GetStarted"}>
                        <Header
                            page={"GetStarted"}
                            backgroundColor={"none"}
                            titles={["getStarted", "Schedule a meeting"]}/>

                                <GetStarted></GetStarted>
                                <RequestMeeting></RequestMeeting>


                    </Route>
                    <Route exact path={"/Portfolio"}>
                        <Header
                            backgroundColor={"white"}/>
                        <Portfolio></Portfolio>
                    </Route>
                    <Route exact path={"/Services"}>
                        <Header
                            backgroundColor={"white"}/>
                        <Portfolio></Portfolio>
                    </Route>
                </Switch>
                <MobileNavigation></MobileNavigation>
            </BrowserRouter>

        );
    }
}

export default App;
