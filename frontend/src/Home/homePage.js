import React, {Component} from 'react';
import MenuCard from "./menuCard";
import img from "../components/images/home.png";
import img1 from "../components/images/text1.gif";

import ParalaxContainer from "./paralaxContainer";

class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
            <div className="p-1 row">
                <div className="col-md-6">
                    <img src={img} height="320px" alt="home img" className="mt-4"/>
                </div> 
                <div className="col-md-6 mt-3">
                        <h1>Welcome to <img src={img1} height="300px" alt="company text img" className="mt-5"/></h1>
                </div>
            </div>
            </div>
            <br/><br/><br/><br/>
            <MenuCard/>
            <ParalaxContainer/>
            
        </div>
        )
    }
}

export default HomePage;
