import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Marketing extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="mark"> <span className="mark-pic">  </span> 
            <div className="mark-video" id="mar-main">
            <video autoPlay muted loop>
                <source src="./images/marketing.mp4" type="video/mp4"/>
            </video>
            <Parallax
            className="parallax-mark"
            offsetYMax={0}
            offsetYMin={-100}
            slowerScrollRate >
            <h1> Marketing </h1>
            </Parallax>
            </div>
            <div className="option-mark">
            <ul className="option-mark-ul">
            <li> <i className="fa fa-magnet"></i> <span className="op-span"> Inbound Marketing </span> </li>
            <li> <i className="fas fa-volume-up"></i> <span className="op-span"> Content Marketing </span>  </li> 
            <li> <i className="fa fa-sync"></i> <span className="op-span"> Retargeting </span> </li>
            <li> <i className="fab fa-twitter"></i> <span className="op-span"> Social Media </span> </li>
            <li> <i className="fa fa-globe-asia"></i> <span className="op-sans"> SEO </span> </li>
            <li> <i className="fa fa-random"></i> <span className="op-sans"> PPC </span> </li>
            <li> <i className="fa fa-balance-scale"></i> <span className="op-sans"> CRM & Sales </span> </li>
            </ul>
            </div>
            <h3 className="about-mark"> Marketing is about <br/> connecting with people and <br/> helping them solve their <br/> problems. <br/> <br/> The best marketing <br/> empowers customers and <br/> makes them feel confident <br/> and smart. We create <br/> experiences that attract, <br/> engage, and convert. </h3>
            <div className="circle-mark"> <i className="fa fa-arrow-right"></i> <span className="circle-mark-span"> Start with a <br/> Winning Strategy </span> </div>
            </div>
            </div>
        )
    }
}