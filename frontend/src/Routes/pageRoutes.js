import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
//import Footer from "../Home/footer";
import AddStudentPayment from "../Student/Payments/addStudentPayment";
import ViewStudentPayments from "../Student/Payments/viewStudentPayments";
import UpdateStudentPayment from "../Student/Payments/updateStudentPayment";
import LoadingScreen from "../Student/Payments/style/loadingScreen";

import AccountantDashboard from "../Accountant/dashboard";
import ViewStudentPayment from "../Accountant/viewStudentPayment";

import TeacherRegistration from "../Teacher/teacherRegistration";
import TeacherProfile from "../Teacher/teacherProfile";


import Login from "../components/Login";
import Register from "../components/Register"; 
import Profile from "../components/Profile";
import AboutUs from "../Home/aboutUs";
import ContactUs from "../Home/contactUs";

import studentTask from "../Class/student";
import studentTaskList from "../Class/studentTask";
import teacherTask from "../Class/teacher";
import teacherTaskList from "../Class/teacherTask";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route exact path="/aboutUs" component={AboutUs} />
                        <Route exact path="/contactUs" component={ContactUs} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />                        
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/teacher/registration-form-one" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/student/payment/update/:id" component={UpdateStudentPayment}/>
                        <Route path="/student/add-payment" component={AddStudentPayment}/>
                        <Route path="/student/payment" component={ViewStudentPayments}/>
                        <Route path="/accountant/student-payment" component={ViewStudentPayment}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>
                        <Route path="/studentTask/" component={studentTask}/>
                        <Route path="/studentTaskList/" component={studentTaskList}/>
                        <Route path="/teacherTask/" component={teacherTask}/>
                        <Route path="/teacherTaskList/" component={teacherTaskList}/>
                        <Route path="/alert" component={LoadingScreen}/>
                    </Switch>
                </section>
            </Router>

            {/* <Footer /> */}
        </div>
    );
}

export default PageRoutes;

