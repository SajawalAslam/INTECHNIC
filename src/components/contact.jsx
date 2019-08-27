import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Contact extends Component {
    componentDidMount= () =>{
    }
    render(){
        return(
            <div className="full-theme">
            <div className="main-contact">
            <h1 className="h1-contact" id="contact-main"> Start Getting <span className="resultcontact"> Results </span> <span className="contactnumber"> +1 855 WWW-PROS </span> </h1>
            <input type="text" className="name-contact"/>
            <label className="label-name"> First Name </label> 
            <input type="text" className="last-contact"/>
            <label className="last-name"> Last Name </label> 
            <input type="text" className="phone-contact"/>
            <label className="phone-num"> Phone </label> 
            <input type="text" className="email-contact"/>
            <label className="email-num"> Email </label>
            <input type="text" className="company-contact"/>
            <label className="company-num"> Email </label> 
            <select className="role">
            <option value="select"> Please Select... </option>
            <option value="ceo"> CEO/VP/Executive </option>
            <option value="marketing"> Marketing Director/Manager </option>
            <option value="product"> Product/ R&D Manager </option>
            </select>
            <label className="role-num"> Your Role </label>
            <select className="help">
            <option value="select"> Please Select... </option>
            <option value="design"> Redesign an Existing Website/App </option>
            <option value="app"> Design a Brand-New Website/App</option>
            <option value="ux"> Improve Usability/UX </option>
            <option value="help"> Help with Marketing/Strategy </option>
            <option value="seek"> Seeking Partnership or Employment </option>
            <option value="other"> Other </option>
            </select>
            <button className="button-send"> Send message </button>
            </div>
            </div>
        )
    }
}