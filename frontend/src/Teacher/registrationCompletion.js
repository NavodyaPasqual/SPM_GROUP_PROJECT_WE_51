import React, { Component} from 'react';
import axios from 'axios';
import TeacherRegistration from "./teacherRegistration";
import my from "../Supervisor/image/reg4.jpg";

class RegistrationCompletion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/teacher/')
            .then(response => {
                this.setState({teacher: response.data.data})
            } )
    }


    render() {
        return (
            <div className="background">
                <div className="container p-3">
                    <p3>REGISTRATION STATUS</p3>
                    <br/><br/>
                    <div className="container">
                        {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                            <div key={index} className="body">
                                <div className="card shadow p-3 mb-5 bg-body rounded">
                                    <img src={my}/>
                                    <div className="row">
                                        <dt className="col-sm-7">
                                            <div className="row">
                                                <div className="row">
                                                    <h5>Personal Details</h5>
                                                </div>
                                                <br/><br/>
                                                <div className="row">
                                                    <dt className="col-sm-4">Registered Date</dt>
                                                    <dd className="col-sm-8">{item.regDate}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">First Name</dt>
                                                    <dd className="col-sm-8">{item.firstName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Last Name</dt>
                                                    <dd className="col-sm-8">{item.lastName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Gender</dt>
                                                    <dd className="col-sm-8">{item.gender}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">NIC</dt>
                                                    <dd className="col-sm-8">{item.nic}</dd>
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
                                                    <dt className="col-sm-4">Phone</dt>
                                                    <dd className="col-sm-8">{item.contactNumber}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Email</dt>
                                                    <dd className="col-sm-8">{item.email}</dd>
                                                </div>
                                                <br/><br/>
                                                <div className="row">
                                                    <dt className="col-sm-4">Current Status</dt>
                                                    {item.status === "not approved" &&
                                                    <dd className="col-sm-4 badge bg-danger">{item.status}</dd>
                                                    }
                                                    {item.status === "approved" &&
                                                    <dd className="col-sm-4 badge bg-success">{item.status}</dd>
                                                    }

                                                    <br/><br/>
                                                </div>
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

export default RegistrationCompletion;
