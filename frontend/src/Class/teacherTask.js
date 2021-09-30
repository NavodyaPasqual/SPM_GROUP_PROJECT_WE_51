import React, {useState, useEffect} from "react";
import axios from "axios";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import '../Accountant/style/viewStudentPayment.css';

const TeacherTaskList = () => {
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
        return fetch(`http://localhost:8081/teacher-task/TeacherTask`, {
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
                }
            })
    };

    const deletePayment = (e, id) => {
        const r = window.confirm("Do you really want to delete company payment ?");
        if(r == true) {
            axios.delete(`http://localhost:8081/teacher-task/TeacherTask/${id}`)
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
                        <h1>Teacher Task Incomes</h1><br/>
                    </div>
                    <div className="col-md">
                        <div className="mb-3 mt-2 d-md-flex justify-content-md-end">
                            <button className="btn btn-outline-success"><i className="fas fa-download">&nbsp;&nbsp;DOWNLOAD</i></button>
                        </div>
                    </div>
                </div>
                <div className="search-wrapper">
                    <div className="row g-2">
                        <div className="col-md">
                            <Link to={`/teacherTask/`}>
                                <button className="button-purple button2-purple">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-plus-circle">&nbsp;&nbsp;&nbsp;&nbsp;Add New Task</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
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
                                <th>Task Title</th>
                                <th>Task Description</th>
                                <th>Teacher ID</th>
                                <th>Importance Level</th>
                                <th>Valid Till</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(payment).map((c, i) => (
                                <tr key={i} className="align-top">
                                    {c.type === "Incomes" &&
                                        <td>{c.name}</td>
                                    }
                                    {c.type === "Incomes" &&
                                        <td>{new Date(c.date).toLocaleDateString(undefined)}</td>
                                    }
                                    {c.type === "Incomes" &&
                                        <td>{c.amount}</td>
                                    }
                                    {c.type === "Incomes" &&
                                    <td><span className="text-primary">{c.type}</span></td>
                                    }
                                    {c.type === "Incomes" &&
                                        <td>
                                            <Link to={`/accountant/update-payment/${c._id}`}>
                                                <button className="btn btn-outline-warning me-md-2">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                            </Link>
                                        </td>
                                    }
                                    {c.type === "Incomes" &&
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

export default TeacherTaskList;
