import React, {Component} from 'react';
import './styles/footer.css'
import './styles/footer-distribution.css'

import img1 from "../components/images/text.gif";

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <footer className="footer-distributed">
                    <div className="footer-left">
                    <img src={img1} height="40px" alt="company text img" className="ml-0"/>
                        <p className="footer-links">
                            <a  href="/">Home</a>&nbsp;
                            ·&nbsp;
                            <a className="mr-5" href="#"> AboutUs</a>&nbsp;
                            ·&nbsp;
                            <a className="mr-5" href="#"> Contact</a>
                        </p>

                        <p className="footer-company-name">TAPROBANE &copy; 2019</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"/>
                            <p><span>SLIIT , New Kandy Road</span> Malabe, Sri Lanka</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"/>
                            <p>+94 (0) 714914133</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"/>
                            <p><a href="#">info@taprobane.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the Taprobane Institute</span>
                            The Taprobane Institute is a leading educational centre in Colombo district
                            which aim to give knowledge of academic disciplines through one-on-one
                            tuition classes held by professionals and scholars who are specialized in
                            specific subject areas.
                        </p>

                        <div className="footer-icons">

                            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;