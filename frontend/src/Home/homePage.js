import React, {Component} from 'react';
import img from "../components/images/home.png";
import img1 from "../components/images/text1.gif";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
            <div className="p-1 row">
                <div className="col-md-6">
                    <img src={img} height="320px" alt="home img" className="mt-5"/>
                </div> 
                <div className="col-md-6 mt-3">
                        <h1>Welcome to <img src={img1} height="300px" alt="company text img" className="mt-0"/></h1>
                </div>
            </div>
            <div className="p-1 row">
                <center>
                    
                    <h3>Be a Part of Our Orginization <br/>
                        <Link to={`/register`}>
                            <button type="button" class="btn btn-success"><b>Sign Up</b></button> 
                        </Link>
                    </h3>
                </center>
            </div>
            </div>
        )
    }
}

export default HomePage;
