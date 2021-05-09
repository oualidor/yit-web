import React from "react";
import "../Style/Pages/AboutUS.css"
import aboutUs from "../Imgs/aboutUs2.png"

class AboutUs extends React.Component{

    constructor(props){
        super(props);

    }
    componentDidMount() {

    }

    render(){
        return(
            <React.Fragment>
                <section className={"AboutsUs"} id={"AboutsUs"}>
                    <div className="topMenuSpacer"></div>
                    <img className="aboutUsLeftPane" src={aboutUs} alt={"hi"}/>
                    <div className="aboutUsRightPane">
                        <div className="aboutUsTitle">Do your business and let IT for US</div>
                        <div className="aboutUsText">
                            <p>
                                Here in yourIT Department; we believe that small and medium companies are smart enough
                                to dont invest money on creating a whole it department neither to put all their systems on freelancer hands or a single engineer
                            </p>

                            <br/>
                            <p>
                                Your It department will be your partner from developing the small parts of your software, deploying every thing
                                online to dedicating our research laboratories
                                to boost your business
                            </p>
                             <br/>
                            <span id={"aboutUsTag"}>WE WILL BE YOUR IT DEPARTMENT</span>
                        </div>
                        <div className="aboutUsStatsHolder">
                            <div className="statHolder">
                                <div className="statNumber" id={"projectNumber"}>+30</div>
                                <div className="statText">Projects complete</div>
                            </div>
                            <div className="statHolder">
                                <div className="statNumber">+17</div>
                                <div className="statText">Contracted companies</div>
                            </div>
                            <div className="statHolder">
                                <div className="statNumber">6</div>
                                <div className="statText">Current projects</div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        )
    }
}

export default AboutUs