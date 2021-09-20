import React, {Component} from 'react';
import axios from "axios";
import './styles/viewPendingTeachers.css';
import my from "./image/teacherReg.png";

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
    deleteProfile(e, id){
        axios.delete(`http://localhost:8081/teacher/delete/${id}`)
            .then(response => {
                alert('Pending Teacher Registration Deleted Successfully')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div className="background">
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div>
                    <br/><br/>
            <div className="container">

                    <h2>Permanent Teachers</h2>
                <br/><br/>
                    {/* Check whether array have any value */}
                    {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                        <div key={index} className="card mb-3">
                            {item.status == "approved" &&
                            <div className="p-3">
                                <img src={my}/>
                                <h5>First Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.firstName}</h5>
                                <h5>Last Name &nbsp;&nbsp; : &nbsp;&nbsp; {item.lastName}</h5>
                                <h5>Gender &nbsp;&nbsp; : &nbsp;&nbsp; {item.gender}</h5>
                                <h5>NIC &nbsp;&nbsp; : &nbsp;&nbsp; {item.nic}</h5>
                                <h5>Passport Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.passportNumber}</h5>
                                <h5>Address &nbsp;&nbsp; : &nbsp;&nbsp; {item.address}</h5>
                                <h5>Contact Number &nbsp;&nbsp; : &nbsp;&nbsp; {item.contactNumber}</h5>
                                <h5>Email &nbsp;&nbsp; : &nbsp;&nbsp; {item.email}</h5>

                                <div className="col-12">
                                    <div className="row">
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-danger" onClick={e => this.deleteProfile(e,item._id)}><i className="fas fa-trash">&nbsp;&nbsp;DELETE</i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            }
                        </div>
                    ))}

            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewApprovedTeachers;
