import React, {Component} from 'react';
import axios from 'axios';
import './styles/viewProfile.css';
import {Link} from "react-router-dom";
import my from "./image/MyApril8.jpg";


class UpdatedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/profile')
            .then(response => {
                this.setState({profile: response.data.data})
            } )
    }

    render() {
        return (
            <div className="background">


                <div className="container p-3">
                    <p3>TEACHER PROFILES</p3>
                    <br/><br/>
                    <div className="container">
                        {this.state.profile.length > 0 && this.state.profile.map((item,index) => (
                            <div key={index} className="body">
                                <div className="card shadow p-3 mb-5 bg-body rounded">
                                    <img src={my}/>
                                    <div className="row">
                                        <dt className="col-sm-7">
                                            <div className="row">
                                                <div className="row">
                                                    <dt className="col-sm-4">Registration Number</dt>
                                                    <dd className="col-sm-8">{item.registrationNumber}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">First Name</dt>
                                                    <dd className="col-sm-8">{item.fName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Last Name</dt>
                                                    <dd className="col-sm-8">{item.lName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">NIC</dt>
                                                    <dd className="col-sm-8">{item.NIC}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Passport ID</dt>
                                                    <dd className="col-sm-8">{item.passportNumber}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Address</dt>
                                                    <dd className="col-sm-8">{item.address}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Contact Number</dt>
                                                    <dd className="col-sm-8">{item.contactNumber}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Email</dt>
                                                    <dd className="col-sm-8">{item.email}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Last Edit</dt>
                                                    <dd className="col-sm-8">{item.editedDate}</dd>
                                                </div>
                                                <br/><br/>
                                            </div>
                                        </dt>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        )
    }
}

export default UpdatedProfile;
