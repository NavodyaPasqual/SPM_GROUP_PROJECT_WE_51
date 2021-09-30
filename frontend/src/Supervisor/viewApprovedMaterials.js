import React, { Component} from 'react';
import axios from 'axios';
import my from "../Supervisor/image/img4.png";

class ViewApprovedMaterials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            material: [],
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/material/')
            .then(response => {
                this.setState({material: response.data.data})
            } )
    }


    render() {
        return (
            <div className="background">
                <div className="container p-3">
                    <p3>UPLOAD STATUS</p3>
                    <br/><br/>
                    <div className="container">
                        {this.state.material.length > 0 && this.state.material.map((item,index) => (
                            <div key={index} className="body">
                                <div className="card shadow p-3 mb-5 bg-body rounded">
                                    <img src={my}/>
                                    <div className="row">
                                        <dt className="col-sm-7">
                                            <div className="row">
                                                <div className="row">
                                                    <dt className="col-sm-4">Subject Name</dt>
                                                    <dd className="col-sm-8">{item.subjectName}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Subject Code</dt>
                                                    <dd className="col-sm-8">{item.subjectCode}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Lesson</dt>
                                                    <dd className="col-sm-8">{item.lesson}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt className="col-sm-4">Description</dt>
                                                    <dd className="col-sm-8">{item.description}</dd>
                                                </div>
                                                 <br/><br/>
                                                <div className="row">
                                                    <dt className="col-sm-4">Current Status</dt>
                                                    {item.status === "not approved" &&
                                                    <dd className="col-sm-4 badge bg-danger">{item.status}</dd>
                                                    }
                                                    {item.status === "approved" &&
                                                    <dd className="col-sm-4 badge bg-success">{item.status}</dd>
                                                    }

                                                    <br/><br/>
                                                </div>
                                            </div>
                                        </dt>
                                    </div>


                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        )
    }
}

export default ViewApprovedMaterials;
