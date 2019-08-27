import React, {Component} from "react";
import {Route} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Nav from "./nav";
import Strategy from "./strategy";
import Ux from "./ux";
import Web from "./web";
import Marketing from './marketing';
import Deliver from './deliver';
import Contact from './contact';
import Map from './map';

class App extends Component{
    render(){
        return( 
        <ParallaxProvider>
            <Nav/>
            <Strategy/>
            <Ux/>
            <Web/>
            <Marketing/>
            <Deliver/>
            <Contact/>
            <Map/>
        </ParallaxProvider>
    )}
}


export default App;