import React, { Component} from 'react';
import axios from 'axios';
import './viewStudentDetails.css';
let n = "not selected";


class ViewStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/MainStudent/')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }

    //to call the end point and delete a value using axios
    deleteStudent(e, id){
        axios.delete(`http://localhost:8081/MainStudent/deleteStudent/${id}`)
            .then(response => {
                alert('Application Declined')
                this.componentDidMount()
            })
    }


    render() {
        return (
            <div className="view-students">
                <div className="container">
                    <br/>
                    <br/>
                    <br/>

                    <div className="testbox">

                        <br/>
                        <br/>

                        <form className="container">
                            <br/>
                            <div className="banner2">
                                <h2 className="RKH1" >Existing Students of Taprobane</h2>
                            </div>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >
                                    <br/>

                                    <div className="item">
                                        <center><h4>Student:-<b>    {item.FullName}  {item.LastName} </b></h4> </center>
                                    </div>

                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> First Name :-</t></h6><label> {item.FullName} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> Last Name :-</t></h6><label> {item.LastName} </label></label>
                                        </div>

                                    </div>

                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> National ID Number :-</t></h6><label> {item.NIC} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> His/Her Birthday :-</t></h6><label> {item.BirthDay} </label></label>
                                        </div>

                                    </div>


                                    <div className="colums">
                                    <div className="item">
                                        <label htmlFor="ttype"> <h6><t> Mobile Provided One :- </t></h6><label> {item.Mobile} </label></label>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="rreceivers"><h6><t> Mobile Provided Two :- </t></h6> <label>{item.OtherMobile}</label></label>
                                    </div>

                                </div>

                                    <div className="item">
                                        <label htmlFor="ttype"> <h6><t> Personal Email  :- </t></h6><label> {item.Mobile} </label></label>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="rreceivers"><h6><t> Personal Address :- </t></h6></label>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="ttype"> {item.AddressLineOne} </label>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="ttype"> {item.AddressLineTwo} </label>
                                    </div>
                                    <br/>
                                    <td><button className="delete" onClick={e => this.deleteStudent(e,item._id)}>
                                        <i className="fas fa-trash">     Remove student </i>
                                    </button></td>
                                    <br/>

                                    <br/>
                                    <div className="item">
                                        <div className="banner98" >
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>
                                </div>
                            ))}
                        </form>

                    </div>

                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }

}

export default ViewStudents;