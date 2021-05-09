import React from "react";
import Style from "../Style/Pages/Contracts.css"
import mobileApp from "../Imgs/App-development.png"
import webSite from "../Imgs/Services/webSitesDev.png";
import ai from "../Imgs/brain.png"
import wordpress from "../Imgs/wordpress.png"
import socialMediaAd from "../Imgs/Services/socialMediaAd.jpeg"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";

class Contracts extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <section className={"Contracts"} id={"Contracts"}>
                    <div className="topMenuSpacer"></div>
                    <div className="contractsContainer">
                        <div className="contracts">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="contractTitle">
                                        Starter Package
                                    </div>
                                    <div>
                                        - Service development and deployment
                                        <br/>
                                        - 3 Months support
                                        <br/>
                                        - Full control handover after Support period
                                    </div>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        Web sites has always been a 24/7 opened window on your company and a beautiful and yet efficient way
                                        to give your business a digital sign and the first step toward digitalizing any concept
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="contracts">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="contractTitle">
                                        Professional Package
                                    </div>
                                    <div className={"contractDetails"}>

                                        - Service development and deployment
                                        <br/>
                                        - 3 Months support
                                        <br/>
                                        - Full System over-watch during the support period
                                        <br/>
                                        - System Handover after support period
                                    </div>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        Mobiles are the most used devices in the world; having a handy mobile application
                                        will make your company as close as every one pocket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contracts">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="contractTitle">
                                        Full It Department
                                    </div>
                                        We will Be yourIT Department
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        All our services are based/hybrid AI, but we can still integrate AI to your current systems
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contractsOperations">
                        <a href={"https://www.youtube.com"} target={"_blank"}><span className={"contractsWatchVideo"}>More Details?</span></a>
                        <OpenInNewIcon></OpenInNewIcon>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contracts