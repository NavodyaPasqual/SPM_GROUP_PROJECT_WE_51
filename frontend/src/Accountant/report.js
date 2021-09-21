import React, {useState, useEffect} from "react";
import axios from "axios";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import './style/viewStudentPayment.css';


const Report = () => {
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
        loading && (<div className="overlay">
            <h1 className="txt-main">Please wait....</h1>
            <img className="loadingImg" src={spinner} alt="inner" />
        </div>);

    return (
        <div className="background-st-ac p-3">
            {showLoading()}
            <div className="card shadow p-3 mb-4 bg-body rounded">
                <div className="row g-2">
                    <div className="col-md">
                        <h1>Financial Report</h1>
                    </div>
                </div>
                <div className="card p-4 m-3 bg-body rounded">
                    <div className="mb-3 d-md-flex justify-content-md-end">
                        <button className="btn btn-outline-success"><i className="fas fa-download">&nbsp;&nbsp;DOWNLOAD</i></button>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th className="mb-3 table-secondary" colspan="2"><span className="text-success">Incomes</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(payment).map((c, i) => (
                                <tr key={i} className="align-top">
                                    {c.type === "Incomes" &&
                                    <td>{c.name}</td>
                                    }
                                    {c.type === "Incomes" &&
                                    <td>{c.amount}</td>
                                    }
                                </tr>
                            ))}
                            </tbody>
                            <thead>
                            <tr>
                                <th className="mb-3 table-secondary" colspan="2"><span className="text-success">Expenses</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(payment).map((c, i) => (
                                <tr key={i} className="align-top">
                                    {c.type === "Expenses" &&
                                    <td>{c.name}</td>
                                    }
                                    {c.type === "Expenses" &&
                                    <td>{c.amount}</td>
                                    }
                                </tr>
                            ))}
                            </tbody>
                            <thead>
                            <tr class="table-success">
                                <th><span className="text-dark">Profit of the company (Rs.)</span></th>
                                <th><span className="text-primary">320000</span></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report;
