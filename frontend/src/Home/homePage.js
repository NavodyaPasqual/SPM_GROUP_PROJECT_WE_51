import React, {Component} from 'react';
import MenuCard from "./menuCard";
import img1 from "../components/images/text2.gif";

import ParalaxContainer from "./paralaxContainer";

class HomePage extends Component {
    render() {
        return (
            <div>
            <div className="container mt-4 shadow p-1 bg-body rounded">
            <div className="p-1 row">
                <center>
                <div className="col-md-6 mt-3">
                        <h1><img src={img1} height="300px" alt="company text img" className="mt-0"/></h1>
                </div>
                </center>
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
