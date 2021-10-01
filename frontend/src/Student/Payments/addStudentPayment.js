import React, {useEffect, useState} from 'react';
import './style/button.css';
import my from "./image/paymentForm.png";
import './style/forms.css'
import './style/alert.css'

const AddStudentPayment = () => {

    const [values, setValues] = useState({
        name: '',
        contactNo: '',
        studentID: '',
        depositedAmount: 0,
        depositedDate: '',
        bank: '',
        branch: '',
        paymentSlip: '',
        type: '',
        classes: '',
        teacher: '',
        loading: false,
        error: '',
        createdPayment: '',
        formData: ''
    });

    const {
        name,
        contactNo,
        studentID,
        depositedAmount,
        depositedDate,
        bank,
        branch,
        type,
        loading,
        classes,
        teacher,
        formData
    } = values;

    useEffect(() => {
        setValues({...values, formData: new FormData()})
    }, [])

    const handleChange = name => event => {
        const value = name === 'paymentSlip' ? event.target.files[0] : event.target.value
        formData.set(name,value)
        setValues({...values, [name]: value})
    }

    const createPayment = (payment) => {
        return fetch(`http://localhost:8081/student-payment/create`, {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: payment
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const clickSubmit = (event) => {
            event.preventDefault();
            setValues({...values, error: "", loading: true})
            createPayment(formData)
                .then(data => {
                    if (data.error) {
                        setValues({...values, error: data.error})
                    } else {
                        window.location.href = "/student/payment";
                    }
                });
    };

    const showLoading = () =>
        loading && (<div aria-live="polite" aria-atomic="true" className="position-relative">
            <div className="toast-container position-absolute top-0 end-0 p-3">
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <strong className="me-auto">&nbsp;&nbsp;Loading</strong>
                        <small className="text-muted">just now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast"
                                aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>);

    return (
        <div className="background">
            <img src={my}/>
            {showLoading()}
            <div className="container mt-4 shadow p-3 mb-5 bg-body rounded needs-validation" novalidate>
                <div >
                    <center><h1 data-testid='title-field-add-student-payment'>Student Payment Submission</h1></center>
                    <div className="p-3">
                        <form className="row g-3" data-testid='form-tag-add-student-payment' onSubmit={clickSubmit}>
                            <h5>Student Details</h5>
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        data-testid='student-name-field'
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange('name')}
                                        required
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
                                        data-testid='student-contactNo-field'
                                        id="contactNo"
                                        name="contactNo"
                                        value={contactNo}
                                        onChange={handleChange('contactNo')}
                                        required
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
                                        data-testid='student-id-field'
                                        id="studentID"
                                        name="studentID"
                                        value={studentID}
                                        onChange={handleChange('studentID')}
                                        required
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
                                        data-testid='class-name-field'
                                        id="classes"
                                        name="classes"
                                        value={classes}
                                        onChange={handleChange('classes')}
                                        required
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
                                        data-testid='teacher-name-field'
                                        id="teacher"
                                        name="teacher"
                                        value={teacher}
                                        onChange={handleChange('teacher')}
                                        required
                                    />
                                </div>
                            </div>
                            <h5>Payment Details</h5>
                            <div className="col-md-6">
                                <label htmlFor="type" className="form-label">Payment type</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-grip-horizontal"></i></span>
                                    <select
                                        className="form-select"
                                        onChange={handleChange('type')}
                                        data-testid='payment-type-field'
                                        id='type'
                                        required="true"
                                        value={type}
                                        name="type"
                                    >
                                        <option value="select">---Select a Payment Type---</option>
                                        <option value="Registration payment">Registration payment</option>
                                        <option value="Monthly Fee">Monthly Fee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="depositedAmount" className="form-label">Deposited Amount (Rs.)</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        data-testid='payment-amount-field'
                                        id="depositedAmount"
                                        name="depositedAmount"
                                        value={depositedAmount}
                                        onChange={handleChange('depositedAmount')}
                                        required
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
                                        data-testid='payment-date-field'
                                        id="depositedDate"
                                        name="depositedDate"
                                        value={depositedDate}
                                        onChange={handleChange('depositedDate')}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="bank" className="form-label">Bank</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-money-check-alt"></i></span>
                                    <select
                                        className="form-select"
                                        data-testid='bank-field'
                                        onChange={handleChange('bank')}
                                        id='bank'
                                        required="true"
                                        value={bank}
                                        name="bank"
                                    >
                                        <option value="select">---Select the bank---</option>
                                        <option value="BOC">BOC</option>
                                        <option value="People's bank">People's bank</option>
                                        <option value="Commercial bank">Commercial bank</option>
                                        <option value="NDB">NDB</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="branch" className="form-label">Branch</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-code-branch"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        data-testid='branch-field'
                                        id="branch"
                                        name="branch"
                                        value={branch}
                                        onChange={handleChange('branch')}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="paymentSlip" className="form-label">Payment Slip <i>(Maximum file size 10MB)</i></label>
                                <input
                                    type="file"
                                    className="form-control"
                                    data-testid='payment-slip-field'
                                    id="paymentSlip"
                                    name="paymentSlip"
                                    onChange={handleChange('paymentSlip')}
                                    accept="image/*"
                                />
                            </div>
                            <button data-testid='submit-button' className="button-purple button2-purple">Submit Payment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudentPayment;
