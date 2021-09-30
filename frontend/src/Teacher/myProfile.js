import React, {Component} from 'react';
import axios from "axios";
import './styles/teacherProfile.css';
import my from "../Teacher/image/download.jpg";

class MyProfile extends Component{
    constructor(props) {
        super(props)
        this.onChangeRegistrationNumber = this.onChangeRegistrationNumber.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePassportNumber = this.onChangePassportNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEditedDate = this.onChangeEditedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            registrationNumber: '',
            fName: '',
            lName: '',
            NIC: '',
            passportNumber: '',
            address: '',
            contactNumber: '',
            email: '',
            password: '',
            editedDate: '',
            loading: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/profile/viewbyid/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    registrationNumber: res.data.data.registrationNumber,
                    fName: res.data.data.fName,
                    lName: res.data.data.lName,
                    passportNumber: res.data.data.passportNumber,
                    address: res.data.data.address,
                    NIC: res.data.data.NIC,
                    contactNumber: res.data.data.contactNumber,
                    email: res.data.data.email,
                    password: res.data.data.password,
                    editedDate: res.data.data.editedDate
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeRegistrationNumber(e) {
        this.setState({ registrationNumber: e.target.value })
    }

    onChangeFName(e) {
        this.setState({ fName: e.target.value })
    }

    onChangeLName(e) {
        this.setState({ lName: e.target.value })
    }

    onChangeNIC(e) {
        this.setState({ NIC: e.target.value })
    }

    onChangePassportNumber(e) {
        this.setState({ passportNumber: e.target.value })
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }
    onChangeContactNumber(e) {
        this.setState({ contactNumber: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeEditedDate(e) {
        this.setState({ editedDate: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const profileObject = {
            registrationNumber: this.state.registrationNumber,
            fName: this.state.fName,
            lName: this.state.lName,
            NIC: this.state.NIC,
            passportNumber: this.state.passportNumber,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            password: this.state.password,
            editedDate: this.state.editedDate
        };

        axios.put('http://localhost:8081/profile/update-all/' + this.props.match.params.id, profileObject)
            .then((res) => {
                console.log(res.data)
                console.log('Profile Successfully Updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/teacher/updated-profile')
    }

    render() {
        return (
            <div className="background">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <p3>UPDATE PROFILE</p3>
                        <br/><br/><br/><br/>
                        <div className="container mt-4 p-3 mb-5 bg-body rounded">
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
                                            onChange={this.onChangeRegistrationNumber}
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
                                            onChange={this.onChangeFName}
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
                                            onChange={this.onChangeLName}
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
                                            onChange={this.onChangeNIC}
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
                                            onChange={this.onChangePassportNumber}
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
                                            onChange={this.onChangeAddress}
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
                                            onChange={this.onChangeContactNumber}
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
                                            onChange={this.onChangeEmail}
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
                                            onChange={this.onChangePassword}
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
                                            onChange={this.onChangeEditedDate}
                                        />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="button-purple button2-purple">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MyProfile;
