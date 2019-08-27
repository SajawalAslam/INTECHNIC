import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Web extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="web"> <span className="web-pic">  </span> 
            <div className="web-video" id="web-main">
            <video autoPlay muted loop>
                <source src="./images/web-design.mp4" type="video/mp4"/>
            </video>
            <Parallax
            className="parallax-web"
            offsetYMax={50}
            offsetYMin={-50}
            slowerScrollRate >
            <h1> Web Design </h1>
            </Parallax>
            </div>
            <div className="option-web">
            <ul className="option-web-ul">
            <li> <i className="fa fa-lightbulb"></i> <span className="op-span"> Creative Direction </span> </li>
            <li> <i className="fas fa-comments"></i> <span className="op-span"> Interactive Experiences </span>  </li> 
            <li> <i className="fa fa-star"></i> <span className="op-span"> Branding </span> </li>
            <li> <i className="fa fa-edit"></i> <span className="op-span"> Copywriting </span> </li>
            <li> <i className="fa fa-camera"></i> <span className="op-sans"> Photography </span> </li>
            <li> <i className="fa fa-video"></i> <span className="op-sans"> Video Production </span> </li>
            <li> <i className="fa fa-briefcase"></i> <span className="op-sans"> Business Integration </span> </li>
            </ul>
            </div>
            <h3 className="about-web">You need more than just a <br/> website. You need results. <br/> We turn underperforming <br/> websites around. <br/> <br/> We have the business <br/> acumen, creativity, and <br/> experience to solve any <br/> problem and deliver results. </h3>
            <div className="circle-web"> <i className="fa fa-arrow-right"></i> <span className="circle-web-span"> Start Getting <br/> Website Results </span> </div>
            </div>
            </div>
        )
    }
}