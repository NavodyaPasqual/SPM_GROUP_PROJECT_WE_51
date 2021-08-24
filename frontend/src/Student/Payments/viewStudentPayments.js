import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import my from "./image/myPayment.png";
import './style/forms.css'

const ViewStudentPayments = () => {
    const [payment, setPayment] = useState([]);
    const [setError] = useState([]);

    const getPayments = () => {
        return fetch(`http://localhost:8080/student-payment/`, {
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
                    console.log(data[0].date)
                    setPayment(data)
                }
            })
    };

    const deleteConference = (id) => {
        return fetch(`http://localhost:8080/student-payment/delete/${id}`,{
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
        let answer = window.confirm('Are you sure you want to delete this payment?')
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

    useEffect(() => {
        loadPayment()
    }, [])

    return (
        <div className="background-view">
            <img className="top" src={my}/>
        <div className="container p-3">
            <h1>My Payment Submissions</h1><br/>
            {payment.map((c,i)=> (
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="body" key={i}>
                        <div className="row">
                            <dt className="col-sm-6">
                                <div className="row">
                                    <dt className="col-sm-3">Payment Type</dt>
                                    {c.type === "Registration payment" &&
                                        <dd className="col-sm-9"><span className="text-info">{c.type}</span></dd>
                                    }
                                    {c.type === "Monthly Fee" &&
                                        <dd className="col-sm-9"><span className="text-warning">{c.type}</span></dd>
                                    }
                                </div>
                                {/*<Typed loop typeSpeed={140} strings={[c.title]} loopCount={0} showCursor cursorChar="|" className="self-typed" />*/}
                                <div className="row">
                                    <dt className="col-sm-3">Student Name</dt>
                                    <dd className="col-sm-9">{c.name}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Contact Number</dt>
                                    <dd className="col-sm-9">{c.contactNo}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Student ID</dt>
                                    <dd className="col-sm-9">{c.studentID}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Class</dt>
                                    <dd className="col-sm-9">{c.classes}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Teacher Name</dt>
                                    <dd className="col-sm-9">{c.teacher}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Deposited Amount (Rs.)</dt>
                                    <dd className="col-sm-9">{c.depositedAmount}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Deposited Date</dt>
                                    <dd className="col-sm-9">{new Date(c.depositedDate).toLocaleDateString(undefined)}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Bank</dt>
                                    <dd className="col-sm-9">{c.bank}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Branch</dt>
                                    <dd className="col-sm-9">{c.branch}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-3">Status</dt>
                                    {c.status === "not decided" &&
                                        <dd className="col-sm-9"><h5><span className="badge bg-secondary">{c.status}</span></h5></dd>
                                    }
                                    {c.status === "valid" &&
                                        <dd className="col-sm-9"><h5><span className="badge bg-success">{c.status}</span></h5></dd>
                                    }
                                    {c.status === "invalid" &&
                                        <dd className="col-sm-9"><h5><span className="badge bg-danger">{c.status}</span></h5></dd>
                                    }
                                </div>
                            </dt>
                            <dt className="col-sm-6">
                                <div className="row">
                                    {c.status === "not decided" &&
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <Link to={`/student/payment/update/${c._id}`}>
                                            <button className="btn btn-outline-warning me-md-2"><i className="fas fa-edit">&nbsp;&nbsp;UPDATE</i></button>
                                        </Link>
                                        <button className="btn btn-outline-danger" onClick={() => deleteConfirm(c._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                    </div>
                                    }
                                </div>
                                <div className="row">
                                    <dd className="col-sm-10">
                                        <br/><img  height="250px" src={`http://localhost:8080/student-payment/photo/${c._id}`} alt={c.name} className="mb-3"/>
                                    </dd>
                                </div>
                            </dt>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
};

export default ViewStudentPayments;
