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


                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <br/><br/>
            <div className="container">
                    <p3>Teacher Profiles</p3>
                <br/><br/>
                    {/* Check whether array have any value */}
                    {this.state.profile.length > 0 && this.state.profile.map((item,index) => (
                        <div key={index} className="card mb-3">
                            <br/><br/>
                            <div className="p-3">
                                <img src={my}/>
                                <p4>Registration Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.registrationNumber}</p4><br/>
                                <p4>First Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.fName}</p4><br/>
                                <p4>Last Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.lName}</p4><br/>
                                <p4>NIC &nbsp;&nbsp; : &nbsp;&nbsp; {item.NIC}</p4><br/>
                                <p4>Passport Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.passportNumber}</p4><br/>
                                <p4>Address &nbsp;&nbsp; : &nbsp;&nbsp; {item.address}</p4><br/>
                                <p4>Contact Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.contactNumber}</p4><br/>
                                <p4>Email &nbsp;&nbsp; : &nbsp;&nbsp; {item.email}</p4><br/>
                                <p4>Last Edit &nbsp;&nbsp; : &nbsp;&nbsp; {item.editedDate}</p4><br/>
                                <br/><br/>

                                <div className="col-12">
                                <div className="row">
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                <Link to={`/teacher/profile/update/${item._id}`}>
                                    <button className="btn btn-outline-warning me-md-2"><i className="fas fa-edit">&nbsp;&nbsp;UPDATE</i></button>
                                </Link>
                                <button className="btn btn-outline-danger" onClick={e => this.deleteProfile(e,item._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewProfile;
