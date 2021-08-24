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
                alert('Data successfully deleted')
                this.componentDidMount()
            })
    }

    updateStatus(e, id){
        const status = prompt("Enter the status: ");
        axios.put(`http://localhost:8081/teacher/update/${id}`, {status: status, id:id})
            .then(response => {
                alert('Data successfully updated')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="p-3">
                <header className="jumbotron">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>NIC</th>
                                <th>Address</th>
                                <th>Contact Number</th>
                                <th>Email</th>
                                <th>Qualification Type</th>
                                <th>Institute</th>
                                <th>Academic Year</th>
                                <th>Subjects</th>
                                <th>Teaching Institute</th>
                                <th>Year</th>
                                <th>Subjects</th>
                                <th>Association Name</th>
                                <th>Reg Number</th>
                                <th>Year</th>
                                <th>School</th>
                                <th>Subject</th>
                                <th>Current Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                                <tr key={index} className="align-top">
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.nic}</td>
                                    <td>{item.address}</td>
                                    <td>{item.contactNumber}</td>
                                    <td>{item.email}</td>
                                    <td>{item.qualificationType}</td>
                                    <td>{item.academicInstitute}</td>
                                    <td>{item.academicYear}</td>
                                    <td>{item.subjects}</td>
                                    <td>{item.teachingInstitute}</td>
                                    <td>{item.teachingYear}</td>
                                    <td>{item.majorSubjects}</td>
                                    <td>{item.associationName}</td>
                                    <td>{item.regNumber}</td>
                                    <td>{item.experienceYear}</td>
                                    <td>{item.schoolName}</td>
                                    <td>{item.taughtSubjects}</td>
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
        )
    }
}

export default ViewTeacherRegistration;


