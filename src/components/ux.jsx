import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Ux extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme" id="ux-main">
            <div className="ux"> <span className="ux-pic">  </span> 
            <div className="ux-video" id="ux-main">
            <video autoPlay muted loop>
                <source src="./images/ux.mp4" type="video/mp4"/>
            </video>
            <Parallax
            className="parallax-ux"
            offsetYMax={0}
            offsetYMin={-130}
            slowerScrollRate >
             <h1> Ux Design </h1>
            </Parallax>
            </div>
            <div className="option-ux">
            <ul className="option-ux-ul">
            <li> <i className="fa fa-users-cog"></i> <span className="op-span"> User Research </span> </li>
            <li> <i className="fas fa-sitemap"></i> <span className="op-span"> Information Architecture </span>  </li> 
            <li> <i className="fas fa-paper-plane"></i> <span className="op-span"> Wireframing & Prototyping </span> </li>
            <li> <i className="fa fa-object-group"></i> <span className="op-span"> UI Design </span> </li>
            <li> <i className="fa fa-mobile-alt"></i> <span className="op-sans"> Responsive Design </span> </li>
            <li> <i className="fa fa-thumbs-up"></i> <span className="op-sans"> Usability Testing </span> </li>
            <li> <i className="fa fa-th-large"></i> <span className="op-sans"> UX Audits </span> </li>
            </ul>
            </div>
            <h3 className="about-ux"> Most websites, apps and <br/> software are built <br/> for stakeholders, without users <br/> in mind. The resulting <br/> experiences fail because <br/> they are not user-centric. <br/> <br/> User experience (UX) design <br/> takes opinions and <br/> guesswork out of the <br/> equation. We apply research <br/> to give your customers what <br/> they actually want. </h3>
            <div className="circle-ux"> <i className="fa fa-arrow-right"></i> <span className="circle-ux-span"> Start Making <br/> Your User Happy </span> </div>
            </div>
            </div>
        )
    }
}