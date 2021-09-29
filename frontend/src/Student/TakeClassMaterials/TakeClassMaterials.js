import React, { Component} from 'react';
import axios from 'axios';
import './TakeClassMaterials.css';
let n = "not selected";


class TakeClassMaterials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/material/')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }



    render() {
        return (
            <div className="take-class-materials">
                <div className="container">
                    <br/>
                    <div className="testbox">


                        <form className="container">
                            <br/>
                            <br/>
                            <div className="banner2">
                                <h1 className="RKH1" >My Class Materials</h1>
                            </div>
                            <br/>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >

                                    {item.status === "approved" &&
                                            <div div className="Rcondition" >


                                                <div className="item">
                                                    <div className="banner85">
                                                            <div className="item">
                                                                <h6>{item.subjectName}   ({item.subjectCode}) </h6>
                                                            </div>
                                                    </div>
                                                </div>

                                                <div className="item">
                                                    <div className="banner3">
                                                        <div className="item">
                                                            <h6>{item.lesson} </h6>
                                                        </div>
                                                    </div>
                                                </div>


                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="fname">
                                                <h6>
                                                    <t>Name of the Subject : </t>
                                                </h6>
                                                <label> {item.subjectName} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="fname">
                                                <h6>
                                                    <t>Code of the Subject : </t>
                                                </h6>
                                                <label> {item.subjectCode} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="fname">
                                                <h6>
                                                    <t>Targeted Lesson/Part : </t>
                                                </h6>
                                                <label> {item.lesson} </label></label>
                                        </div>

                                        <div className="item">
                                            <h6>Administrator Approval:- </h6>
                                            <label>  {item.status === "approved" &&
                                            <td><span className="badge bg-success">{item.status}</span></td>
                                            }</label>
                                            <br/>
                                        </div>

                                    </div>


                                                <br/>
                                                <h6>Teachers Message on the lesson, </h6>
                                                <label> {item.description} </label>


                                                <div className="banner28">
                                                    <div className="item">
                                                        <br/><br/>
                                                        <h6><a href={item.lessonURL}> Download Here</a></h6>
                                                    </div>
                                                </div>

                                                <br/>
                                                <h6>Uploaded By Teachers of Taprobane and approved by Administration, </h6>
                                                 <p>Any concern Please Contact,     <a href="https://www.w3docs.com/privacy-policy">Taprobane Students Management (pvt)LTD</a>.</p>
                                                 <br/>

                                    </div> }

                                </div>
                            ))}
                        </form>

                    </div>


                </div>
            </div>
        )
    }

}

export default TakeClassMaterials;