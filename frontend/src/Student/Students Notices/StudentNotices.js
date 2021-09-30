import React, { Component} from 'react';
import axios from 'axios';
import './StudentsNotices.css';

class StudentNotices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/StudentNotices/GetAllStudentNotices')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }

    render() {
        return (
        <div className="student-notices">




            <div className="topnav">

                <div className="search-container">
                    <form>
                        <input type="text" placeholder="Search.." name="search"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

            </div>





            <div className="container">
                <br/>
                {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                    <div key={index} >

                    <div className="testbox">
                    <form >
                        <br/>
                        <div className="banner22" >
                            <h1>{item.name}</h1>
                        </div>
                    <div className="colums">

                    <div className="item">
                    <label htmlFor="fname"> <h5><t> Type of Notice :</t></h5> {item.type} </label>
                    </div>

                    <div className="item">
                    <label htmlFor="lname"><h5><t> Receivers : </t></h5>{item.receivers}</label>
                    </div>

                    <div className="item">
                    <label htmlFor="address1"><h5><t> Link (If Available) :</t></h5><a href={item.link}>FOLLOW US(TAPROBANE EVENT)</a></label>
                    </div>

                    </div>
                        <br/>
                        <br/>
                    <h5>Description</h5>
                    <label>{item.description}</label>
                        <br/>
                        <br/>
                    </form>
                    </div>
                    </div>
                ))}
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        )
    }
}

export default StudentNotices;