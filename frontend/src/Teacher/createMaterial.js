import React, { Component} from 'react';
import axios from 'axios';
import './styles/createMaterial.css';
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
            <div className="background-material">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <p3>UPLOAD LESSONS</p3>
                        <br/><br/><br/>
                        <div className="container mt-4 p-3 mb-5 bg-body rounded">
                        <form onSubmit={this.onSubmit}
                              className="row g-3">
                            <br/><br/>
                            <div className="col-md-6">
                                <label htmlFor="subjectName" className="form-label">Subject Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                    <select
                                        type="text"
                                        className="form-select"
                                        id="subjectName"
                                        name="subjectName"
                                        value={this.state.subjectName}
                                        onChange={this.onChange}
                                        required
                                    >
                                        <option value="select">- -Select subject- -</option>
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="English">English</option>
                                        <option value="Sinhala">Sinhala</option>
                                        <option value="ICT">ICT</option>
                                        <option value="History">History</option>
                                        <option value="English Literature">English Literature</option>
                                        <option value="Tamil">ICT</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="subjectCode" className="form-label">Subject Code</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-user-plus"></i></span>
                                    <select
                                        type="text"
                                        className="form-select"
                                        id="subjectCode"
                                        name="subjectCode"
                                        value={this.state.subjectCode}
                                        onChange={this.onChange}
                                        required
                                    >
                                        <option value="select">- -Select subject code- -</option>
                                        <option value="OLMT01">OLMT01</option>
                                        <option value="OLEN02">OLEN02</option>
                                        <option value="OLSI03">OLSI04</option>
                                        <option value="OLIT04">OLIT04</option>
                                        <option value="OLHI05">OLHI05</option>
                                        <option value="OLEL06">OLEL06</option>
                                        <option value="OLTM07">OLTM07</option>
                                    </select>
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

                            <div className="form-group files">
                                <label>Upload Your File </label>
                            <input
                                            type="file"
                                            className="form-control"
                                            id="lessonURL"
                                            name="lessonURL"
                                            value={this.state.lessonURL}
                                            onChange={this.onChange}
                                            multiple=""
                                            required
                                        />
                            </div>

                            <div className="col-12">
                                <button className="button-purple button2-purple">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateMaterial;
