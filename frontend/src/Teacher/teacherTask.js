import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Typed from "react-typed";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import '../Accountant/style/viewStudentPayment.css';
import {Link} from "react-router-dom";

const TeacherTaskLISt = () => {

    const [taskList, setTaskList] = useState([]);
    const [setError] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["tasktitle", "implevel", "teacherid"]);
    const [filterParam] = useState(["All"]);
    const [values, setValues] = useState({
        loading: false,
    });
    const {
        loading
    } = values;

    const search = () => {
        return taskList.filter((item) => {
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

    const getTasks = () => {
        setValues({...values,loading: true})
        return fetch(`http://localhost:8081/teacher-task/TeacherTask`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

    const loadTask = () => {
        getTasks()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setValues({...values,loading: false})
                    console.log(data[0].date)
                    setTaskList(data)
                }
            })
    };

    const deleteTask = (e, id) => {
        const r = window.confirm("Do you really want to delete this task ?");
        if(r == true) {
            axios.delete(`http://localhost:8081/teacher-task/TeacherTask/${id}`)
                .then(response => {
                    loadTask()
                })
        }

    };


    useEffect(() => {
        loadTask()
    }, [])

    const showLoading = () =>
        loading && (<div className="overlay-top">
            <h1 className="txt-main">Please wait....</h1>
            <img className="loadingImg" src={spinner} alt="inner" />
        </div>);

    const statusDone = (id) =>{
        axios.put(`http://localhost:8081/teacher-task/TeacherTask/status/${id}`, {status: "done", id:id})
            .then(response => {
                alert('Status updated')
                loadTask()
            })
    }

    const statusNotDone =(id)=>{
        axios.put(`http://localhost:8081/teacher-task/TeacherTask/status/${id}`, {status: "not done", id:id})
            .then(response => {
                alert('Status updated')
                loadTask()
            })
    }

    return (
        <div className="background-st-ac p-3">
            {showLoading()}
            <div className="card shadow p-3 mb-4 bg-body rounded">
                <h1>Task</h1><br/>
                <div className="search-wrapper">
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="row">
                                <div className="justify-content-md-end">
                                    <div className="input-group justify-content-md-end">
                                        <Typed
                                            strings={[
                                                'Search by task tile',
                                                'Search by impotent level',
                                                'Search by teacher ID',]}
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
                                <th>Status</th>
                                <th>Update Status</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {search(taskList).map((c, i) => (
                                <tr key={i} className="align-top">
                                    <td>{c.tasktitle}</td>
                                    <td>{c.taskdescription}</td>
                                    <td>{c.teacherid}</td>
                                    <td>{c.implevel}</td>
                                    <td>{c.validtill}</td>
                                    {c.status === "done" &&
                                    <td><span className="badge bg-success">{c.status}</span></td>
                                    }
                                    {c.status === "not done" &&
                                    <td><span className="badge bg-warning">{c.status}</span></td>
                                    }
                                    <td>
                                        <button className="btn btn-outline-success mr-5" onClick={() => statusDone(c._id)}>
                                            <i className="fa fa-check"></i>
                                        </button>&nbsp;
                                        <button className="btn btn-outline-warning mr-5" onClick={() => statusNotDone(c._id)}>
                                            <i className="fas fa-times"></i>
                                        </button>&nbsp;
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={e => deleteTask(e, c._id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
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

export default TeacherTaskLISt;
