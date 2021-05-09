import React from "react";
import Style from "../Style/Pages/Services.css"
import mobileApp from "../Imgs/App-development.png"
import webSite from "../Imgs/Services/webSitesDev.png";
import ai from "../Imgs/brain.png"
import wordpress from "../Imgs/wordpress.png"
import socialMediaAd from "../Imgs/Services/socialMediaAd.jpeg"
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {Link} from "react-router-dom";

class Services extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <section className={"Services"} id={"Services"}>
                    <div className="topMenuSpacer"></div>
                    <div className="servicesContainer">
                        <div className="service">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="serviceTitle">
                                        Web Sites development
                                    </div>

                                    <img className="serviceIcon" src={webSite}></img>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        Web sites has always been a 24/7 opened window on your company and a beautiful and yet efficient way
                                        to give your business a digital sign and the first step toward digitalizing any concept
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="service">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="serviceTitle">
                                        Mobile Apps
                                    </div>
                                    <img className="serviceIcon" src={mobileApp} alt={"mobile"}/>

                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        Mobiles are the most used devices in the world; having a handy mobile application
                                        will make your company as close as every one pocket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="serviceTitle">
                                        AI integration
                                    </div>
                                    <img className="serviceIcon" src={ai}></img>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        All our services are based/hybrid AI, but we can still integrate AI to your current systems
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="serviceTitle">
                                        WP Management
                                    </div>
                                    <img className="serviceIcon" src={wordpress}></img>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        All our services are based/hybrid AI, but we can still integrate AI to your current systems
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-inner">
                                <div className="serviceFront">
                                    <div className="serviceTitle">
                                        SM Advertising
                                    </div>
                                    <img className="serviceIcon" src={socialMediaAd}></img>
                                </div>
                                <div className="serviceBack">
                                    <div className="serviceDescription">
                                        All our services are based/hybrid AI, but we can still integrate AI to your current systems
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="servicesOperations">
                        <a href={"/Services"}><span className={"servicesListBtn"}>Full services list</span></a>
                        <OpenInNewIcon></OpenInNewIcon>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Services