import React from "react";
import $ from 'jquery';
import "../Style/Pages/PortfolioTemp.css"
import WebSite from "../Components/WebSite";
import mimmarImage from "../Imgs/Portfolio/mimmar.png"
import oualidPorfolioImage from "../Imgs/Portfolio/oualidPorfolio.png"
import arch from "../Imgs/Portfolio/arch.png"
import ecmorce1 from "../Imgs/Portfolio/ecomerce1.jpg"
import ecmorce2 from "../Imgs/Portfolio/ecomerce2.jpg"
import next from "../Imgs/next.webp"
import pevious from "../Imgs/previous.webp"
import MobileApp from "../Components/MobileApp";


import WebIcon from '@material-ui/icons/Web';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import Logo from "../Components/Logo";


let ids = [0, 1, 2]

let prevId = 0;
let nextID = 1;
let currentID = 0;
function prevClick(e) {
    $("#next").attr("href", "#Project"+currentID);
    $("#aPrev").attr("href", "#Project"+prevId);
    if (prevId === 0){
        nextID = currentID -1
        currentID = currentID - 1;
    }else{
        prevId = prevId - 1;
        nextID = currentID -1
        currentID = currentID - 1;
    }
}



let technologies = "HTML, CSS, JavaScript, WordPress, PostGreSQL"
class PortfolioTemp extends React.Component{
    constructor(props){
        super(props);


    }
    componentDidMount() {
        $(document).ready(function(){

        })
    }

    nextClick(e){
        $("#next").attr("href", "#Project"+nextID);
        $("#aPrev").attr("href", "#Project"+currentID);
        prevId = currentID;
        nextID = nextID + 1
        currentID = currentID + 1;

    }
    render(){
        return(
            <React.Fragment>
                <section className={"PortfolioTemp"} id={"Portfolio"}>
                    <div className="portfolioTempLogoContainer">
                        <Logo/>
                    </div>
                    <div className="pageTitle PortfolioTempPageTitle">Few of our products</div>
                    <div className="rermark">NB: tens of more products cant be published here due to our privacy policy</div>
                    <div className="categoriesHolder">
                        <div className="categoryHolder" id={"web"}>
                            <div className="moveLeft">
                                <a id={"aPrev"} href={"#Project"+prevId} onClick={prevClick}><img className={"nextImage"} src={pevious} alt=""/> </a>
                            </div>
                            <div className="ProductsContainer">
                                <WebSite
                                    id={"Project"+ids[0]}
                                    image={mimmarImage}
                                    name={"Mimmar Sinan"}
                                    coders={"Your IT Department, the coding team"}
                                    desingers={"As client requested, YIT, the design team"}
                                    policy={"Team integration, life time support"}
                                    desc={"description"}
                                    technologies={technologies}
                                    link={"www.gogle.com"}/>
                                <WebSite
                                    id={"Project"+ids[1]}
                                    image={arch}
                                    name={"Archaeological Paths"}
                                    desc={"description"}
                                    link={"https://archaeologicalpaths.com/"}/>
                                <WebSite
                                    id={"Project"+ids[2]}
                                    image={oualidPorfolioImage}
                                    name={"Oualid KHIAL Porfolio"}
                                    desc={"description"}
                                    link={"www.google.com"}/>
                            </div>
                            <div className="moveRight">
                                <a id={"next"} href={"#Project"+nextID} onClick={this.nextClick}><img className={"nextImage"} src={next} alt="Next"/></a>
                            </div>
                        </div>
                        <div className="categoryHolder" id={"mobile"}>
                            <MobileApp
                                id={"id"}
                                name={"E-Comerce"}
                                image1={ecmorce1}
                                image2={ecmorce2}
                                technologies={"Android, NodeJS Express, PostGreSQL "}
                            />

                        </div>

                    </div>
                    <div className="tabsMenu">
                        <div className="tab">
                            <a className={"tabEntry"} href="#web">
                                <WebIcon  fontSize={"large"} className={"porfolioNav"} />
                                <span className="porfolioNavA">Web Sites</span>
                            </a>
                        </div>
                        <div className="tab">
                            <a className={"tabEntry"} href="#mobile">
                                <StayCurrentPortraitIcon fontSize={"large"} className={"porfolioNav"} alt={""}/>
                                <span className="porfolioNavA">Mobile applications</span>
                            </a>
                        </div>
                        <div className="tab">

                            <a className={"tabEntry"} href="">
                                <DesktopWindowsIcon fontSize={"large"} className={"porfolioNav"}/>
                                <span className="porfolioNavA">Desktop softwares</span>
                            </a>
                        </div>
                        <div className="tab">
                            <a className={"tabEntry"} href="">
                                <DevicesOtherIcon fontSize={"large"} className={"porfolioNav"}/>
                                <span className="porfolioNavA">Other</span>
                            </a>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default PortfolioTemp