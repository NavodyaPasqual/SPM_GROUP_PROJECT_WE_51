import React, {Component} from 'react';
import axios from "axios";

class ViewTeacherRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
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
                alert('Application Declined')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/teacher/update/${id}`, {status: status, id:id})
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
                <h2>Pending Teachers</h2>
                <header className="jumbotron">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Teacher Name</th>
                                <th>NIC</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Current Status</th>
                                <th>Update to Permanent</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                                <tr key={index} className="align-top">
                                    <td>{item.firstName}</td>
                                    <td>{item.nic}</td>
                                    <td>{item.address}</td>
                                    <td>{item.email}</td>
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

export default ViewTeacherRegistration;


