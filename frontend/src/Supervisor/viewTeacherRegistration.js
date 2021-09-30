import React, {Component} from 'react';
import axios from 'axios';
import './style/viewTeacherRegistration.css';
import {Link} from "react-router-dom";
import my from "./image/reg4.jpg";


class ViewProfile extends Component {
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

    //to call the end point and delete a value using axios
    deleteTeacher(e, id){
        axios.delete(`http://localhost:8081/teacher/delete/${id}`)
            .then(response => {
                alert('Application Declined')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/teacher/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('Registration Status Changed')
                this.componentDidMount()
            })
    }


    render() {
        return (
            <div className="background">


                <div className="container p-3">
                    <p3>CURRENT REGISTRATIONS</p3>
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
                                                    <dt className="col-sm-4">REGISTERED DATE</dt>
                                                    <dd className="col-sm-8">{item.regDate}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">FIRST NAME</dt>
                                                    <dd className="col-sm-8">{item.firstName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">LAST NAME</dt>
                                                    <dd className="col-sm-8">{item.lastName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">GENDER</dt>
                                                    <dd className="col-sm-8">{item.gender}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">NIC</dt>
                                                    <dd className="col-sm-8">{item.nic}</dd>
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
                                                    <dt className="col-sm-4">qualificationType</dt>
                                                    <dd className="col-sm-8">{item.qualificationType}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">academicInstitute</dt>
                                                    <dd className="col-sm-8">{item.academicInstitute}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">academicYear</dt>
                                                    <dd className="col-sm-8">{item.academicYear}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">subjects</dt>
                                                    <dd className="col-sm-8">{item.subjects}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">teachingInstitute</dt>
                                                    <dd className="col-sm-8">{item.teachingInstitute}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">teachingYear</dt>
                                                    <dd className="col-sm-8">{item.teachingYear}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">majorSubjects</dt>
                                                    <dd className="col-sm-8">{item.majorSubjects}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">associationName</dt>
                                                    <dd className="col-sm-8">{item.associationName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">regNumber</dt>
                                                    <dd className="col-sm-8">{item.regNumber}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">experienceYear</dt>
                                                    <dd className="col-sm-8">{item.experienceYear}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">schoolName</dt>
                                                    <dd className="col-sm-8">{item.schoolName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">taughtSubjects</dt>
                                                    <dd className="col-sm-8">{item.taughtSubjects}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">dateFrom</dt>
                                                    <dd className="col-sm-8">{item.dateFrom}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">dateTo</dt>
                                                    <dd className="col-sm-8">{item.dateTo}</dd>
                                                </div>
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

                                                    <div className="col-12 py-5">
                                                        <div className="row">
                                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                                <button className="btn btn-outline-warning me-md-2" onClick={e => this.updateStatus(e,item._id)}>
                                                                    <i className="fas fa-edit">&nbsp;&nbsp;UPDATE</i></button>

                                                                <button className="btn btn-outline-danger" onClick={e => this.deleteTeacher(e,item._id)}>
                                                                    <i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                                            </div>
                                                        </div>
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
