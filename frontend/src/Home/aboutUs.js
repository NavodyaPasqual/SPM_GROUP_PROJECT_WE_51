import React, {Component} from 'react';
import './styles/aboutus.css'
import profilepic from "./images/profilepic.jpg";
import img from './images/ab2.png'
import img1 from './images/ab1.png'

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div className="p-3 row">
                        <div className="col-md-6">
                            <img src={img} height="320px" alt="" className="mt-5"/>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="container">
                                <div className="col-sm-12 col-md-9">
                                    <p className="aboutus_titles"><h1> About us </h1></p>
                                    <p className="about_content">
                                    We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU). We are also the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK.
                                    SLIIT was established in 1999. We opened our doors to 400 students in Metro Campus in Colombo. Currently, we offer both undergraduate and postgraduate courses and accommodate over 9000 students, including international students from various regions in the world. More than 9000 alumni have graduated from our faculties. We take great pride in producing graduates who make meaningful contributions to their communities and professions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                    <div className="p-3 row">                   
                        <div className="col-md-6">
                            <div className="container">
                                <div className="col-sm-12 col-md-9">
                                    <p className="aboutus_titles"><h1> Our team </h1></p>
                                    <p className="about_content">
                                    Some of the key leads of our organization are also industry leaders for their areas; therefore, they understand the data-related business problems you’re trying to solve in your domain and can support you through your analytics and AI journey. The best way to learn about us is to talk to us.
                                    </p>

                                    <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
                                        <center>
                                        ============================<br />
                                            Group Leader: A.G Ruvindu Kaushalya <br />
                                            IT19062884<br />
                                            769209063<br />
                                            ---------------------------------------------<br />
                                            Member 2 : Pasqual N.T. <br />
                                            IT19408316<br />
                                            764213376<br />
                                            ---------------------------------------------<br />
                                            Member 3:  Amarasinghe A.A.B.G <br />
                                            IT19061580<br />
                                            713757345<br />
                                            ---------------------------------------------<br />
                                            Member 4: Wangchen T<br />
                                            IT19098838<br />
                                            772381182<br />
                                        ============================<br />
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"><br /><br />
                            <img src={img1} height="400px" alt="" className="mt-5"/>
                        </div>
                    </div>
                </div>
    </React.Fragment>
        )
    }
}

export default AboutUs;
