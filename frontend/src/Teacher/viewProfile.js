import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './styles/viewPendingTeachers.css';
import my from "./image/Teacherprofile.png";


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
                    <h2>Teacher Profiles</h2>
                <br/><br/>
                    {/* Check whether array have any value */}
                    {this.state.profile.length > 0 && this.state.profile.map((item,index) => (
                        <div key={index} className="card mb-3">
                            <div className="p-3">
                                <img src={my}/>
                                <h5>Registration Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.registrationNumber}</h5>
                                <h5>Applicant Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.fName}</h5>
                                <h5>Last Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.lName}</h5>
                                <h5>National Identity Card &nbsp;&nbsp; : &nbsp;&nbsp; {item.NIC}</h5>
                                <h5>Passport Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.passportNumber}</h5>
                                <h5>Address &nbsp;&nbsp; : &nbsp;&nbsp; {item.address}</h5>
                                <h5>Contact Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.contactNumber}</h5>
                                <h5>Email &nbsp;&nbsp; : &nbsp;&nbsp; {item.email}</h5>
                                <h5>Last Edit &nbsp;&nbsp; : &nbsp;&nbsp; {item.editedDate}</h5>

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
