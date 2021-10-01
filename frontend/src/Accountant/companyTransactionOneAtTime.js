import React, {Component} from 'react';
import './style/button.css';
import './style/forms.css';
import './style/alert.css';
import axios from "axios";
import spinner from "../Student/Payments/image/spinner.gif";
import {Link} from "react-router-dom";
import img from './images/oneAtTime.png';
import './style/oneAtTime.css'

class CompanyTransactionOneAtTime extends Component {
    constructor(props) {
        super(props)

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

    render(){
        return (
            <div className="background-one-time row p-4 d-flex justify-content-center">
                <div className='bottom-left'>
                    <img  src={img}/>
                </div>
                <div className="row g-2">
                    <div className="col-md">
                        <div className="justify-content-md-end">
                            <div className="input-group justify-content-md-end">
                                <Link to={`/accountant/company-payment-incomes`}>
                                    <button className="button-purple button2-purple">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i className="fas fa-angle-double-left">&nbsp;&nbsp;&nbsp;&nbsp;Back To Table</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-custom-3 shadow-lg w-50 mt-4 p-4 rounded">
                    <div >
                        <h3><center>Company Payments</center></h3>
                        <div className=""><br/>
                            <form onSubmit={this.onSubmit}>
                                    <div className="body">
                                        <div className="row">
                                                <div className="row">
                                                    <dt className="col-sm-6">Name of the payment</dt>
                                                    <dd className="col-sm-6">
                                                        <span className="text-info">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                value={this.state.name}
                                                                disabled
                                                            />
                                                        </span>
                                                    </dd>
                                                    <dt className="col-sm-6">Amount (Rs.)</dt>
                                                    <dd className="col-sm-6">
                                                        <span className="text-info">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="amount"
                                                                name="amount"
                                                                value={this.state.amount}
                                                                disabled
                                                            />
                                                        </span>
                                                    </dd>
                                                    <dt className="col-sm-6">Date</dt>
                                                    <dd className="col-sm-6">
                                                        <span className="text-info">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="date"
                                                                name="date"
                                                                value={new Date(this.state.date).toLocaleDateString(undefined)}
                                                                disabled
                                                            />
                                                        </span>
                                                    </dd>
                                                    <dt className="col-sm-6">Payment type</dt>
                                                    <dd className="col-sm-6">
                                                        <span className="text-info">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="type"
                                                                name="type"
                                                                value={this.state.type}
                                                                disabled
                                                            />
                                                        </span>
                                                    </dd>
                                                </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        );
    }

};

export default CompanyTransactionOneAtTime;