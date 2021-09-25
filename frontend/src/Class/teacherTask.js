import React, {useEffect, useState} from 'react';
import '../Student/Payments/style/button.css';
import my from "../Student/Payments/image/paymentForm.png";
import '../Student/Payments/style/forms.css'
import '../Student/Payments/style/alert.css'


const teacherTask = () => {
    
    return (
        <div className="background">
            <img src={my}/>
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                <div >
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Student Payment Submission</h1>
                    <div className="p-3">
                        <form className="row g-3" onSubmit="#">
                            <h5>Student Details</h5>
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contactNo" className="form-label">Contact Number</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactNo"
                                        name="contactNo"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="studentID" className="form-label">Student ID</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-id-card-alt"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="studentID"
                                        name="studentID"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="classes" className="form-label">Class</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-book-reader"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="classes"
                                        name="classes"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="teacher" className="form-label">Name of teacher</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-chalkboard-teacher"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="teacher"
                                        name="teacher"
                                    />
                                </div>
                            </div>
                            <h5>Payment Details</h5>
                            <div className="col-md-6">
                                <label htmlFor="type" className="form-label">Payment type</label>
                                <select
                                    className="form-select"
                                    id='type'
                                    required="true"
                                    name="type"
                                >
                                    <option value="select">---Select a Payment Type---</option>
                                    <option value="Registration payment">Registration payment</option>
                                    <option value="Monthly Fee">Monthly Fee</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="depositedAmount" className="form-label">Deposited Amount (Rs.)</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="depositedAmount"
                                        name="depositedAmount"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="depositedDate" className="form-label">Deposited Date</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="far fa-calendar-alt"></i></span>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="depositedDate"
                                        name="depositedDate"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="bank" className="form-label">Bank</label>
                                <select
                                    className="form-select"
                                    id='bank'
                                    required="true"
                                    name="bank"
                                >
                                    <option value="select">---Select the bank---</option>
                                    <option value="BOC">BOC</option>
                                    <option value="People's bank">People's bank</option>
                                    <option value="Commercial bank">Commercial bank</option>
                                    <option value="NDB">NDB</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="branch" className="form-label">Branch</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-code-branch"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="branch"
                                        name="branch"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="paymentSlip" className="form-label">Payment Slip <i>(Maximum file size 10MB)</i></label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="paymentSlip"
                                    name="paymentSlip"
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

export default teacherTask;