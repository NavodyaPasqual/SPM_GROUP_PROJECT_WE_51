import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherProfile.css';

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
                <h2>Create Teacher Profile</h2>

                <form onSubmit={this.onSubmit}
                      className="row g-3">

                    <div className="col-md-4">
                        <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
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
                    <div className="col-md-4">
                        <label htmlFor="fName" className="form-label">First Name</label>
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
                    <div className="col-md-4">
                        <label htmlFor="lName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lName"
                            name="lName"
                            value={this.state.lName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="NIC" className="form-label">National Identity Card No:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="NIC"
                            name="NIC"
                            placeholder="1234 Main St"
                            value={this.state.NIC}
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
                    <div className="col-md-8">
                        <label htmlFor="address" className="form-label">Postal Address</label>
                        <input
                            type="text"
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

                    <div className="col-md-8">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="editedDate" className="form-label">Edited Date</label>
                        <input
                            type="text"
                            className="form-control"
                            id="editedDate"
                            name="editedDate"
                            value={this.state.editedDate}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Create Profile</button>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Cancel Profile</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default TeacherProfile;
