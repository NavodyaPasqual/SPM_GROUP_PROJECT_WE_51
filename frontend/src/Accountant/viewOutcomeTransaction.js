import React, {useState, useEffect} from "react";
import axios from "axios";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import './style/viewStudentPayment.css';

const ViewOutcomeTransaction = () => {
    const [payment, setPayment] = useState([]);
    const [setError] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["date", "name", "type"]);
    const [filterParam] = useState(["All"]);
    const [values, setValues] = useState({
        loading: false,
    });
    const {
        loading
    } = values;

    const search = () => {
        return payment.filter((item) => {
            if (item.region === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    const getPayments = () => {
        setValues({...values,loading: true})
        return fetch(`http://localhost:8081/company-payment/`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const loadPayment = () => {
        getPayments()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setValues({...values,loading: false})
                    console.log(data[0].date)
                    setPayment(data)
                }
            })
    };

    const deletePayment = (e, id) => {
        const r = window.confirm("Do you really want to delete company payment ?");
        if(r == true) {
            axios.delete(`http://localhost:8081/company-payment/delete/${id}`)
                .then(response => {
                    loadPayment()
                })
        }

    };


    useEffect(() => {
        loadPayment()
    }, [])

    const showLoading = () =>
        loading && (<div className="overlay-top">
            <h1 className="txt-main">Please wait....</h1>
            <img className="loadingImg" src={spinner} alt="inner" />
        </div>);

    return (
        <div className="background-st-ac p-3">
            {showLoading()}
            <div className="card shadow p-3 mb-4 bg-body rounded">
                <div className="row g-2">
                    <div className="col-md">
                        <h1>Company Expenses</h1><br/>
                    </div>
                    <div className="col-md">
                        <div className="mb-3 mt-2 d-md-flex justify-content-md-end">
                            <Link to={`/accountant/report`}>
                                <button className="btn btn-outline-success"><b>&nbsp;&nbsp;TRANSACTION REPORT&nbsp;&nbsp;<i className="fas fa-angle-double-right"></i>&nbsp;&nbsp;</b></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="search-wrapper">
                    <div className="row g-2">
                        <div className="col-md">
                            <Link to={`/accountant/add-payment`}>
                                <button className="button-purple button2-purple">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-plus-circle">&nbsp;&nbsp;&nbsp;&nbsp;Add New Record</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                            </Link>

                        </div>
                        <div className="col-md">
                            <div className="row">
                                <div className="justify-content-md-end">
                                    <div className="input-group justify-content-md-end">
                                        <Typed
                                            strings={[
                                                'Search by name',
                                                'Search by type',
                                                'Search by name',]}
                                            typeSpeed={40}
                                            backSpeed={50}
                                            attr="placeholder"
                                            loop >
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search..."
                                                value={q}
                                                onChange={(e) => setQ(e.target.value)}
                                            />
                                        </Typed>
                                        <span className="input-group-text"><i className="fas fa-search"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Payment Name</th>
                                <th>Date</th>
                                <th>Amount(Rs.)</th>
                                <th>Type</th>
                                <th>View</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(payment).map((c, i) => (
                                <tr key={i} className="align-top">
                                    {c.type === "Expenses" &&
                                    <td>{c.name}</td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>{new Date(c.date).toLocaleDateString(undefined)}</td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>{c.amount}</td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td><span className="text-info">{c.type}</span></td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>
                                        <Link to={`/accountant/company-payment-incomes/view/${c._id}`}>
                                            <button className="btn btn-outline-secondary me-md-2">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                        </Link>
                                    </td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>
                                        <Link to={`/accountant/update-payment/${c._id}`}>
                                            <button className="btn btn-outline-warning me-md-2">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </Link>
                                    </td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={e => deletePayment(e, c._id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                    }
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOutcomeTransaction;
