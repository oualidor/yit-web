import React from "react";
import style from "../../../Style/Components/OurTeam.css"
import ProfileCard from "../../../Components/ProfileCard/ProfileCard";
import oualid from "../../../Imgs/ourTeam/oualid.jpg";
import ihab from "../../../Imgs/ourTeam/ihab.jpg";
import mokhtar from "../../../Imgs/ourTeam/mokhtar.jpg";
import mustapha from "../../../Imgs/ourTeam/mustapha.jpg";
import fehti from "../../../Imgs/ourTeam/fethi.jpg";

const OurTeam = () => {
    return (
        <section className={"OurTeam"} id={"OurTeam"}>

            <div className="topMenuSpacer"></div>
            <div className="OurTeamContainer">
                <div className="cardContainer">
                    <ProfileCard
                    avatar={oualid}
                    name={"Oualid KHIAL"}
                    desc={[
                        "Master business administration",
                        "Computer Science Phd Researcher",
                        "YourIT Department CEO"
                    ]}
                    links={{
                        "facebook": "https://web.facebook.com/oualid.khial",
                        "linkedin": "https://www.linkedin.com/in/oualidkhial/"
                    }}></ProfileCard>
                </div>
                <div className="cardContainer">
                    <ProfileCard
                        avatar={ihab}
                        name={"Ihab CHERITI"}
                        desc={[
                            "Computer Science Engineer",
                            "YourIT Department Global Manager"
                        ]}
                        links={{
                            "facebook": "https://web.facebook.com/cheriti.ihab",
                            "linkedin": "https://www.linkedin.com/in/cheritiihab/"
                        }}></ProfileCard>
                </div>
                <div className="cardContainer">
                    <ProfileCard
                        avatar={mokhtar}
                        name={"Mokhtar KADDOS"}
                        desc={[
                            "Computer Science Engineer",
                            "YourIT Department Teach Team leader"
                        ]}
                        links={{
                            "facebook": "https://web.facebook.com/cheriti.ihab",
                            "linkedin": "https://www.linkedin.com/in/cheritiihab/"
                        }}></ProfileCard>
                </div>
                <div className="cardContainer">
                    <ProfileCard
                        avatar={mustapha}
                        name={"Mustapha KHIAL"}
                        desc={[
                            "Master degree in networks",
                            "YourIT Department Network Team leader"
                        ]}
                        links={{
                            "facebook": "https://web.facebook.com/cheriti.ihab",
                            "linkedin": "https://www.linkedin.com/in/cheritiihab/"
                        }}></ProfileCard>
                </div>
                <div className="cardContainer">
                    <ProfileCard
                        avatar={fehti}
                        name={"Fethi BOKHORS"}
                        desc={[
                            "Master degree in computer scince",
                            "YourIT Department main designer"
                        ]}
                        links={{
                            "facebook": "https://web.facebook.com/cheriti.ihab",
                            "linkedin": "https://www.linkedin.com/in/cheritiihab/"
                        }}></ProfileCard>
                </div>
            </div>
        </section>
    )

}

export default OurTeam;