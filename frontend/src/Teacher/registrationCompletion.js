import React, { Component} from 'react';
import axios from 'axios';
import TeacherRegistration from "./teacherRegistration";

class RegistrationCompletion extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="p-3">
                <div className="card shadow p-3 mb-4 bg-body rounded">
                    <div className="search-wrapper">
            <h5>Thank you for completing the registration form. You can view your registration form by clicking on
                Pending Teacher Registrations link.  Please check your email for further instructions. If you don't
            see the email titled "Taprobane Pre-Registration" in your INBOX please check your SPAM folder</h5>
                    </div>
                </div>
            </div>
            )

    }
}

export default RegistrationCompletion;
