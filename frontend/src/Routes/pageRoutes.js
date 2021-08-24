import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
import Footer from "../Home/footer";
import AddRegistrationPayment from "../Student/Payments/addRegistrationPayment";
import AccountantDashboard from "../Accountant/dashboard";
import TeacherRegistration from "../Teacher/teacherRegistration";
import TeacherProfile from "../Teacher/teacherProfile";
import ViewTeacherRegistration from "../Admin/viewTeacherRegistration";

function PageRoutes() {
    return (
        <div>
            <Router>
                <Navbar/>
                <section className="content">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/teacher/registration-form-one" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/teacher/view-registration" component={ViewTeacherRegistration}/>
                        <Route path="/student/registration/add-payment" component={AddRegistrationPayment}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;

