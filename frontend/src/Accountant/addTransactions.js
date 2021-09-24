import React, {useState} from 'react';
import './style/button.css';
import './style/forms.css';
import './style/alert.css';
import axios from "axios";

const AddCompanyPayment = () => {

    const [state, setState] = useState({
        name: '',
        amount: '',
        date: '',
        type: '',
        loading: false,
        error: '',
    });

    const {
        name,
        amount,
        date,
        type,
        loading
    } = state;

    const [content, setContent] = useState('')

    const handleContent = (event) => {
        console.log(event);
        setContent(event);
    }

    const handleChange = (name) => (event) => {
        setState({...state, [name]:event.target.value})
    };

    const clickSubmit = payment => {
        payment.preventDefault();
        axios
            .post(`http://localhost:8081/company-payment/create`, {name, amount, date, type}, {
                headers: {
                }
            })
            .then(response => {
                //empty the state
                setState({...state, name: '',amount:'', date: '', type: '',loading: true, error: ''})
                setContent('');
                window.location.href = "/accountant/company-payment-incomes";
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
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
        <div className="background row p-4 d-flex justify-content-center">
            {showLoading()}
            <div className="container-1 w-50 mt-4 mb-5 shadow pb-4 pt-4  rounded">
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Company Payment Record</h3>
                <div className="p-3">
                    <form className="row g-3" onSubmit={clickSubmit}>
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Name of the payment</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fas fa-user"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange('name')}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="contactNo" className="form-label">Amount</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="amount"
                                    name="amount"
                                    value={amount}
                                    onChange={handleChange('amount')}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="studentID" className="form-label">Date</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fas fa-id-card-alt"></i></span>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={date}
                                    onChange={handleChange('date')}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="type" className="form-label">Payment type</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fas fa-grip-horizontal"></i></span>
                                <select
                                    className="form-select"
                                    onChange={handleChange('type')}
                                    id='type'
                                    required="true"
                                    value={type}
                                    name="type"
                                >
                                    <option value="select">---Select a Payment Type---</option>
                                    <option value="Incomes">Incomes</option>
                                    <option value="Expenses">Expenses</option>
                                </select>
                            </div>
                        </div>
                        <button className="mt-5 button-green button2-green">Submit Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCompanyPayment;