import React, {Component} from 'react';
import axios from "axios";

class TeacherReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/teacher/')
            .then(response => {
                this.setState({teacher : response.data.data})
            } )
    }

    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="3"><span className="text-success">PERMANENT TEACHERS</span></th>
                </tr>
                </thead>
                <tbody>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Registered Date</th>
                {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                    <tr key={index} className="align-top">
                        {item.status === "approved" &&
                        <td>{item.firstName}</td>
                        }
                        {item.status === "approved" &&
                        <td>{item.lastName}</td>
                        }
                        {item.status === "approved" &&
                        <td>{item.regDate}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="3"><span className="text-success">PENDING TEACHERS</span></th>
                </tr>
                </thead>
                <tbody>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Registered Date</th>
                {this.state.teacher.length > 0 && this.state.teacher.map((item,index) => (
                    <tr key={index} className="align-top">
                        {item.status === "not approved" &&
                        <td>{item.firstName}</td>
                        }
                        {item.status === "not approved" &&
                        <td>{item.lastName}</td>
                        }
                        {item.status === "not approved" &&
                        <td>{item.regDate}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colSpan="3"><span
                        className="text-success">TOTAL REGISTRATIONS</span></th>
                </tr>
                </thead>
                <tbody>
                <tr class="table-success">
                    <th><span className="text-dark">No of Registrations</span></th>
                    <th><span className="text-primary">Permanent</span></th>
                    <th><span className="text-primary">3</span></th>
                </tr>
                <tr className="table-success">
                    <th><span className="text-dark">No of Registrations</span></th>
                    <th><span className="text-primary">Pending</span></th>
                    <th><span className="text-primary">2</span></th>
                </tr>
                <tr className="table-success">
                    <th><span className="text-dark">Total No of Registrations</span></th>
                    <th><span className="text-primary">All</span></th>
                    <th><span className="text-primary">5</span></th>
                </tr>
                </tbody>
            </table>

        )
    }
}

export default TeacherReport;


