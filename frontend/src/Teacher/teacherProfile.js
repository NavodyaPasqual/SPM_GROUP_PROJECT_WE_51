import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherRegistration.css';

class TeacherProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Teacher Profile</h2>

                <form className="row g-3">
                    <h5>Personal Details</h5>
                    <div className="col-md-4">
                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Gender</label>
                        <select id="inputState" className="form-select">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputAddress" className="form-label">National Identity Card No:</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputAddress2" className="form-label">Passport No:</label>
                        <input type="text" className="form-control" id="inputAddress2"/>
                    </div>
                    <h5>Contact Details</h5>
                    <div className="col-md-8">
                        <label htmlFor="inputCity" className="form-label">Postal Address</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label">Telephone No:</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com" />
                    </div>

                    <h5>Educational Background</h5>
                    <h6>Highest Academic Qualification</h6>
                    <div className="col-md-8">
                        <label htmlFor="inputEmail4" className="form-label">Name of Qualification</label>
                        <input type="text" className="form-control" id="inputEmail4" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Type of Qualification (Please select)</label>
                        <select id="inputState" className="form-select">
                            <option>Degree</option>
                            <option>Diploma</option>
                            <option>Certificate</option>
                        </select>
                    </div>
                    <div className="col-md-8">
                        <label htmlFor="inputPassword4" className="form-label">Institute Where qualification obtained</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputPassword4" className="form-label">Year</label>
                        <input type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Specialized Field</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Mathematics" />
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

export default TeacherProfile;
