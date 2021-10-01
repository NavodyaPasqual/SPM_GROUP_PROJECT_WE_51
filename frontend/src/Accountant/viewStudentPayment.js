import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Typed from "react-typed";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import './style/viewStudentPayment.css';
import {Link} from "react-router-dom";

const ViewStudentPayment = () => {

    //Search
    const [payment, setPayment] = useState([]);
    const [setError] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["studentID", "name", "type"]);
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
        return fetch(`http://localhost:8081/student-payment/`, {
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

    const deleteConference = (id) => {
        return fetch(`http://localhost:8081/student-payment/delete/${id}`,{
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const deleteConfirm = (id) => {
        let answer = window.confirm('Are you sure you want to delete this payment?');
        if(answer) {
            destroyPayment(id);
        }
    };

    const destroyPayment = (id) => {
        deleteConference(id)
            .then(data => {
                if(data.error){
                    console.log(data.error)
                } else {
                    loadPayment()
                }
            })
    };

    const updateStatus = (id) => {
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/student-payment/update-status/${id}`, {status: status, id:id})
            .then(response => {
                alert('Data successfully updated')
                loadPayment()
            })
    }

    const approve = (id) =>{
        let answer = window.confirm('Are you sure you want to update the status?');
        if(answer) {
            axios.put(`http://localhost:8081/student-payment/update-status/${id}`, {status: "valid", id: id})
                .then(response => {
                    alert('Status updated')
                    loadPayment()
                })
        }
    }

    const decline =(id)=>{
        let answer = window.confirm('Are you sure you want to update the status?');
        if(answer) {
            axios.put(`http://localhost:8081/student-payment/update-status/${id}`, {status: "invalid", id: id})
                .then(response => {
                    alert('Status updated')
                    loadPayment()
                })
        }
    }

    const notDecided =(id)=>{
        let answer = window.confirm('Are you sure you want to update the status?');
        if(answer) {
            axios.put(`http://localhost:8081/student-payment/update-status/${id}`, {status: "not decided", id: id})
                .then(response => {
                    alert('Status updated')
                    loadPayment()
                })
        }
    }

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
                <h1>Student Payments List</h1><br/>
                <div className="search-wrapper">
                    <div className="row g-2">
                        <div className="col-md">

                        </div>
                        <div className="col-md">
                            <div className="row">
                                <div className="justify-content-md-end">
                                    <div className="input-group justify-content-md-end">
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search..."
                                            value={q}
                                            onChange={(e) => setQ(e.target.value)}
                                        />
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
                                <th>Student Name</th>
                                <th>Contact No</th>
                                <th>Student ID</th>
                                <th>Class</th>
                                <th>Teacher</th>
                                <th>Payment Type</th>
                                <th>Deposited Amount(Rs.)</th>
                                <th>Deposited Date</th>
                                <th>Bank</th>
                                <th>Branch</th>
                                <th>Payment Slip</th>
                                <th>Status</th>
                                <th>Update Status</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(payment).map((c, i) => (
                                <tr key={i} className="align-top">
                                    <td>{c.name}</td>
                                    <td>{c.contactNo}</td>
                                    <td>{c.studentID}</td>
                                    <td>{c.classes}</td>
                                    <td>{c.teacher}</td>
                                    {c.type === "" &&
                                    <td>-</td>
                                    }
                                    {c.type === "Registration payment" &&
                                    <td><span className="text-info">{c.type}</span></td>
                                    }
                                    {c.type === "Monthly Fee" &&
                                    <td><span className="text-warning">{c.type}</span></td>
                                    }
                                    <td>{c.depositedAmount}</td>
                                    <td>{new Date(c.depositedDate).toLocaleDateString(undefined)}</td>
                                    <td>{c.bank}</td>
                                    <td>{c.branch}</td>
                                    <td><img height="100px"
                                             src={`http://localhost:8081/student-payment/photo/${c._id}`}
                                             alt={c.name} className="mb-3"/></td>
                                    {c.status === "" &&
                                    <td>-</td>
                                    }
                                    {c.status === "not decided" &&
                                    <td><span className="badge bg-secondary">{c.status}</span></td>
                                    }
                                    {c.status === "valid" &&
                                    <td><span className="badge bg-success">{c.status}</span></td>
                                    }
                                    {c.status === "invalid" &&
                                    <td><span className="badge bg-danger">{c.status}</span></td>
                                    }
                                    <td>
                                        <button className="btn btn-outline-success mr-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Update Status to Valid" onClick={() => approve(c._id)}>
                                            <i className="fa fa-check"></i>
                                        </button>&nbsp;
                                        <button className="btn btn-outline-danger mr-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Update Status to Invalid" onClick={() => decline(c._id)}>
                                            <i className="fas fa-times"></i>
                                        </button>&nbsp;
                                        <button className="btn btn-outline-secondary ml-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Status not decided"  onClick={() => notDecided(c._id)}>
                                            <i className="fas fa-question"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-danger"
                                                onClick={() => deleteConfirm(c._id)}><i
                                            className="fas fa-trash"></i></button>
                                    </td>
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

export default ViewStudentPayment;
