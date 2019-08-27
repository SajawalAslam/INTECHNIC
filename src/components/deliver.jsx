import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Deliver extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="main-deliver">
            <h1 className="name-del" id="deli-main"> We Deliver <span className="full-name-del"> ROI </span> <span className="register"> Result on <br/> Internet &reg; </span> </h1>
            <div className="insurance-del">
            <h3 className="h3-del"> Insurance </h3>
            <h2 className="h2-del"> CONCORDIA <br/> PLAN SERVICES </h2>
            <i className="fab fa-xbox i-del"></i>
            <p className="p-del"> customer satisfaction rating for an <br/> insurance provider's website</p>
            </div>
            <div className="circle-del"> 92% </div>
            <div className="webbay-del"> <img src="./images/webby.png"/> </div>
            <div className="bluecross-del"> <img src="./images/blurcross.png"/> </div>
            <div className="finance-del">
            <h3 className="financeh3-del"> Finance </h3>
            <img src="./images/logo.png" className="finance-logo"/>
            <p className="financep-del"> increse in coversions for a <br/> redesigned financial services website </p>
            </div>
            <div className="financecircle-del"> 218% </div>
            <div className="horizon-del"> <img src="./images/horizon.png"/> </div>
            <div className="bmo-del"> <img src="./images/bmo.png"/> </div>
            <div className="manu-del">
            <h3 className="manuh3-del"> Manufacturing </h3>
            <img src="./images/lineage.png" className="manu-logo"/>
            <p className="manup-del"> boots in sale with a redesigned <br/> tile manufacture's website </p>
            </div>
            <div className="manucircle-del"> 527% </div>
            <div className="davey-del"> <img src="./images/press.png"/> </div>
            <div className="brun-del"> <img src="./images/brun.png"/> </div>
            <div className="e-commerce">
            <h3 className="e-commerceh3-del"> E-commerce </h3>
            <img src="./images/eagle.png" className="e-commerce-logo"/>
            <p className="e-commercep-del"> increase in coversions <br/> for a leading brand </p>
            </div>
            <div className="ecommercecircle-del"> 28% </div>
            <div className="css-del"> <img src="./images/css.png"/> </div>
            <div className="amo-del"> <img src="./images/bmo.png"/> </div>
            </div>
            </div>
        )
    }
}