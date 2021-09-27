import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import my from "./image/myPayment.png";
import './style/viewForm.css';
import spinner from "./image/spinner.gif";
import './style/loading.css';
import {GlassMagnifier} from "react-image-magnifiers";

const ViewStudentPayments = (props) => {
    const [payment, setPayment] = useState([]);
    const [setError] = useState([]);
    const [values, setValues] = useState({
        loading: false,
    });
    const {
        loading
    } = values;


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
                    setPayment(data);
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

    const showLoading = () =>
        loading && (<div className="overlay-top">
            <h1 className="txt-main">Please wait....</h1>
            <img className="loadingImg" src={spinner} alt="inner" />
        </div>);

    return (
        <div className="background-view">
            <img className="top" src={my}/>
        <div className="container p-3">
            <h1>My Payment Submissions</h1><br/>
            {showLoading()}
            {payment.map((c,i)=> (
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="body" key={i}>
                        <div className="row">
                            <dt className="col-sm-7">
                                <div className="row">
                                    <dt className="col-sm-4">Payment Type</dt>
                                    {c.type === "Registration payment" &&
                                        <dd className="col-sm-8"><span className="text-info">{c.type}</span></dd>
                                    }
                                    {c.type === "Monthly Fee" &&
                                        <dd className="col-sm-8"><span className="text-warning">{c.type}</span></dd>
                                    }
                                </div>
                                {/*<Typed loop typeSpeed={140} strings={[c.title]} loopCount={0} showCursor cursorChar="|" className="self-typed" />*/}
                                <div className="row">
                                    <dt className="col-sm-4">Student Name</dt>
                                    <dd className="col-sm-8">{c.name}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Contact Number</dt>
                                    <dd className="col-sm-8">{c.contactNo}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Student ID</dt>
                                    <dd className="col-sm-8">{c.studentID}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Class</dt>
                                    <dd className="col-sm-8">{c.classes}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Teacher Name</dt>
                                    <dd className="col-sm-8">{c.teacher}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Deposited Amount (Rs.)</dt>
                                    <dd className="col-sm-8">{c.depositedAmount}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Deposited Date</dt>
                                    <dd className="col-sm-8">{new Date(c.depositedDate).toLocaleDateString(undefined)}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Bank</dt>
                                    <dd className="col-sm-8">{c.bank}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Branch</dt>
                                    <dd className="col-sm-8">{c.branch}</dd>
                                </div>
                                <div className="row">
                                    <dt className="col-sm-4">Status</dt>
                                    {c.status === "not decided" &&
                                        <dd className="col-sm-8"><h5><span className="badge bg-secondary">{c.status}</span></h5></dd>
                                    }
                                    {c.status === "valid" &&
                                        <dd className="col-sm-8"><h5><span className="badge bg-success">{c.status}</span></h5></dd>
                                    }
                                    {c.status === "invalid" &&
                                        <dd className="col-sm-8"><h5><span className="badge bg-danger">{c.status}</span></h5></dd>
                                    }
                                </div>
                            </dt>
                            <dt className="col-sm-5">
                                <div className="row">
                                    {c.status === "not decided" &&
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <Link to={`/student/payment/update/${c._id}`}>
                                            <button className="btn btn-outline-warning me-md-2"><i className="fas fa-edit">&nbsp;&nbsp;UPDATE</i></button>
                                        </Link>
                                        <button className="btn btn-outline-danger" onClick={() => deleteConfirm(c._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                    </div>
                                    }
                                </div><br/>
                                <div className="row">
                                    <dd className="col-sm-10">
                                        <div className="img-magnifier-container">
                                            <GlassMagnifier
                                                imageSrc={`http://localhost:8081/student-payment/photo/${c._id}`}
                                                imageAlt={c.name}
                                                largeImageSrc={`http://localhost:8081/student-payment/photo/${c._id}`} // Optional
                                            />
                                        </div>
                                        <GlassMagnifier {...{
                                            smallImage:{
                                                src: `http://localhost:8081/student-payment/photo/${c._id}`,
                                                isFluidWidth: true
                                            },
                                            largeImage:{
                                                src: `http://localhost:8081/student-payment/photo/${c._id}`,
                                                width: 900,
                                                height:1300
                                            }
                                        }}/>
                                        <br/>
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
