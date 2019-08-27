import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Map extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="map"> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.2988855937865!2d74.33890011459478!3d31.51594998137108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.+Tower!5e0!3m2!1sen!2s!4v1549521209005" width="100%" height="500"></iframe>
            </div>
            </div>
        )
    }
}