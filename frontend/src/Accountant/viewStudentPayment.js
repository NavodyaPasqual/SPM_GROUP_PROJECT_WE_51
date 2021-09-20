import React, {useState, useEffect} from "react";
import axios from "axios";
import Typed from "react-typed";

const ViewStudentPayment = () => {
    const [payment, setPayment] = useState([]);
    const [setError] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["studentID", "name", "type"]);
    const [filterParam] = useState(["All"]);

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

    useEffect(() => {
        loadPayment()
    }, [])

    return (
        <div className="p-3">
            <div className="card shadow p-3 mb-4 bg-body rounded">
                <h1>Registered WorkShop List</h1><br/>
                <div className="search-wrapper">

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
                                <th>Update</th>
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
                                        <button className="btn btn-outline-warning me-md-2"
                                                onClick={() => updateStatus(c._id)}><i className="fas fa-edit"></i>
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
