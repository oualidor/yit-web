import React from "react";
import "./ReasonsWhy.css"
import BenefitCard from "../../../Components/BenefitCard/BenefitCard";
import costsCut from "./Imgs/cut-costs.jpg"
import support from "./Imgs/support-24-7.jpg"
import timeIsTime from "./Imgs/timeIsTime.jpg"
import easyIntegration from "./Imgs/GetStartedBackground.jpg"
const colors = ["red", "orange", "yellow", "brown", "cadetblue", "darkcyan"]
class ReasonsWhy extends React.Component{

    constructor(props){
        super(props);
        let index = Math.floor(Math.random() * colors.length);
        this.stat =
            {
                avatarStyle: {
                    borderColor: colors[index]
                }
            }

    }

    render(){

        return(
                <section className={"ReasonsWhy"} id={"ReasonsWhy"}>
                    <div className="container">
                        <div className="BenefitCardContainer">

                            <BenefitCard
                                title={"24/7 Support"}
                                text={"With put automatic response and the support team, we are as close as s single call"}
                                image={support}
                            />

                        </div>
                        <div className="BenefitCardContainer">
                            <BenefitCard
                                title={"Times is time"}
                                text={"For us, Deadlines are what create our calendar"}
                                image={timeIsTime}
                                direction={"up"} />
                        </div>
                        <div className="BenefitCardContainer">
                            <BenefitCard
                                title={"Cost efficient"}
                                text={"You only pays once and get the benefit of a whole team"}
                                image={costsCut}
                            />
                        </div>

                        <div className="BenefitCardContainer">
                            <BenefitCard
                                title={"Easy integration"}
                                text={"Integration of our services in your business will be  silent and unremarkable"}
                                image={easyIntegration}
                                direction={"up"} />
                        </div>
                    </div>
                    <div className="bottomMenuSpacer"></div>


                </section>

        )
    }
}


export default ReasonsWhy