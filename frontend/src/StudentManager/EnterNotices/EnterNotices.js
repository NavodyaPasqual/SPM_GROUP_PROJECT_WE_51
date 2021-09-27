import React, { Component} from 'react';
import axios from 'axios';
import './EnterNotices.css';
let n = "not selected";

const initialState = {
    name: '',
    type: '',
    link: '',
    receivers: '',
    description: '',
    courses: []
}

class EnterNotices extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8081/StudentNotices/GetAllStudentNotices')
            .then(response => {
                this.setState({ courses: response.data.data });
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let notice = {
            name: this.state.name,
            type: this.state.type,
            link: this.state.link,
            receivers: this.state.receivers,
            description: this.state.description,
        };
        console.log('DATA TO SEND', notice)
        axios.post('http://localhost:8081/StudentNotices/createStudentNotices', notice)
            .then(response => {
                alert('Event Data successfully inserted')
                this.componentDidMount()
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    //to call the end point and delete a value using axios
    deleteNotice(e, id){
        axios.delete(`http://localhost:8081/StudentNotices/deleteNotice/${id}`)
            .then(response => {
                alert('Application Declined')
                this.componentDidMount()
            })
    }


    render() {
        return (
            <div className="Notice-Enter">
                <div className="container">
                    <br/>
                    <br/>
                    <br/>

                    <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
                        <br/>
                        <br/>
                        <div className="banner2">
                            <h1 className="RKH1" >New Notice Adding Patrol</h1>
                        </div>
                        <br/>
                        <br/>

                        <div className="item">
                            <label htmlFor="name"> Title To Include:<span>*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                value={this.state.name}
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


                        <div className="colums">

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
                                <label htmlFor="link"> Link To Include:<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="link"
                                    name="link"
                                    required
                                    value={this.state.link}
                                    onChange={this.onChange}
                                />
                            </div>


                            <div className="item">
                                <label htmlFor="receivers">receivers: <span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="receivers"
                                    name="receivers"
                                    required
                                    value={this.state.receivers}
                                    onChange={this.onChange}
                                />
                            </div>

                        </div>

                        <div className="item">
                            <p>*Will Automatically display at the necessary pages of the site.</p>
                            <br/>
                            <div className="btn btn-primary" >
                                <button type="submit" className="btn btn-primary" data-testid ="submit-btn">Enter the Notice to the System</button>
                            </div>
                            <br/>
                            <br/>
                        </div>

                    </form>

                    <br/>
                    <br/>




                    <div className="testbox">

                        <br/>
                        <br/>

                        <form className="container">
                            <br/>
                            <br/>
                            <center><h3>Existing Notices of the System</h3></center>
                            <br/>
                            <br/>

                            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
                                <div key={index} >


                                        <div className="item">
                                            <h6>Title:- <b>   {item.name}</b></h6>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="ttype"> <h6><t> Type of the notice :-</t></h6><label> {item.type} </label></label>
                                        </div>

                                        <div className="item">
                                            <label htmlFor="rreceivers"><h6><t> Receiver(s)/Only for :</t></h6> <label>{item.receivers}</label></label>
                                        </div>


                                    <br/>
                                    <h6>Description Entered : </h6>
                                    <label>{item.description}</label>
                                    <br/>
                                    <h6>Link Entered : </h6>
                                    <label>{item.link}</label>
                                    <br/>
                                    <br/>
                                    <td><button className="delete" onClick={e => this.deleteNotice(e,item._id)}>
                                        <i className="fas fa-trash">     Remove Notice </i>
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

export default EnterNotices;