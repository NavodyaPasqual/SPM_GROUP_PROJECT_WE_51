import React, { Component} from 'react';
import axios from 'axios';
import './StudentFeedBack.css';
let n = "not selected";
//import styles from './studentfeedbacktry.module.css'; // Import css modules stylesheet as styles

const initialState = {
    title: '',
    type: '',
    receivers:'StudentManager',
    description: '',
    courses: []
}

class studentFeedBack extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8081/StudentFeedbacks/GetAllFeedBackForParticularUser/StdentNO1Rv')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let feedBack = {
            title: this.state.title,
            type: this.state.type,
            description: this.state.description,
            receivers: this.state.receivers
        };
        console.log('DATA TO SEND', feedBack)
        axios.post('http://localhost:8081/StudentFeedbacks/createFeedBack', feedBack)
            .then(response => {
                alert('Event Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    render() {
        return (
            <div className="student-feedback">
            <div className="container">
                <br/>
                <br/>
                <br/>

                <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
                    <br/>
                    <br/>
                    <div className="banner2">
                        <h1 className="RKH1" >Students FeedBack Portal</h1>
                    </div>
                    <br/>
                    <br/>

                    <div className="colums">

                        <div className="item">
                            <label htmlFor="title"> Title To Include:<span>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                required
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>



                        <div className="item">
                            <label htmlFor="LastName">Type: <span>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                name="type"
                                required
                                value={this.state.type}
                                onChange={this.onChange}
                            />
                        </div>



                        <div className="item">
                            <label htmlFor="description">Description : <span>*</span></label>
                            <br/>
                            <textarea id="description" type="text" name="description" required
                                   value={this.state.description}
                                   onChange={this.onChange}
                                      className="RKTArea1"/>
                        </div>

                        <div className="item">
                            <h6>Terms and Conditions</h6>
                            <br/>
                            <t/><t/>
                            <p>By clicking Send, Feedback will automatically receive for Students Manager<a href="https://www.w3docs.com/privacy-policy">Privacy Policy (Authorization be Recorded) </a>.</p>
                            <br/>
                            <div className="btn btn-primary" >
                                <button type="submit" className="btn btn-primary" data-testid ="submit-btn">Send My Feedback</button>
                            </div>
                            <br/>
                            <br/>
                        </div>

                    </div>

                    <br/>
                    <p>Thank You for Your Valuable Feedback!</p>
                    <br/>

                </form>

                <br/>
                <br/>




                        <div className="testbox">

                            <br/>
                            <br/>

                            <form className="container">
                                <br/>
                                <br/>
                                <center><h3>Received Responses</h3></center>
                                <br/>
                                <br/>

                                {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                    <div key={index} >


                                <div className="colums">

                                    <div className="item">
                                        <div className="banner3" >
                                            <h4>Response From Manager</h4>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <h6>Title/Reply For:-  <b>   {item.title}</b></h6>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="fname"> <h6><t> Type of Reason for the Reply :</t></h6><label> {item.type} </label></label>
                                    </div>

                                    <div className="item">
                                        <label htmlFor="lname"><h6><t> Receiver(s)/Only for :</t></h6> <label>{item.receivers}</label></label>
                                    </div>
                                </div>

                                <br/>
                                <h6>Answer/Reply for You : </h6>
                                <label>{item.description}</label>
                                <br/>
                                <br/>
                                <p>This Response is for the Feedback you sent, by Students Manager of Taprobane <a href="https://www.w3docs.com/privacy-policy">Taprobane Students Management (pvt)LTD</a>.</p>
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

export default studentFeedBack;