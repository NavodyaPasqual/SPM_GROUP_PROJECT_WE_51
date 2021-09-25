import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
//import Footer from "../Home/footer";

import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import AboutUs from "../Home/aboutUs";
import ContactUs from "../Home/contactUs";

//Student
import AddStudentPayment from "../Student/Payments/addStudentPayment";
import ViewStudentPayments from "../Student/Payments/viewStudentPayments";
import UpdateStudentPayment from "../Student/Payments/updateStudentPayment";
import LoadingScreen from "../Student/Payments/style/loadingScreen";

import ViewStudentNotices from "../Student/Students Notices/StudentNotices";
import StudentFeedback from "../Student/StudetFeedBack/StdentFeeedBack";
import StudentUpdate from "../Student/Student Update Profile/StdentsUpdate";
import StudentRegistration from "../Student/Student Registation/student";

//Manager
import AccountantDashboard from "../Accountant/dashboard";
import ViewStudentPayment from "../Accountant/viewStudentPayment";
import AddCompanyPayment from "../Accountant/addTransactions";
import UpdateCompanyPayment from "../Accountant/updateTransactions";
import ViewIncomeTransaction from "../Accountant/viewIncomeTransactions";
import ViewOutcomeTransaction from "../Accountant/viewOutcomeTransaction";
import AccountantCalender from "../Accountant/calender";
import ReactPDF from "../Accountant/reportPDF";

//Teacher
import TeacherRegistration from "../Teacher/teacherRegistration";
import TeacherProfile from "../Teacher/teacherProfile";
import teacherTaskUpdate from "../Class/teacherUpdate";
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
                        <Route path="/aboutUs" component={AboutUs} />
                        <Route path="/contactUs" component={ContactUs} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />

                        <Route path="/Student-Registration" component={StudentRegistration} />
                        <Route path="/student/student-update" component={StudentUpdate}/>
                        <Route path="/student/notices" component={ViewStudentNotices}/>
                        <Route path="/student/feedback" component={StudentFeedback}/>
                        <Route path="/student/payment/update/:id" component={UpdateStudentPayment}/>
                        <Route path="/student/add-payment" component={AddStudentPayment}/>
                        <Route path="/student/payment" component={ViewStudentPayments}/>
                        <Route path="/alert" component={LoadingScreen}/>

                        <Route path="/accountant/company-payment-incomes" component={ViewIncomeTransaction}/>
                        <Route path="/accountant/company-payment-expenses" component={ViewOutcomeTransaction}/>
                        <Route path="/accountant/update-payment/:id" component={UpdateCompanyPayment}/>
                        <Route path="/accountant/add-payment" component={AddCompanyPayment}/>
                        <Route path="/accountant/student-payment" component={ViewStudentPayment}/>
                        <Route path="/accountant/calender" component={AccountantCalender}/>
                        <Route path="/accountant/report" component={ReactPDF}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>

                        <Route path="/teacher/registration-form-one" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/teacherTaskUpdate/" component={teacherTaskUpdate}/>
                        <Route path="/teacherTask/" component={teacherTask}/>
                        <Route path="/teacherTaskList/" component={teacherTaskList}/>
                    </Switch>
                </section>
            </Router>
            {/* <Footer />*/}
        </div>
    );
}

export default PageRoutes;
