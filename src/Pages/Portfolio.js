import React from "react";
import $ from 'jquery';
import "../Style/Pages/Portfolio.css"
import WebSite from "../Components/WebSite";
import mimmarImage from "../Imgs/Portfolio/mimmar.png"
import oualidPorfolioImage from "../Imgs/Portfolio/oualidPorfolio.png"
import chaab from "../Imgs/Portfolio/chaab.png"
import arch from "../Imgs/Portfolio/arch.png"
import ecmorce1 from "../Imgs/Portfolio/ecomerce1.jpg"
import ecmorce2 from "../Imgs/Portfolio/ecomerce2.jpg"
import next from "../Imgs/next.webp"
import pevious from "../Imgs/previous.webp"
import manahel1 from "../Imgs/Portfolio/manahel01.png"
import manahel2 from "../Imgs/Portfolio/manahel02.png"

import MobileApp from "../Components/MobileApp";

import {isMobile, setMobileDimensions, setDimenstions} from "../CustomLibs/Functions"
import WebIcon from '@material-ui/icons/Web';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import Slider from "../Components/Slider/Slider";


let technologies = "HTML, CSS, JavaScript, WordPress, PostGreSQL"
class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state = {iconsStyles : {
                width: "",
                height: "",
            }}


    }
    componentDidMount() {

        $(document).ready(function(){

            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                setMobileDimensions();
                $(window).resize(function(){
                    setMobileDimensions();
                });

            }else {
                setDimenstions();
                $(window).resize(function(){
                    setDimenstions();
                });
            }

        })
        if(isMobile){
            this.setState({iconsStyles : {
                    width: 90,
                    height: 90,
                }})
        }else{
            this.setState({iconsStyles : {
                    width: "",
                    height: "",
                }})
        }

        $( ".Header" ).css("background", "-webkit-linear-gradient(white, white)")
        $( ".Header" ).css("top", "0%")
        $( ".navA" ).css("color", "#0ba4d4")

        $( ".menuIcon" ).css("color", "#0ba4d4")

        //Logo
        $( ".HeaderLogoContainer" ).css("display", "block")


        //NavBar
        if(isMobile){
            $( ".NavBar" ).css("top", "10%")
            $( ".NavBar" ).css("width", "100%")
        }
        $( "#navApply" ).css("background-color", "#0ba4d4")
        $( "#navApply" ).css("border-radius", "20px")
        $( ".navApplyText" ).css("color", "white")
    }


    render(){
        return(
            <React.Fragment>
                <section className={"Portfolio"} id={"Portfolio"}>
                    <div className="topMenuSpacer"></div>
                    <div className="pageTitleMargine"></div>
                    <div className="categoriesHolder">
                        <div className="categoryHolder" id={"web"}>
                            <Slider content={"web"}>
                                <WebSite

                                    image={mimmarImage}
                                    name={"Mimmar Sinan"}
                                    coders={"Your IT Department, the coding team"}
                                    desingers={"As client requested, YIT, the design team"}
                                    policy={"Team integration, life time support"}
                                    technologies={technologies}
                                    link={"https://www.mimarsin.com/"}/>
                                <WebSite

                                    image={arch}
                                    name={"Archaeological Paths"}
                                    coders={"Your IT Department, the coding team"}
                                    desingers={"Third party partner"}
                                    policy={"Development only"}
                                    technologies={"Word press, wp travel engine, YIT-Booking"}
                                    link={"https://archaeologicalpaths.com/"}/>
                                <WebSite

                                    image={oualidPorfolioImage}
                                    name={"Oualid KHIAL Porfolio"}
                                    coders={"Oualid KHIAL"}
                                    desingers={"Oualid KHIAL"}
                                    policy={"Life time support"}
                                    technologies={"HTML5, JQUERY, CSS"}
                                    link={"https://archaeologicalpaths.com/"}/>
                            </Slider>
                        </div>
                        <div className="categoryHolder" id={"mobile"}>
                            <Slider content={"mobile"}>
                                <MobileApp

                                    name={"E-Comerce"}
                                    image1={ecmorce1}
                                    image2={ecmorce2}
                                    coders={"YITDepartment, the coding team"}
                                    desingers={"Third party partners, Shortcuts team" }
                                    policy={"Life time support"}
                                    technologies={"Android, NodeJS Express, PostGreSQL "}
                                />
                                <MobileApp
                                    id={"id"}
                                    name={"E-Comerce"}
                                    image1={ecmorce1}
                                    image2={ecmorce2}
                                    coders={"YITDepartment, the coding team"}
                                    desingers={"Third party partners, Shortcuts team" }
                                    policy={"Life time support"}
                                    technologies={"Android, NodeJS Express, PostGreSQL "}
                                />
                            </Slider>
                        </div>
                        <div className="categoryHolder" id={"desktop"}>
                          <Slider content="desktop">
                              <WebSite

                                  image={manahel1}
                                  name={"School managment"}
                                  coders={"Your IT Department, the coding team"}
                                  desingers={"Third party partner"}
                                  policy={"Development only"}
                                  technologies={"Word press, wp travel engine, YIT-Booking"}
                                  link={"https://archaeologicalpaths.com/"}/>
                              <WebSite

                                  image={manahel1}
                                  name={"School managment"}
                                  coders={"Your IT Department, the coding team"}
                                  desingers={"Third party partner"}
                                  policy={"Development only"}
                                  technologies={"Word press, wp travel engine, YIT-Booking"}
                                  link={"https://archaeologicalpaths.com/"}/>
                          </Slider>
                    </div>
                    </div>
                    <div className="tabsMenu">
                        <div className="tab">
                            <a className={"tabEntry"} href="#web">
                                <WebIcon
                                    className={"portfolioNavIcon"}
                                    style={this.state.iconsStyles}/>
                                <span className="porfolioNavA">Web Sites</span>
                            </a>
                        </div>
                        <div className="tab">
                            <a className={"tabEntry"} href="#mobile">
                                <StayCurrentPortraitIcon
                                    className={"portfolioNavIcon"}
                                    style={this.state.iconsStyles}
                                    alt={""}/>
                                <span className="porfolioNavA">Mobile applications</span>
                            </a>
                        </div>
                        <div className="tab">
                            <a className={"tabEntry"} href="#desktop">
                                <DesktopWindowsIcon
                                    className={"portfolioNavIcon"}
                                    style={this.state.iconsStyles}/>
                                <span className="porfolioNavA">Desktop softwares</span>
                            </a>
                        </div>
                        <div className="tab">
                            <a className={"tabEntry"} href="">
                                <DevicesOtherIcon
                                    className={"portfolioNavIcon"}
                                    style={this.state.iconsStyles}/>
                                <span className="porfolioNavA">Other</span>
                            </a>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default Portfolio