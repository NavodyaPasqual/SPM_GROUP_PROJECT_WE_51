import React, { Component} from 'react';
import axios from 'axios';
import './styles/teacherRegistration.css';
import my from "../Teacher/image/teacherReg.png";
import {Link} from "react-router-dom";

//Initial states of input fields
const initialState = {
    subjectName: '',
    subjectCode: '',
    lesson: '',
    description: '',
    lessonURL: ''
}

class CreateMaterial extends Component {
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
        let material = {
            subjectName: this.state.subjectName,
            subjectCode: this.state.subjectCode,
            lesson: this.state.lesson,
            description: this.state.description,
            lessonURL: this.state.lessonURL,
        }
        //call the end point and pass the values using axios
        console.log('data to send', material);
        axios.post('http://localhost:8081/material/createMaterial', material )
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
            <div className="background">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <h2>Upload Teaching Materials</h2>
                        <br/><br/><br/>

                        <form onSubmit={this.onSubmit}
                              className="row g-3">
                            <h5>Personal Details</h5>
                            <br/><br/>
                            <div className="col-md-6">
                                <label htmlFor="subjectName" className="form-label">Subject Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subjectName"
                                        name="subjectName"
                                        value={this.state.subjectName}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="subjectCode" className="form-label">Subject Code</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user-plus"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subjectCode"
                                        name="subjectCode"
                                        value={this.state.subjectCode}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lesson" className="form-label">Lesson</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-venus-mars"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lesson"
                                        name="lesson"
                                        value={this.state.lesson}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="description" className="form-label">Description</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="lessonURL" className="form-label">Upload Files Here</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="lessonURL"
                                    name="lessonURL"
                                    value={this.state.lessonURL}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            </div>

                            <div className="col-12">
                                <button className="button-purple button2-purple">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMaterial;
