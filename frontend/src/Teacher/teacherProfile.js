import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherProfile.css';
import my from "../Teacher/image/profile.png";

//Initial states of input fields
const initialState = {
    registrationNumber: '',
    fName: '',
    lName: '',
    NIC: '',
    passportNumber: '',
    address: '',
    contactNumber: '',
    email: '',
    password: '',
    editedDate: ''
}

class TeacherProfile extends Component {
    constructor(props) {
        super(props);
        //bind onChange function
        this.onChange = this.onChange.bind(this);
        //bind onSubmit function
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    //To pass values into database
    onSubmit(e) {
        e.preventDefault();
        //create a object to send to database
        let profile = {
            registrationNumber: this.state.registrationNumber,
            fName: this.state.fName,
            lName: this.state.lName,
            NIC: this.state.NIC,
            passportNumber: this.state.passportNumber,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            password: this.state.password,
            editedDate: this.state.editedDate,
        }
        //call the end point and pass the values using axios
        console.log('data to send', profile);
        axios.post('http://localhost:8081/profile/createProfile', profile )
            .then(response => {
                alert('A New Teacher Profile Created Successfully')
                //this.props.history.push('/workshop-attendee');
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    render() {
        return (
            <div className="background">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <h2>Create Teacher Profile</h2>
                        <br/><br/>
                        <form onSubmit={this.onSubmit}
                              className="row g-3">

                            <div className="col-md-6">
                                <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="registrationNumber"
                                        name="registrationNumber"
                                        value={this.state.registrationNumber}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="fName" className="form-label">First Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fName"
                                        name="fName"
                                        value={this.state.fName}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lName" className="form-label">Last Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user-plus"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lName"
                                        name="lName"
                                        value={this.state.lName}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="NIC" className="form-label">National Identity Card Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-id-card"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="NIC"
                                        name="NIC"
                                        placeholder="1234 Main St"
                                        value={this.state.NIC}
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
                            <div className="col-md-6">
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

                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-key"></i></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="editedDate" className="form-label">Edited Date</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="editedDate"
                                        name="editedDate"
                                        value={this.state.editedDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="button-purple button2-purple">Create Profile</button>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="button-purple button2-purple">Cancel Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeacherProfile;
