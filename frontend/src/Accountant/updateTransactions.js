import React, {Component} from 'react';
import './style/button.css';
import './style/forms.css';
import './style/alert.css';
import axios from "axios";
import spinner from "../Student/Payments/image/spinner.gif";

class UpdateCompanyPayment extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            amount: '',
            date: '',
            type: '',
            loading: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/company-payment/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    amount: res.data.amount,
                    date: res.data.date,
                    type: res.data.type
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeAmount(e) {
        this.setState({ amount: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }

    onChangeType(e) {
        this.setState({ type: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const paymentObject = {
            name: this.state.name,
            amount: this.state.amount,
            date: this.state.date,
            type: this.state.type
        };

        axios.put('http://localhost:8081/company-payment/update/' + this.props.match.params.id, paymentObject)
            .then((res) => {
                console.log(res.data)
                console.log('Payment successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/accountant/company-payment-incomes')
    }

    render(){
        return (
            <div className="background row p-4 d-flex justify-content-center">
                    <div className="container-3 w-50 mt-4 shadow pb-4 pt-4 mb-5 rounded">
                        <div >
                            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit Company Payment</h3>
                            <div className="p-3">
                                <form className="row g-3" onSubmit={this.onSubmit}>
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">Name of the payment</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.onChangeName}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="contactNo" className="form-label">Amount (Rs.)</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="amount"
                                                name="amount"
                                                value={this.state.amount}
                                                onChange={this.onChangeAmount}
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
                                                value={this.state.date}
                                                onChange={this.onChangeDate}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="type" className="form-label">Payment type</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fas fa-grip-horizontal"></i></span>
                                            <select
                                                className="form-select"
                                                onChange={this.onChangeType}
                                                id='type'
                                                required="true"
                                                value={this.state.type}
                                                name="type"
                                            >
                                                <option value="select">---Select a Payment Type---</option>
                                                <option value="Incomes">Incomes</option>
                                                <option value="Expenses">Expenses</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button className="mt-4 button-red button2-red">Delete Payment</button>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-md-end">
                                        <button className="mt-4 button-orange button2-orange">Update Payment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

};

export default UpdateCompanyPayment;