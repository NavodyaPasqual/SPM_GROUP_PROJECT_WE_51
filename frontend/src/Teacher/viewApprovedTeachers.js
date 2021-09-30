import React, {Component} from 'react';
import axios from "axios";
import my from "./image/pendingTeacher.png";
import {Link} from "react-router-dom";

class ViewApprovedTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
            isExpandClick: false
        }
    }

    //To call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/teacher/')
            .then(response => {
                this.setState({teacher: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deleteTeacher(e, id){
        axios.delete(`http://localhost:8081/teacher/delete/${id}`)
            .then(response => {
                alert('Are you sure you want to delete this registration ?')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/teacher/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('Registration Status Changed to Pending')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                <div className="card shadow p-3 mb-4 bg-body rounded">
                    <div className="search-wrapper">
                        <div className="p-3">
                            <p3>PERMANENT TEACHERS</p3>
                            <br/><br/>
                            <header className="jumbotron">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Gender</th>
                                            <th>NIC</th>
                                            <th>Address</th>
                                            <th>Contact Number</th>
                                            <th>Email</th>
                                            <th>Registered Date</th>
                                            <th>Current Status</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                                            <tr key={index} className="align-top">
                                                {item.status === "approved" &&
                                                <>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.nic}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.contactNumber}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.regDate}</td>
                                                    <td><span className="badge bg-success">{item.status}</span></td>
                                                    <td>
                                                        <button className="btn btn-outline-warning me-md-2"
                                                                onClick={e => this.updateStatus(e, item._id)}>
                                                            <i className="far fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-outline-danger"
                                                                onClick={e => this.deleteTeacher(e, item._id)}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </>
                                                }
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewApprovedTeachers;
