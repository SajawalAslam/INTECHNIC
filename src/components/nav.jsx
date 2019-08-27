
import React, {Component} from "react";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class Nav extends Component {
    componentDidMount= () =>{
             $('.nav > .bars-nav').mouseover(function(){
                $('.bars-nav').css({
                    transform: 'rotate(360deg)',
                    transition: 'all 1.5s'
                })
            })
            $('.nav > .bars-nav').mouseout(function(){
                $('.bars-nav').css({
                    transform: 'rotate(0deg)',
                    transition: 'all 1.5s'
                })
            })
            $('.nav > .bars-nav').click(function(){
                $('.navbar').css({
                    left: '0px',
                    transition: 'all .5s'
                })
            })
            $('.navbar > i').click(function(){
                $('.navbar').css({
                    left: '-300px',
                    transition: 'all .5s'
                })
            })
            document.addEventListener('scroll', function(){
            var scroll = $(document).scrollTop();
            var nav = $(".nav");
            var i = $(".nav > i");
            var name = $(".nav > .name");
            var span = $(".nav > .name span")
            if (scroll > 10 && scroll < 80) {
                nav.css({
                    backgroundColor: '#221F1F',
                    height: '80px',
                    transition: 'all 1s'
                })
                i.css({
                    top: '35px',
                    transition: 'all .5s',
                    color: 'white'
                })
                name.css({
                    top: '0px',
                    transition: 'all .5s',
                    color: 'white'
                })
                span.css({
                    color: '#D82533'
                })
            }
            if (scroll < 10) {
                nav.css({
                    backgroundColor: 'transparent',
                    transition: 'all 1s'
                })
                i.css({
                    top: '51px',
                    transition: 'all .5s',
                    color: 'white'
                })
                name.css({
                    top: '17px',
                    transition: 'all .5s',
                    color: 'white'
                })
                span.css({
                    color: 'white'
                })
            }
            if (scroll > 600) {
                nav.css({
                    backgroundColor: 'white',
                    height: '80px',
                    transition: 'all 1s'
                })
                i.css({
                    top: '35px',
                    transition: 'all .5s',
                    color: "black"
                })
                name.css({
                    top: '0px',
                    transition: 'all .5s',
                    color: "black"
                })
                span.css({
                    color: '#D82533'
                })
            }
            if (scroll > 1980) {
                span.css({
                    color: '#2878DB',
                    transition: 'all .5s'
                })
            }
            if (scroll > 3000) {
                span.css({
                    color: '#239F46',
                    transition: 'all .5s'
                })
            if (scroll > 4200) {
                span.css({
                    color: '#F86F2B',
                    transition: 'all .5s'
                })
                }
            }
            if (scroll > 5400) {
                nav.css({
                    backgroundColor: '#221F1F',
                    height: '80px',
                    transition: 'all 1s'
                })
                i.css({
                    top: '35px',
                    transition: 'all .5s',
                    color: 'white'
                })
                name.css({
                    top: '0px',
                    transition: 'all .5s',
                    color: 'white'
                })
                span.css({
                    color: '#D82533'
                })
            }
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    render(){
        return(
            <div className="full-theme">
                <div className="main">
                <video
                autoPlay muted loop width="100%" height="auto">
                <source src="./images/work.mp4" type="video/mp4"/>
                </video>
                <div className="nav">
                <i className="fa fa-bars bars-nav"></i>
                <h3 className="name"> intechn<span>!</span>c </h3>
                </div>
                <div className="navbar">
                <i className="fas fa-times" ></i>
                <ul className="nav-ul">
                <li> <a href="#strategy-main"> Strategy </a> </li>
                <li> <a href="#ux-main"> UX </a> </li>
                <li> <a href="#web-main"> Web Design </a> </li>
                <li> <a href="#mar-main"> Marketing </a> </li>
                <li> <a href="#deli-main"> Results  </a> </li>
                <li> About </li>
                <li>  <a href="#contact-main"> Contact </a> </li>
                <li> Blog </li>
                </ul>
                </div>
                <h1 className="title"> Ultimate <br/> Digital <br/> Experiences <p> to acquire, retain, and <br/> delight your clients </p> </h1>
                <ul className="again-ul">
                <li> <a href="#strategy-main"> Strategy </a>  </li>
                <li> <a href="#ux-main"> User Experience  </a> </li>
                <li> <a href="#web-main"> Web Design </a> </li>
                <li> <a href="#mar-main"> Digital Marketing  </a> </li>
                </ul>
                </div>
            </div>

        )
    }
}