import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherRegistration.css';

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
    taughtSubjects: ''
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
        }
        //call the end point and pass the values using axios
        console.log('data to send', teacher);
        axios.post('http://localhost:8081/teacher/createTeacher', teacher )
            .then(response => {
                alert('Data successfully inserted')
                //this.props.history.push('/workshop-attendee');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div>
                <h2>Teacher Registration Form</h2>

                <form onSubmit={this.onSubmit}
                      className="row g-3">
                    <h5>Personal Details</h5>
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">First Name</label>
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
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
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
                    <div className="col-md-4">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input
                            type="gender"
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={this.state.gender}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="nic" className="form-label">National Identity Card No:</label>
                        <input
                            type="nic"
                            className="form-control"
                            id="nic"
                            name="nic"
                            placeholder="123456789V"
                            value={this.state.nic}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="passportNumber" className="form-label">Passport No:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="passportNumber"
                            name="passportNumber"
                            value={this.state.passportNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    <h5>Contact Details</h5>
                    <div className="col-md-8">
                        <label htmlFor="address" className="form-label">Postal Address</label>
                        <input
                            type="address"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Apartment, studio, or floor"
                            value={this.state.address}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="contactNumber" className="form-label">Telephone No:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="contactNumber"
                            name="contactNumber"
                            value={this.state.contactNumber}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                    </div>

                    <h5>Educational Background</h5>
                    <h6>Highest Academic Qualification</h6>
                        <div className="col-md-8">
                            <label htmlFor="qualificationType" className="form-label">Type of Qualification (Degree / Diploma / Certificate)</label>
                            <input
                                type="qualificationType"
                                className="form-control"
                                id="qualificationType"
                                name="qualificationType"
                                value={this.state.qualificationType}
                                onChange={this.onChange}
                            />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="academicInstitute" className="form-label">Institute Where qualification obtained</label>
                        <input
                            type="academicInstitute"
                            className="form-control"
                            id="academicInstitute"
                            name="academicInstitute"
                            value={this.state.academicInstitute}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="academicYear" className="form-label">Year</label>
                        <input
                            type="academicYear"
                            className="form-control"
                            id="academicYear"
                            name="academicYear"
                            value={this.state.academicYear}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="subjects" className="form-label">Specialized Field</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subjects"
                            name="subjects"
                            placeholder="Mathematics"
                            value={this.state.subjects}
                            onChange={this.onChange}
                        />
                    </div>

                    <h6>Highest Teaching Qualification</h6>
                    <div className="col-md-8">
                        <label htmlFor="teachingInstitute" className="form-label">Institute where the qualifications are obtained</label>
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
                    <div className="col-md-4">
                        <label htmlFor="teachingYear" className="form-label">Year</label>
                        <input
                            type="text"
                            className="form-control"
                            id="teachingYear"
                            name="teachingYear"
                            value={this.state.teachingYear}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="majorSubjects" className="form-label">Specialized Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            id="majorSubjects"
                            name="majorSubjects"
                            placeholder="Mathematics"
                            value={this.state.majorSubjects}
                            onChange={this.onChange}
                        />
                    </div>

                    <h6>Professional Registration</h6>
                    <div className="col-md-8">
                        <label htmlFor="associationName" className="form-label">Name of the Association</label>
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
                    <div className="col-md-4">
                        <label htmlFor="regNumber" className="form-label">Registration Number</label>
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
                    <div className="col-md-4">
                        <label htmlFor="experienceYear" className="form-label">Year of Registration</label>
                        <input
                            type="text"
                            className="form-control"
                            id="experienceYear"
                            name="experienceYear"
                            value={this.state.experienceYear}
                            onChange={this.onChange}
                        />
                    </div>


                    <h5>Teaching Experience</h5>
                    <h6>Latest Experience</h6>
                    <div className="col-md-8">
                        <label htmlFor="schoolName" className="form-label">Name of the School</label>
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
                    <div className="col-md-4">
                        <label htmlFor="taughtSubjects" className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            id="taughtSubjects"
                            name="taughtSubjects"
                            value={this.state.taughtSubjects}
                            onChange={this.onChange}
                        />
                    </div>



                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agreed to terms and conditions
                                </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Save & Next</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default TeacherRegistration;
