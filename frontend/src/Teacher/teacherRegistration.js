import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherRegistration.css';
import my from "../Teacher/image/teacherReg.png";
import {Link} from "react-router-dom";

//Initial states of input fields
const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    nic: '',
    passportNumber: '',
    address: '',
    contactNumber: '',
    email: '',
    qualificationType: '',
    academicInstitute: '',
    academicYear: '',
    subjects: '',
    teachingInstitute: '',
    teachingYear: '',
    majorSubjects: '',
    associationName: '',
    regNumber: '',
    experienceYear: '',
    schoolName: '',
    taughtSubjects: '',
    dateFrom: '',
    dateTo:''
}

class TeacherRegistration extends Component {
    constructor(props) {
        super(props);
        //bind onChange function
        this.onChange = this.onChange.bind(this);
        //bind onSubmit function
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    //To pass values into database
    onSubmit(e) {
        e.preventDefault();
        //create a object to send to database
        let teacher = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            nic: this.state.nic,
            passportNumber: this.state.passportNumber,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            qualificationType: this.state.qualificationType,
            academicInstitute: this.state.academicInstitute,
            academicYear: this.state.academicYear,
            subjects: this.state.subjects,
            teachingInstitute: this.state.teachingInstitute,
            teachingYear: this.state.teachingYear,
            majorSubjects: this.state.majorSubjects,
            associationName: this.state.associationName,
            regNumber: this.state.regNumber,
            experienceYear: this.state.experienceYear,
            schoolName: this.state.schoolName,
            taughtSubjects: this.state.taughtSubjects,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
        }
        //call the end point and pass the values using axios
        console.log('data to send', teacher);
        axios.post('http://localhost:8081/teacher/createTeacher', teacher )
            .then(response => {
                alert('Your Registration Form has been Submitted successfully')
                //this.props.history.push('/workshop-attendee');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="background-teacher">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
            <div>
                <p3>Teacher Registration</p3>
                <br/><br/>
                <div className="container mt-4 p-3 mb-5 bg-body rounded">
                <form onSubmit={this.onSubmit}
                      className="row g-3">
                    <h5>Personal Details</h5>
                    <br/><br/>
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                            required
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-user-plus"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                            required
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-venus-mars"></i></span>
                        <select
                            type="gender"
                            className="form-select"
                            id="gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.onChange}
                            required
                        >
                            <option value="select">- -Select gender- -</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nic" className="form-label">National Identity Card Number</label>
                        <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa fa-id-card"></i></span>
                        <input
                            type="nic"
                            className="form-control"
                            id="nic"
                            name="nic"
                            placeholder="123456789V"
                            value={this.state.nic}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="passportNumber" className="form-label">Passport Number</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-id-card"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="passportNumber"
                            name="passportNumber"
                            value={this.state.passportNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    <h5>Contact Details</h5>
                    <div className="col-md-12">
                        <label htmlFor="address" className="form-label">Postal Address</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-address-book"></i></span>
                        <input
                            type="address"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Apartment, studio, or floor"
                            value={this.state.address}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-phone"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="contactNumber"
                            name="contactNumber"
                            value={this.state.contactNumber}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>

                    <h5>Educational Background</h5>
                    <h6>Highest Academic Qualification</h6>
                        <div className="col-md-6">
                            <label htmlFor="qualificationType" className="form-label">Type of the Qualification</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                            <select
                                type="qualificationType"
                                className="form-select"
                                id="qualificationType"
                                name="qualificationType"
                                value={this.state.qualificationType}
                                onChange={this.onChange}
                                required
                                >
                                <option value="select">- -Select qualification type- -</option>
                                <option value="Degree">Degree</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Certificate">Certificate</option>
                            </select>
                    </div>
                        </div>
                    <div className="col-md-6">
                        <label htmlFor="academicInstitute" className="form-label">Institute Where qualification obtained</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-university"></i></span>
                        <input
                            type="academicInstitute"
                            className="form-control"
                            id="academicInstitute"
                            name="academicInstitute"
                            value={this.state.academicInstitute}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="academicYear" className="form-label">Year</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        <input
                            type="academicYear"
                            className="form-control"
                            id="academicYear"
                            name="academicYear"
                            value={this.state.academicYear}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="subjects" className="form-label">Specialized Field</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-graduation-cap"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="subjects"
                            name="subjects"
                            placeholder="Mathematics"
                            value={this.state.subjects}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>

                    <h6>Highest Teaching Qualification</h6>
                    <div className="col-md-6">
                        <label htmlFor="teachingInstitute" className="form-label">Institute where the qualifications are obtained</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-university"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="teachingInstitute"
                            name="teachingInstitute"
                            value={this.state.teachingInstitute}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="teachingYear" className="form-label">Year</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="teachingYear"
                            name="teachingYear"
                            value={this.state.teachingYear}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="majorSubjects" className="form-label">Experienced Subject</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-graduation-cap"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="majorSubjects"
                            name="majorSubjects"
                            placeholder="Mathematics"
                            value={this.state.majorSubjects}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>

                    <h6>Latest Professional Registration</h6>
                    <div className="col-md-6">
                        <label htmlFor="associationName" className="form-label">Name of the Association</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-university"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="associationName"
                            name="associationName"
                            value={this.state.associationName}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="regNumber" className="form-label">Registration Number</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-registered"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="regNumber"
                            name="regNumber"
                            placeholder="Mathematics"
                            value={this.state.regNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="experienceYear" className="form-label">Year of Registration</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="experienceYear"
                            name="experienceYear"
                            value={this.state.experienceYear}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>


                    <h5>Teaching Experience</h5>
                    <h6>Latest Experience</h6>
                    <div className="col-md-6">
                        <label htmlFor="schoolName" className="form-label">Name of the School or Institute</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-university"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="schoolName"
                            name="schoolName"
                            value={this.state.schoolName}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="taughtSubjects" className="form-label">Subject</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-archive"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            id="taughtSubjects"
                            name="taughtSubjects"
                            value={this.state.taughtSubjects}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dateFrom" className="form-label">Date From</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        <input
                            type="date"
                            className="form-control"
                            id="dateFrom"
                            name="dateFrom"
                            value={this.state.dateFrom}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dateTo" className="form-label">Date To</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        <input
                            type="date"
                            className="form-control"
                            id="dateTo"
                            name="dateTo"
                            value={this.state.dateTo}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>

                    <h5>Declaration</h5>
                    <p1>I hereby apply for registration as a teacher in accordance with Part V Section 32 of the Education Department,
                        ACT 1980, and certify that the information given is correct.</p1>
                    <p1>I have not been refused registration as a teacher or had my registration cancelled at any time during the last six
                    months</p1>

                    <h5>Documents Required</h5>
                    <p1>All applicants are required to send two character references plus copies of following documents to the Office E-mail
                    to complete the registration process</p1>
                    <div className="col-12">
                    <ul>
                        <li>Birth Certificate</li>
                        <li>Photocopies of claimed qualifications (professional and academic)</li>
                        <li>A recent passport size color photo</li>
                        <li>Photocopies of National Identity Card or Passport</li>
                        <li>Grama Sevaka Certificate</li>
                       <li>An affidavit with the signature
                           of a Justice of Peace (JP) (Sample attached; make sure to sign across a stamp worth LKR 50.00)</li>
                    </ul>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="button-purple button2-purple">Submit Your Application</button>
                    </div>
                    <div className="col-12">
                        <Link to={`/teacher/complete-registration`}>
                            <button type="submit" className="button-purple button2-purple">View Registration status</button>
                        </Link>
                    </div>
                </form>
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default TeacherRegistration;
