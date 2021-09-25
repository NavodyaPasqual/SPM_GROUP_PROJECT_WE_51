import React, {useEffect, useState} from 'react';
import '../Student/Payments/style/button.css';
import my from "../Student/Payments/image/paymentForm.png";
import '../Student/Payments/style/forms.css'
import '../Student/Payments/style/alert.css'


const teacherUpdate = () => {
    
    return (
        <div className="background">
            <img src={my}/>
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                <div >
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Teacher Task</h1>
                    <div className="p-3">
                        <form className="row g-3" onSubmit="#">
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
                                >
                                    <option value="select">---Select a Type---</option>
                                    <option value="hight">Hight</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="validTill" className="form-label">Valid Till</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="validTill"
                                        name="validTill"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="extraInformation" className="form-label">Extra information <i>(Maximum file size 10MB)</i></label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="extraInformation"
                                    name="extraInformation"
                                    accept="image/*"
                                />
                            </div>
                            <button className="button-purple button2-purple">Submit Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default teacherUpdate;