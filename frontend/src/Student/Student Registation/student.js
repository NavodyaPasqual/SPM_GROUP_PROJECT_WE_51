import React, { Component} from 'react';
import axios from 'axios';
import './StuTryone.css';

const initialState = {
    FullName: '',
    LastName: '',
    NIC:'',
    AddressLineOne: '',
    AddressLineTwo: '',
    BirthDay: '',
    Mobile: '',
    OtherMobile: '',
    Email: '',
    referances: []
}

class addStudent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let student = {
            FullName: this.state.FullName,
            LastName: this.state.LastName,
            NIC: this.state.NIC,
            AddressLineOne: this.state.AddressLineOne,
            AddressLineTwo: this.state.AddressLineTwo,
            BirthDay: this.state.BirthDay,
            Mobile: this.state.Mobile,
            OtherMobile: this.state.OtherMobile,
            Email: this.state.Email,
            referances : this.state.referances
        };
        console.log('DATA TO SEND', student)
        axios.post('http://localhost:8081/MainStudent/createStudent', student)
            .then(response => {
                alert('Student Data successfully Recorded to the Taprobane Systems')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }
    render() {
        return (
            <div className="student-registration">
                <div className="container">
                    <br/><br/><br/>

                    <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
                        <br/>
                        <br/>
                        <div className="banner4">
                            <h1 >Students Registration Portal</h1>
                        </div>
                        <br/>
                        <br/>

                        <div className="colums">
                            <div className="item">
                                <label htmlFor="FullName"> First Name<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="FullName"
                                    name="FullName"
                                    required
                                    value={this.state.FullName}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="LastName"> Last Name<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="LastName"
                                    name="LastName"
                                    required
                                    value={this.state.LastName}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="AddressLineOne">Address 1<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="AddressLineOne"
                                    name="AddressLineOne"
                                    required
                                    value={this.state.AddressLineOne}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="AddressLineTwo">Address 2<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="AddressLineTwo"
                                    name="AddressLineTwo"
                                    required
                                    value={this.state.AddressLineTwo}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="NIC">NIC<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="NIC"
                                    name="NIC"
                                    required
                                    value={this.state.NIC}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="Mobile">Mobile : <span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Mobile"
                                    name="Mobile"
                                    required
                                    value={this.state.Mobile}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="OtherMobile">Other Mobile :<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="OtherMobile"
                                    name="OtherMobile"
                                    required
                                    value={this.state.OtherMobile}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="Email">Email Address<span>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Email"
                                    name="Email"
                                    required
                                    value={this.state.Email}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="item">
                                <label htmlFor="BirthDay">Birth Date <span>*</span></label>
                                <input id="BirthDay" type="date" name="BirthDay" required
                                       value={this.state.BirthDay}
                                       onChange={this.onChange}/>
                            </div>

                        </div>

                        <div className="question">

                            <label>Gender</label>
                            <div className="question-answer">

                                <div>
                                    <input type="radio" value="none" id="radio_1" name="type"/>
                                    <label htmlFor="radio_1" className="radio"><span>Male</span></label>
                                </div>

                                <div>
                                    <input type="radio" value="none" id="radio_2" name="type"/>
                                    <label htmlFor="radio_2" className="radio"><span>Female</span></label>
                                </div>

                            </div>
                        </div>
                        <br/><br/>

                        <h6>Terms and Conditions</h6>
                        <br/>
                        <t/><t/>

                        <center><input type="checkbox" name="checkbox1"/> </center>
                        <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for Taprobane Institute Management </a>.</p>
                        <br/>
                        <label>You consent to receive communications from us electronically. We will communicate with
                            you by e-mail or phone. You agree that all agreements, notices, disclosures and other
                            communications that we provide to you electronically satisfy any legal requirement that such
                            communications be in writing.</label>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="btn btn-primary">

                            <button type="submit" className="btn btn-primary" data-testid ="submit-btn">Proceed Registration</button>

                        </div>
                        <br/><br/><br/>

                    </form>

                    <br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default addStudent;