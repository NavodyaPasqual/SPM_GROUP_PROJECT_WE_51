import React, { Component} from 'react';
import axios from 'axios';
import './studentupdate.css';

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

class updateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {

        axios.get('http://localhost:8081/MainStudent//getDetailsForStudent/611ccbd3b429311660b2a184')
            .then(response => {
                this.setState({ FullName: response.data.FullName, LastName: response.data.LastName, NIC: response.data.NIC,
                    AddressLineOne: response.data.AddressLineOne, AddressLineTwo: response.data.AddressLineTwo,
                    BirthDay: response.data.BirthDay, Mobile: response.data.Mobile, OtherMobile: response.data.OtherMobile,
                    Email: response.data.Email,
                    referances: response.data.referances })
            })
            .catch(error => {
                alert(error.message)
            })

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
        console.log('DATA TO UPDATE', student)
        axios.put('http://localhost:8081/MainStudent/UpdateParticularStudent/611ccbd3b429311660b2a184', student)
            .then(response => {
                alert('Event Data successfully Updated')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }
    render() {
        return (
            <div className="student-update">
            <div className="container">
                <br/>
                <br/>
                <form onSubmit={this.onSubmit}data-testid ="form-tag" className="container">
                    <br/>
                    <h3><b><center>Student Profile</center></b></h3>

                    <div className="banner8" Style = " Left:82%" >
                        <h4>Student No: TAP3456</h4>
                    </div>

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
                            <input id="BirthDay" type="text" name="BirthDay" required
                                   value={this.state.BirthDay}
                                   onChange={this.onChange}/>
                        </div>

                    </div>


                    <br/>
                    <br/>


                    <h6>Update your profile Respectively </h6>
                    <br/>
                    <t/><t/>

                    <center><input type="checkbox" name="checkbox1"/> </center>
                    <p>By clicking Update, The date will be changed <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for Taprobane Institute Management </a>.</p>
                    <br/>
                    <label>You consent to receive communications from us electronically. We will communicate with
                        you by e-mail or phone. </label>
                    <br/>

                    <div className="item">
                        <p>Electronic signature<span className="required">*</span></p>
                        <textarea rows="3" required></textarea>
                    </div>

                    <br/>


                    <br/>
                        <button type="submit" className="btn btn-primary" data-testid ="submit-btn">Update My Details</button>
                    <br/>

                    <br/>
                    <td><button className="delete" >
                        <i className="fas fa-trash"> Remove Me Out</i>
                    </button></td>
                    <br/>

                    <br/>
                    <br/>

                </form>

                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            </div>
        )
    }


}

export default updateStudent;