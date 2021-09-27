import React, {Component} from 'react';
import axios from "axios";

class ViewUploadedMaterials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            material: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/material/')
            .then(response => {
                this.setState({material: response.data.data})
            } )
    }

    //to call the end point and delete a value using axios
    deleteTeacher(e, id){
        axios.delete(`http://localhost:8081/material/delete/${id}`)
            .then(response => {
                alert('Application Declined')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/material/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('Registration Status Changed')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                <div className="card shadow p-3 mb-4 bg-body rounded">
                    <div className="search-wrapper">
                        <div className="p-3">
                            <p3>Lesson Materials</p3>
                            <br/><br/>
                            <header className="jumbotron">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>Subject Name</th>
                                            <th>Subject Code</th>
                                            <th>Lesson</th>
                                            <th>Description</th>
                                            <th>Current Status</th>
                                            <th>Update to Permanent</th>
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.material.length > 0 && this.state.material.map((item,index) => (
                                            <tr key={index} className="align-top">
                                                <td>{item.subjectName}</td>
                                                <td>{item.subjectCode}</td>
                                                <td>{item.lesson}</td>
                                                <td>{item.description}</td>
                                                {item.status === "not approved" &&
                                                <td><span className="badge bg-danger">{item.status}</span></td>
                                                }
                                                {item.status === "approved" &&
                                                <td><span className="badge bg-success">{item.status}</span></td>
                                                }
                                                <td><button className="update" onClick={e => this.updateStatus(e,item._id)}>
                                                    <i className="far fa-edit"></i>
                                                </button></td>
                                                <td><button className="delete" onClick={e => this.deleteTeacher(e,item._id)}>
                                                    <i className="fas fa-trash"></i>
                                                </button></td>
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

export default ViewUploadedMaterials;


