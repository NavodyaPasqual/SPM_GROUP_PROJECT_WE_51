import React, { useState, useEffect } from "react";
import {useHistory,useLocation ,Link} from "react-router-dom";


import AuthService from "../services/auth.service";
import "./styles/navBar.css";

const Navbar = () =>{
    const history = useHistory();
    const location = useLocation();

    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showStudentBoard, setshowStudentBoard] = useState(false);
    const [showTeacherBoard, setshowTeacherBoard] = useState(false);
    const [showManagerBoard, setshowManagerBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
     const user = AuthService.getCurrentUser();

        if (user) {
         setCurrentUser(user);
         setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
         setshowStudentBoard(user.roles.includes("ROLE_STUDENT"));
         setshowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
         setshowManagerBoard(user.roles.includes("ROLE_MANAGER"));
        }
     }, []);

    const logOut = () => {
        AuthService.logout();
    };


    const isActive = (history, path) => {
        if(history.location.pathname === path){
            return { color: "#ffffff"}
        } else {
            return { color: "#887688"}
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

                        <div className="navbar-nav mr-auto">
                            {/* Teacher nav */}
                            {showTeacherBoard && (
                                <li className="nav-item">
                                {/* link */}
                                </li>
                            )}

                            {/* Student nav */}
                            {showStudentBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/student/add-payment')} to="/student/add-payment">Payment Registration</Link>
                                </li>
                            )}
                            {showStudentBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/student/payment')} to="/student/payment">My Payments</Link>
                                </li>
                            )}

                            {/* Manager nav / class nav*/}
                            {showManagerBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/accountant/')} to="/accountant/">Dashboard</Link>
                                </li>
                            )}
                            {showManagerBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/accountant/student-payment')} to="/accountant/student-payment">Student Payment</Link>
                                </li>
                            )}
                            
                            {showManagerBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/teacherTask/')} to="/teacherTask/">Add Teacher Task</Link>
                                </li>
                            )}
                            
                            {showManagerBoard && (
                                <li className="nav-item">
                                    <Link className="nav-link" style={isActive(history, '/teacherTaskList/')} to="/teacherTaskList/">Add Teacher Task List</Link>
                                </li>
                            )}
                            

                            {/* Admin nav */}
                            {showAdminBoard && (
                                <li className="nav-item">
                                {/* link */}
                                </li>
                            )}

                        </div>
                        </ul>
                    </div>
                    {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    <b>{currentUser.username}</b>
                                </Link>
                                </li>
                                <li className="nav-item">
                                <a href="/login"  style={isActive(history, '/login')} className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                                </li>
                            </div>
                            ) : (
                            <div className="navbar-nav ml-auto">
                            {/* General nav */}
                            <li className="nav-item">
                                <Link to={"/"} style={isActive(history, '/')} className="nav-link">
                                Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/aboutUs"} style={isActive(history, '/aboutUs')} className="nav-link">
                                About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contactUs"} style={isActive(history, '/contactUs')} className="nav-link">
                                Contact Us &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                </Link>
                            </li>

                                <li className="nav-item">
                                <Link to={"/login"}  style={isActive(history, '/login')} className="nav-link">
                                    Login
                                </Link>
                                </li>

                                <li className="nav-item">
                                <Link to={"/register"} style={isActive(history, '/register')} className="nav-link">
                                    Sign Up
                                </Link>
                                </li>
                            </div>
                            )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
