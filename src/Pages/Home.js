import React from "react";
import "../Style/Pages/Home.css"
import $ from 'jquery';
import Logo from "../Components/Logo";
import SquareAnimation from "../Components/SquareAnimation";
import scrollDownIcon from "../Imgs/scrollDown.gif";



class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        $(document).ready(function(){

        })
    }
    render(){
        return(
                <div className={"Home"} id={"Home"}>
                    <SquareAnimation/>
                    <div className="homeLogoContainer">
                        <Logo/>
                    </div>
                    <div className="homeText">
                        <ul className="toAnimate">
                            <li>Dedicated agent integration</li>
                            <li>Web Sites</li>
                            <li>Artificial intelligence based systems</li>
                        </ul>
                        <ul className="toAnimate">
                            <li><p>Life time support</p></li>
                            <li>Android / iOS Mobile apps</li>
                            <li>Business IA integration</li>
                        </ul>
                    </div>
                    <img className="scrollDown" src={scrollDownIcon}/>
                </div>
        )
    }
}
export default Home