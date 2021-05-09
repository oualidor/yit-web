import React from "react";
import "../Style/Components/WebSite.css"

import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {colors} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

const WebSite = ({id, image, name, coders, desingers, policy, technologies, link}) => {
        return(
            <React.Fragment>
                <section className={"WebSite"} id={id}>
                    <img className="webSiteImage" src={image}/>
                    <div className="webSiteContent">
                        <div className="webSiteName">{name}</div>
                        <div className="webSiteCoders">
                            <span className="webSiteContentTitle">Developed by: </span>{coders}.</div>
                        <div className="webSiteDesigners">
                            <span className="webSiteContentTitle">Designed by: </span>{desingers}.</div>
                        <div className="webSitePolicyType">
                            <span className="webSiteContentTitle">Policy: </span> {policy}</div>
                        <div className="webSiteTechnologies">
                            <span className="webSiteContentTitle">Technologies: </span>{technologies}</div>
                        <div className="webSiteOperations">
                            <div className="webSiteOpenBTN">
                                <a
                                    className={"webSiteOpenBtnA"}
                                    href={link}>Open Site
                                </a>
                                <OpenInNewIcon/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
}


export default WebSite