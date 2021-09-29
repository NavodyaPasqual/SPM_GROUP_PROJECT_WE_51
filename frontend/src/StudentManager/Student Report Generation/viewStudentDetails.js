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


    render() {
        return (
            <div className="view-students">
                <div className="container">
                    <br/>

                    <div className="testbox">

                        <br/>

                        <form className="container">
                            <br/>
                            <div className="banner29">
                                <h2 className="RKH1" > Taprobane Student Report </h2>
                            </div>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >
                                    <br/>
                                    <label><b>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></label>
                                    <br/>

                                    <div className="item">
                                        <h4><b>Mr./Ms:-    {item.FullName}  {item.LastName} </b></h4>
                                    </div>
                                    <br/>
                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> First Name :- {item.FullName}</t></h6></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> Last Name :- {item.LastName} </t></h6></label>
                                        </div>

                                    </div>

                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> National ID Number :- {item.NIC} </t></h6></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> His/Her Birthday :- {item.BirthDay} </t></h6></label>
                                        </div>

                                    </div>


                                    <div className="colums">
                                    <div className="item">
                                        <label htmlFor="ttype"> <h6><t> Mobile Provided One :- {item.Mobile} </t></h6></label>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="rreceivers"><h6><t> Mobile Provided Two :- {item.OtherMobile} </t></h6></label>
                                    </div>

                                </div>

                                    <div className="item">
                                        <label htmlFor="ttype"> <h6><t> Personal Email  :-  {item.Mobile}  </t></h6></label>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="rreceivers"><h6><t> Personal Address (Postal) :- </t></h6></label>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="ttype">( Line 01 ) :- {item.AddressLineOne} </label>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="ttype">( Line 02 ) :- {item.AddressLineTwo} </label>
                                    </div>

                                </div>
                            ))}


                            <br/>
                            <label><b>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></label>
                            <br/><br/>
                            <p>This Report is being authorized to use only for the Management </p>
                            <p><a href="https://www.w3docs.com/privacy-policy">Taprobane Students Management (pvt)LTD</a>.</p>
                            <br/>
                            <label><b>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></label>
                            <br/>

                            <br/> <br/>
                            <br/>
                            <div className="banner29">
                                <h4 className="RKH1" > Taprobane Students Management (pvt)LTD </h4>
                            </div>
                            <br/>

                        </form>

                    </div>
                    <br/><br/>

                </div>
            </div>
        )
    }

}

export default ViewStudents;