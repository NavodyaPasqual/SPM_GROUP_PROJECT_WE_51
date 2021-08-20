import React, {Component} from 'react';
import './styles/footer.css'
import './styles/footer-distribution.css'

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
                        <h3>INS<span>TITUTE</span></h3>
                        <p className="footer-links">
                            <a  href="/">Home</a>&nbsp;
                            ·&nbsp;
                            <a className="mr-5" href="/view"> AboutUs</a>&nbsp;
                            ·&nbsp;
                            <a className="mr-5" href="/workshop"> Contact</a>
                        </p>

                        <p className="footer-company-name">XXXXXX &copy; 2019</p>
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
                            <p><a href="#">info@XXXXX.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the institute</span>
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
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