import React from "react";
import "../Style/Components/MobileApp.css"
const MobileApp = ({id, image1, image2,  name, coders, desingers, policy, technologies, link}) => {
    return(
        <React.Fragment>
            <section className={"MobileApp"} id={id}>
                <div className="mobileAppImagesContainer">
                    <img className="mobileAppImage" src={image1}/>
                    <img className="mobileAppImage" src={image2}/>
                </div>
                <div className="mobileAppContent">
                    <div className="mobileAppName">
                        {name}
                    </div>
                    <div className="mobileAppCoders">
                        <span className={"mobileAppContentTitle"}>Developed by:</span>
                        {coders}
                    </div>
                    <div className="mobileAppDesigners">
                        <span className={"mobileAppContentTitle"}>Designed by:</span>
                        {desingers}
                    </div>
                    <div className="mobileAppPolicyType">
                        <span className={"mobileAppContentTitle"}>Policy:</span>
                        {policy}
                    </div>
                    <div className="mobileAppTechnologies">
                        <span className={"mobileAppContentTitle"}>Technologies:</span>
                        {technologies}</div>
                    <div className="mobileAppOperations">
                        <div className="mobileAppOpenBTN"><a href={link}>More images</a></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default MobileApp