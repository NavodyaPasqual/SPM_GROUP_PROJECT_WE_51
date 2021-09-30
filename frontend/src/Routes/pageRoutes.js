import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../Home/homePage";
import Navbar from "../Home/navBar";
import Footer from "../Home/footer";

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

//New Students
import ViewStudentNotices from "../Student/Students Notices/StudentNotices";
import StudentFeedback from "../Student/StudetFeedBack/StdentFeeedBack";
import StudentUpdate from "../Student/Student Update Profile/StdentsUpdate";
import StudentRegistration from "../Student/Student Registation/student";
import TakeClassMaterials from "../Student/TakeClassMaterials/TakeClassMaterials";


//Students' Manager
import ViewFeedbacks from "../StudentManager/ViewFeedBack/ViewFeedBacks";
import EnterNotices from "../StudentManager/EnterNotices/EnterNotices";
import ViewStudents from "../StudentManager/ViewStudentDetails/viewStudentDetails";
import TakeStudents from "../StudentManager/Student Report Generation/RStudentReport";
import PrintNotices from "../StudentManager/Student Report Generation/RNoticePrint";
import TaskReport from "../Class/taskReport";


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
import ViewTeacherRegistration from "../Supervisor/viewTeacherRegistration";
import ViewProfile from "../Teacher/viewProfile";
import ViewApprovedTeachers from "../Teacher/viewApprovedTeachers";
import RegistrationCompletion from "../Teacher/registrationCompletion";
import ViewPendingTeachers from "../Supervisor/viewPendingTeachers";
import CreateMaterial from "../Teacher/createMaterial";
import ViewUploadedMaterials from "../Teacher/viewUploadedMaterials";
import supervisorDashboard from "../Supervisor/supervisorDashboard";

import teacherTaskUpdate from "../Class/teacherUpdate";
import teacherTask from "../Class/teacher";
import teacherTaskList from "../Class/teacherTask";
import teachertaskteacher from "../Teacher/teacherTask";

import UpdateTeacherMaterial from "../Teacher/updateTeacherMaterial";


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

                        <Route path="/Student/Registration" component={StudentRegistration} />
                        <Route path="/student/student-update" component={StudentUpdate}/>
                        <Route path="/student/notices" component={ViewStudentNotices}/>
                        <Route path="/student/feedback" component={StudentFeedback}/>
                        <Route path="/student/TakeClassMaterials" component={TakeClassMaterials}/>

                        <Route path="/student/payment/update/:id" component={UpdateStudentPayment}/>
                        <Route path="/student/add-payment" component={AddStudentPayment}/>
                        <Route path="/student/payment" component={ViewStudentPayments}/>
                        <Route path="/alert" component={LoadingScreen}/>

                        <Route path="/studentManager/view-feedback" component={ViewFeedbacks}/>
                        <Route path="/studentManager/Enter-Notices" component={EnterNotices}/>
                        <Route path="/studentManager/View-Students-Details" component={ViewStudents}/>
                        <Route path="/studentManager/Take-Students-Details" component={TakeStudents}/>
                        <Route path="/studentManager/Print-Notices" component={PrintNotices}/>

                        <Route path="/accountant/company-payment-incomes" component={ViewIncomeTransaction}/>
                        <Route path="/accountant/company-payment-expenses" component={ViewOutcomeTransaction}/>
                        <Route path="/accountant/update-payment/:id" component={UpdateCompanyPayment}/>
                        <Route path="/accountant/add-payment" component={AddCompanyPayment}/>
                        <Route path="/accountant/student-payment" component={ViewStudentPayment}/>
                        <Route path="/accountant/calender" component={AccountantCalender}/>
                        <Route path="/accountant/report" component={ReactPDF}/>
                        <Route path="/accountant/" component={AccountantDashboard}/>

                        <Route path="/teacher/registration" component={TeacherRegistration}/>
                        <Route path="/teacher/profile" component={TeacherProfile}/>
                        <Route path="/teacher/view-registration" component={ViewTeacherRegistration}/>
                        <Route path="/teacher/view-profile" component={ViewProfile}/>
                        <Route path="/teacher/view-approved-registration" component={ViewApprovedTeachers}/>
                        <Route path="/teacher/complete-registration" component={RegistrationCompletion}/>
                        <Route path="/supervisor/view-pending-teachers" component={ViewPendingTeachers}/>
                        <Route path="/teacher/add-course-materials" component={CreateMaterial}/>
                        <Route path="/teacher/view-lesson-materials" component={ViewUploadedMaterials}/>
                        <Route path="/teacher/update-lesson-materials" component={UpdateTeacherMaterial}/>
                        <Route path="/supervisor/" component={supervisorDashboard}/>

                        <Route path="/teacherTask/report" component={TaskReport}/>
                        <Route path="/teacherTaskUpdate/:id" component={teacherTaskUpdate}/>
                        <Route path="/teacherTask/" component={teacherTask}/>
                        <Route path="/teacherTaskList/" component={teacherTaskList}/>
                        <Route path="/teacherTaskListteacher/" component={teachertaskteacher}/>
                    </Switch>
                </section>
            </Router>
            <Footer />
        </div>
    );
}

export default PageRoutes;
