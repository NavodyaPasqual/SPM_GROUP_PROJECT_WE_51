import React, {Component} from 'react';
import axios from 'axios';
import './styles/viewProfile.css';
import {Link} from "react-router-dom";
import my from "./image/MyApril8.jpg";


class ViewProfile extends Component {
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

    //to call the end point and delete a value using axios
    deleteProfile(e, id){
        axios.delete(`http://localhost:8081/profile/delete/${id}`)
            .then(response => {
                alert('Permanent Teacher Profile Deleted Successfully')
                this.componentDidMount()
            })
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
                                        <dt className="col-sm-4">REGISTRATION NUMBER</dt>
                                        <dd className="col-sm-8">{item.registrationNumber}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">FIRST NAME</dt>
                                        <dd className="col-sm-8">{item.fName}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">LAST NAME</dt>
                                        <dd className="col-sm-8">{item.lName}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">NIC</dt>
                                        <dd className="col-sm-8">{item.NIC}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">PASSPORT ID</dt>
                                        <dd className="col-sm-8">{item.passportNumber}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">ADDRESS</dt>
                                        <dd className="col-sm-8">{item.address}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">CONTACT NUMBER</dt>
                                        <dd className="col-sm-8">{item.contactNumber}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">EMAIL</dt>
                                        <dd className="col-sm-8">{item.email}</dd>
                                    </div>
                                    <div className="row">
                                        <dt className="col-sm-4">LAST EDIT</dt>
                                        <dd className="col-sm-8">{item.editedDate}</dd>
                                    </div>
                                    <br/><br/>
                                <div className="col-12">
                                <div className="row">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <Link to={`/teacher/profile/update/${item._id}`}>
                                    <button className="btn btn-outline-warning me-md-2"><i className="fas fa-edit">&nbsp;&nbsp;UPDATE</i></button>
                                </Link>
                                <button className="btn btn-outline-danger" onClick={e => this.deleteProfile(e,item._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                </div>
                                </div>
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

export default ViewProfile;
