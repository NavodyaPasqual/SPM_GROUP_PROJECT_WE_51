import React from "react";
import {useHistory,useLocation ,Link} from "react-router-dom";
import "./styles/navBar.css";

const Navbar = () =>{
    const history = useHistory();
    const location = useLocation();

    const isActive = (history, path) => {
        if(history.location.pathname === path){
            return { color: "#887688"}
        } else {
            return { color: "#ffffff"}
        }
    };

    return (
        <div data-testid="nav-1 row">
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <a className="navbar-brand" href="/">
                            &nbsp;<span>TAPROBANE</span>
                        </a>
                    </div>

                    <button className="navbar-toggler ml-auto custom-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            {/* Without Login */}
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                            </li>

                            {/* With Student Login */}
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/student/add-payment')} to="/student/add-payment">Register Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/student/payment')} to="/student/payment">My Payments</Link>
                            </li>

                            {/* With Teacher Login */}
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/registration-form')} to="/teacher/registration-form">Teacher Registration</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/profile')} to="/teacher/profile">Create Profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-registration')} to="/teacher/view-registration">Pending Teachers</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-profile')} to="/teacher/view-profile">All Profiles</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-approved-registration')} to="/teacher/view-approved-registration">Permanent Teachers List</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-pending-teachers')} to="/teacher/view-pending-teachers">Pending Teachers List</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/add-course-materials')} to="/teacher/add-course-materials">Upload Materials</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-lesson-materials')} to="/teacher/view-lesson-materials">Lesson Materials</Link>
                            </li>




                            {/* With Admin Login */}

                            {/* With Accountant Login */}
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/accountant/')} to="/accountant/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/accountant/student-payment')} to="/accountant/student-payment">Student Payment</Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
