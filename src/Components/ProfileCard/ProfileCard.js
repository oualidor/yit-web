import React from "react";
import "../../Style/Components/Logo.css"

import style from "./ProfileCard.css"
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const colors = ["red", "orange", "yellow", "brown", "cadetblue", "darkcyan"]
class ProfileCard extends React.Component{

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
        let descItemsList = ""
        if(this.props.desc != undefined){
             descItemsList = this.props.desc.map((entry)=> <p>{entry}</p>)
        }else {

        }
        return(
            <React.Fragment>
                <div className={"ProfileCard"}>
                    <img id={"logoBlue"} className="avatar" src={this.props.avatar} style={this.stat.avatarStyle}/>
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="description">
                        {descItemsList}
                    </div>
                    <div className="links">
                        <a target={"_blank"} href={this.props.links["facebook"]}>
                            <FacebookIcon className={"menuIcon"} style={{color: "white"}}/>
                        </a>
                        <a target={"_blank"} href={this.props.links["linkedin"]}>
                            <LinkedInIcon className={"menuIcon"} style={{color: "white"}}/>
                        </a>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


export default ProfileCard