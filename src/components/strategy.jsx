import React, {Component} from "react";
import { Parallax } from 'react-scroll-parallax';
import $ from "jquery";

export default class Strategy extends Component {
    componentDidMount= () =>{
        // var h1 = $(".h1");
        // const ParallaxImage = () => (
        //     <Parallax
        //         className="custom-class"
        //         offsetYMax={130}
        //         offsetYMin={-120}
        //         slowerScrollRate
        //         tag="figure"
        //     >
        //         <h1></h1>
        //     </Parallax>
        // );
    }
    render(){
        return(
            <div className="full-theme">
            <div className="strategy"> <span className="pic">  </span> 
            <div className="strat-video"  id="strategy-main">
            <video autoPlay muted loop>
                <source src="./images/strategy.mp4" type="video/mp4"/>
            </video>
            <Parallax
            className="parallax-strat"
            offsetYMax={130}
            offsetYMin={-100}
            slowerScrollRate >
            <h1> Strategy </h1>
            </Parallax>
            </div>
            <div className="option">
            <ul className="option-ul">
            <li> <i className="fa fa-user"></i> <span className="op-span"> Strategy Blueprints </span> </li>
            <li> <i className="fab fa-searchengin"></i> <span className="op-span"> Market Research </span>  </li> 
            <li> <i className="fa fa-comment"></i> <span className="op-span"> Customer Interviews </span> </li>
            <li> <i className="fa fa-people-carry"></i> <span className="op-span"> Buyer Personas </span> </li>
            <li> <i className="fa fa-plane"></i> <span className="op-sans"> Customer Journeys </span> </li>
            <li> <i className="fa fa-chart-bar"></i> <span className="op-sans"> Competitive Analysis </span> </li>
            <li> <i className="fa fa-th-large"></i> <span className="op-sans"> SWOT Analysis </span> </li>
            </ul>
            </div>
            <h3 className="about-stra"> When it comes to the <br/> success of your website, app <br/> or software, strategy is <br/> everything. It’s the <br/> foundation for your success. <br/> It’s do or die. <br/> <br/> We understand business. <br/> That's why we begin every <br/> project with a workshop — <br/> crafting a one-of-a-kind, <br/> unique strategy that is <br/> designed to help you win. </h3>
            <div className="circle"> <i className="fa fa-arrow-right"></i> <span className="circle-span"> Start with a <br/> Winning Strategy </span> </div>
            </div>
            </div>
        )
    }
}