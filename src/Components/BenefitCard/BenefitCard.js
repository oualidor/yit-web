import React from "react";
import './BenefitCard.css'
import yes from "./Imgs/yess.png"

const colors = ["red", "orange", "yellow", "brown", "cadetblue", "darkcyan"]
function draw(props){
    if(props.direction == "up"){
        return (
            <div className={"BenefitCard"}>
                <img className="icon" src={props.image}></img>
                .<br/>.<br/>.<br/>.<br/>
                <img className="yesIcon" src={yes} alt={""}/>
                <div className="title">{props.title}</div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        )
    }else {
        return (
            <div className={"BenefitCard"}>
                <img className="yesIcon" src={yes}></img>
                <div className="title">{props.title}</div>
                <div className="text">
                    {props.text}
                </div>
                <span className={"dotsHolder"}>.<br/>.<br/>.<br/>.<br/></span>
                <img className="icon" src={props.image}></img>
            </div>
        )
    }
}
class BenefitCard extends React.Component{

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
            <React.Fragment>
                    {draw(this.props)}
            </React.Fragment>

        )
    }
}


export default BenefitCard