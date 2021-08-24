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
                                <Link className="nav-link" style={isActive(history, '/student/registration/add-payment')} to="/student/registration/add-payment">Registration Payment</Link>
                            </li>

                            {/* With Teacher Login */}
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/registration-form-one')} to="/teacher/registration-form-one">Teacher Registration</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/profile')} to="/teacher/profile">Teacher Profile</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/teacher/view-registration')} to="/teacher/view-registration">Pending Teachers</Link>
                            </li>

                            {/* With Admin Login */}


                            {/* With Accountant Login */}


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
