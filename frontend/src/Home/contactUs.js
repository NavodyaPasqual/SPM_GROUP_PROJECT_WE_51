import React, {Component} from 'react';
import image from "./images/contactus.jpg";
import './styles/contactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactus container">
                <div className="container p-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col p-3">
                            <div className="raw p-3">
                                <h2><b>LEAVE A COMMENT</b></h2>
                                <br/>
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Your Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message">
                                        </textarea><br/><br/>
                                    </div>

                                    <button type="submit" className="button-purple button2-purple">SUBMIT</button>
                                </form><br/>
                            </div>
                        </div>
                        <div className="col p-3">
                            <div className="raw p-3">
                                <h2><b>GET IN TOUCH</b></h2>
                                <br/>
                                <img src={image} height="280px" className="card-img-top" alt="..."/>
                                <ul className="contactus">
                                    <div>
                                        <i className="fa fa-map-marker"/>
                                        <p>SLIIT , New Kandy Road, Malabe, Sri Lanka</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-phone"/>
                                        <p>+94 (0) 714914133</p>
                                    </div>

                                    <div>
                                        <i className="fa fa-envelope"/>
                                        <p><a href="#">info@taprobane.com</a></p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;
