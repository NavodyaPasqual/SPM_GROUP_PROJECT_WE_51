import React, {Component} from 'react';
import ViewRegistrations from './image/sdimage1.png';
import pending from './image/img2.png';
import permanent from './image/img3.png'
import profile from './image/img6.png'
import all from './image/rep.png'
import lesson from './image/lsn.png'
import pall from './image/img7.jpg'
//import dashboard from './image/dashboard.png'
import './style/supervisorHome.css'

class supervisorDashboard extends Component {
    render() {
        return (
            <div className="supervisor-container"><br/>
                <div className='supervisor-image'>
                </div>
                <h2>D A S H B O A R D</h2>
                <div className="row row-cols-1 p-4 row-cols-md-4 g-4"><br/>
                    <div className="col">
                        <a href="/teacher/view-registration">
                            <div className="card-d shadow p-3 mb-5 rounded">
                                <h5>Current Registrations</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={ViewRegistrations} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/supervisor/view-pending-teachers">
                            <div className="card-d shadow p-3 mb-5 rounded">
                                <h5>Pending Teachers</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={pending} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/teacher/view-approved-registration">
                            <div className="card-d shadow p-3 mb-5 rounded">
                                <h5>Permanent Teachers</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={permanent} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/teacher/profile">
                            <div className="card-d shadow p-3 rounded">
                                <h5>New Profile</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={profile} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/teacher/view-profile">
                            <div className="card-d shadow p-3 rounded">
                                <h5>Teacher Profiles</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={pall} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/teacher/view-lesson-materials">
                            <div className="card-d shadow p-3 rounded">
                                <h5>Lesson Materials</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={lesson} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href="/supervisor/report">
                            <div className="card-d shadow p-3 rounded">
                                <h5>Summary Report</h5>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <img src={all} height="100px"/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default supervisorDashboard;
