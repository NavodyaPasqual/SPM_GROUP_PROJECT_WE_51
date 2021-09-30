import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Typed from "react-typed";
import spinner from "../Student/Payments/image/spinner.gif";
import '../Student/Payments/style/loading.css';
import '../Accountant/style/viewStudentPayment.css';

const TeacherTaskLISt = () => {

    //Search
    const [task, setPayment] = useState([]);
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
        return task.filter((item) => {
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


 
    const showLoading = () =>
        loading && (<div className="overlay-top">
            <h1 className="txt-main">Please wait....</h1>
            <img className="loadingImg" src={spinner} alt="inner" />
        </div>);

    return (
        <div className="background-st-ac p-3">
            {showLoading()}
            <div className="card shadow p-3 mb-4 bg-body rounded">
                <h1>Task</h1><br/>
                <div className="search-wrapper">
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="input-group ">
                                <Typed
                                    strings={[
                                        'Search by  Task Title',
                                        'Search by Task ID'
                                    ]}
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
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherTaskLISt;
