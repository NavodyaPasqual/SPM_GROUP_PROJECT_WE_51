import React, { Component} from 'react';
import axios from 'axios';
import './viewStudentDetails.css';
let n = "not selected";

const initialState = {
    courses: []
}

class EnterNotices extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8081/StudentNotices/GetAllStudentNotices')
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

                        <form className="container">

                            <br/>
                            <div className="banner29">
                                <h2 className="RKH1" > Taprobane Important Notices</h2>
                            </div>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >
                                    <br/>
                                    <label><b>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></label>

                                        <div className="item">
                                            <h4><b>Title/Event :- {item.name}  </b></h4>
                                        </div>
                                        <br/>

                                        <div className="item">
                                            <h6 htmlFor="ttype"> <b>Type :- </b> {item.type} </h6>
                                        </div>

                                        <div className="item">
                                            <h6 htmlFor="rreceivers"> <b> Targeted Audience:- </b>{item.receivers}</h6>
                                        </div>


                                    <br/>
                                    <h6><b>Description on the Notice: - </b></h6>
                                    <label>{item.description}</label>
                                    <br/>  <br/>
                                    <h6><b>Link To Follow :- </b></h6>
                                    <label>{item.link}</label>
                                    <br/>
                                    <br/>
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
                            <br/>
                            <div className="banner29">
                                <h4 className="RKH1" > Taprobane Students Management (pvt)LTD </h4>
                            </div>
                            <br/>

                        </form>

                    </div>

                    <br/>

                </div>
            </div>
        )
    }

}

export default EnterNotices;