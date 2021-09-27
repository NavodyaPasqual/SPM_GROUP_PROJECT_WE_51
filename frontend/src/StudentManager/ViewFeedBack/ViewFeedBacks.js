import React, { Component} from 'react';
import axios from 'axios';
import './ViewFeedBacks.css';
let n = "not selected";

const initialState = {
    title: '',
    type: '',
    receivers:'StdentNO1Rv',
    description: '',
    courses: []
}

class ViewFeedBacks extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8081/StudentFeedbacks/GetAllFeedBackForParticularUser/StudentManager')
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

    //to call the end point and delete a value using axios
    deleteFeedback(e, id){
        axios.delete(`http://localhost:8081/StudentFeedbacks/deleteFeedback/${id}`)
            .then(response => {
                alert('Application Declined')
                this.componentDidMount()
            })
    }


    render() {
        return (
            <div className="student-view-feedback">
                <div className="container">
                    <br/>
                    <br/>
                    <br/>

                    <div className="testbox">

                        <br/>
                        <br/>

                        <form className="container">
                            <br/>
                            <br/>
                            <center><h3> Feedback Management Patrol </h3></center>
                            <br/>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >

                                    <br/>
                                    <div className="item">
                                        <div className="banner97" >
                                            <h4>Student Inquiry To focus</h4>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <h6>The Entered Title Of Inquiry :</h6>
                                        <h5><center><u><b> {item.title}</b></u></center></h5>
                                    </div>

                                    <br/>
                                    <h6>Inquiry Detail: </h6>
                                    <label>{item.description}</label>
                                    <br/>
                                    <br/>
                                    <br/>

                                    <div className="colums">

                                        <div className="item">
                                            <label htmlFor="fname"> <h6><t> Student's expected type of message:</t></h6><label> {item.type} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="lname"><h6><t> Received you responsibly as :</t></h6> <label>{item.receivers}</label></label>
                                        </div>
                                    </div>
                                    <br/>
                                    <td><button className="delete" onClick={e => this.deleteFeedback(e,item._id)}>
                                        <i className="fas fa-trash">  Feedback </i>
                                    </button></td>
                                    <br/>
                                </div>
                            ))}
                        </form>


                    </div>

                    <form onSubmit={this.onSubmit}data-testid ="form-tag">

                        <br/>
                        <div className="item">
                            <div className="banner98" >
                            </div>
                        </div>
                        <br/>
                        <center><h5> Make Replies for the Student Feedbacks </h5></center>
                        <br/>
                        <div className="item">
                            <label htmlFor="description">Enter a Reply for a Feedback (Enter the title of the feedback above) : <span>*</span></label>
                            <br/>
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
                            <label htmlFor="description">Solution message Explanation : <span>*</span></label>
                            <br/>
                            <textarea id="description" type="text" name="description" required
                                      value={this.state.description}
                                      onChange={this.onChange}
                                      className="RKTArea1"/>
                        </div>


                        <div className="colums">

                            <div className="item">
                                <label htmlFor="LastName">Type of the reply: <span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    name="type"
                                    required
                                    value={this.state.type }
                                    onChange={this.onChange}
                                />
                            </div>


                            <div className="item">
                                <h6>*Will automatically reply for that particular student</h6>
                            </div>



                            <div className="item">
                                <div className="btn btn-primary" >
                                    <button type="submit" className="btn btn-primary" data-testid ="submit-btn">Proceed Reply</button>
                                </div>
                            </div>

                        </div>
                        <br/>
                        <div className="item">
                            <div className="banner98" >
                            </div>
                        </div>
                        <br/>
                    </form>


                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }

}

export default ViewFeedBacks;