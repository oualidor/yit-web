import React from "react";
import $ from 'jquery';
import "./Slider.css"
import { Link } from "react-router-dom";


import next from "./Imgs/next.webp"
import previous from "./Imgs/previous.webp"

function fetchChildren(children, type){
    return(children.map((child, index) => {
        return(
            <div className={"childContainer"} id={type+index}>
                {child}
            </div>
        )
    }))
}
class Slider extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentId : 0,
            prevId : 0,
            nextId: 1
        }

    }

    componentDidMount() {
        $(document).ready(function() {


        });
    }

    async nextClick(){
        let prevId = this.state.prevId
        let currentId = this.state.currentId;
        let nextId = this.state.nextId
        if(currentId < this.props.children.length-1){
            window.location.replace("#"+this.props.content+this.state.nextId)
            prevId = currentId
            currentId = currentId +1

            if(nextId < this.props.content.length-1){
                nextId = nextId + 1
            }

            this.setState({
                prevId: prevId,
                nextId: nextId,
                currentId: currentId
            })
        }
    }
    async previousClick(){
        let prevId = this.state.prevId
        let currentId = this.state.currentId;
        let nextId = this.state.nextId
        if(currentId != 0){
            window.location.replace("#"+this.props.content+this.state.prevId)
            if (prevId === 0){
                nextId = currentId -1
                currentId = currentId - 1;
            }else{
                prevId = prevId - 1;
                nextId = currentId -1
                currentId = currentId - 1;
            }

            this.setState({
                prevId: prevId,
                nextId: nextId,
                currentId: currentId
            })
        }
    }

    render(){
        return(
            <div className={"Slider"}>
                <div className="moveLeft">
                    <a
                        id={"aPrev"}
                        onClick={this.previousClick.bind(this)}>
                        <img className={"nextImage"} src={previous} alt="Previous"/>
                    </a>
                </div>
                <div className="ProductsContainer">
                    {fetchChildren(this.props.children, this.props.content)}
                </div>
                <div className="moveRight">
                    <a id={"next"}
                       name={"Hello"}

                       onClick={this.nextClick.bind(this)}>
                    <img className={"nextImage"} src={next} alt="Next"/></a>
                </div>

            </div>
        )
    }
}
export default Slider