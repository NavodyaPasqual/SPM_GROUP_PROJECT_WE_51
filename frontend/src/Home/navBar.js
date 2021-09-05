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

                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/"} style={isActive(history, '/')} className="nav-link">
                                Home
                                </Link>
                            </li>

                            {/* Teacher nav */}
                            {showAdminBoard && (
                                <li className="nav-item">
                                <Link to={"/teacher/profile"} style={isActive(history, '/teacher/profile')} className="nav-link">
                                Teacher Profile
                                </Link>
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
