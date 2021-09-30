import React, {Component, useEffect, useState} from 'react';
import '../Student/Payments/style/button.css';
import my from "../Student/Payments/image/paymentForm.png";
import '../Student/Payments/style/forms.css'
import '../Student/Payments/style/alert.css'
import axios from "axios";


class teacherUpdate extends Component  {
    constructor(props) {
        super(props)
        this.onChangetasktitle = this.onChangetasktitle.bind(this);
        this.onChangetaskdescription = this.onChangetaskdescription.bind(this);
        this.onChangeteacherid = this.onChangeteacherid.bind(this);
        this.onChangeimplevel = this.onChangeimplevel.bind(this);
        this.onChangevalidtill = this.onChangevalidtill.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            tasktitle: '',
            taskdescription: '',
            teacherid: '',
            implevel: '',
            validtill: '',
            status: '',
            loading: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/teacher-task/TeacherTask/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    tasktitle: res.data.tasktitle,
                    taskdescription: res.data.taskdescription,
                    teacherid: res.data.teacherid,
                    implevel: res.data.implevel,
                    validtill: res.data.validtill,
                    status: res.data.status,
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangetasktitle(e) {
        this.setState({ tasktitle: e.target.value })
    }

    onChangetaskdescription(e) {
        this.setState({ taskdescription: e.target.value })
    }

    onChangeteacherid(e) {
        this.setState({ teacherid: e.target.value })
    }

    onChangeimplevel(e) {
        this.setState({ implevel: e.target.value })
    }

    onChangevalidtill(e) {
        this.setState({ validtill: e.target.value })
    }

    onChangestatus(e) {
        this.setState({ status: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const taskObject = {
            tasktitle: this.state.tasktitle,
            taskdescription: this.state.taskdescription,
            teacherid: this.state.teacherid,
            implevel: this.state.implevel,
            validtill: this.state.validtill,
            status: this.state.status
        };

        axios.put('http://localhost:8081/teacher-task/TeacherTask/' + this.props.match.params.id, taskObject)
            .then((res) => {
                console.log(res.data)
                console.log('Task successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/teacherTaskList/')
    }

    render() {
        return (
            <div className="background">
                <img src={my}/>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Teacher Task</h1>
                        <div className="p-3">
                            <form className="row g-3" onSubmit={this.onSubmit}>
                                <h5>Task Details</h5>
                                <div className="col-12">
                                    <label htmlFor="taskTitle" className="form-label">Task Title</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fas fa-id-card-alt"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="taskTitle"
                                            name="taskTitle"
                                            value={this.state.tasktitle}
                                            onChange={this.onChangetasktitle}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="taskDescription" className="form-label">Task description</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fas fa-chalkboard-teacher"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="taskDescription"
                                            name="taskDescription"
                                            value={this.state.taskdescription}
                                            onChange={this.onChangetaskdescription}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="teacherId" className="form-label">Teacher ID</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="teacherId"
                                            name="teacherId"
                                            value={this.state.teacherid}
                                            onChange={this.onChangeteacherid}
                                        />
                                    </div>
                                </div>

                                <h5>Other Details</h5>
                                <div className="col-md-6">
                                    <label htmlFor="type" className="form-label">Importance Level</label>
                                    <select
                                        className="form-select"
                                        id='type'
                                        required="true"
                                        name="type"
                                        value={this.state.implevel}
                                        onChange={this.onChangeimplevel}
                                    >
                                        <option value="select">---Select a Type---</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validTill" className="form-label">Valid Till</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i
                                            className="far fa-calendar-alt"></i></span>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="validTill"
                                            name="validTill"
                                            value={this.state.validtill}
                                            onChange={this.onChangevalidtill}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="extraInformation" className="form-label">Status</label>
                                    <select
                                        className="form-select"
                                        id='type'
                                        required="true"
                                        name="type"
                                        value={this.state.status}
                                        onChange={this.onChangestatus}
                                    >
                                        <option value="select">---Select a Type---</option>
                                        <option value="not done">Not done</option>
                                        <option value="done">Done</option>
                                    </select>
                                </div>
                                {/*<div className="col-md-6 mb-3">
                                    <label htmlFor="extraInformation" className="form-label">Extra information <i>(Maximum
                                        file size 10MB)</i></label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="extraInformation"
                                        name="extraInformation"
                                        accept="image/*"
                                    />
                                </div>*/}
                                <button className="button-purple button2-purple">Submit Payment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default teacherUpdate;