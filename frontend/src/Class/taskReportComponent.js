import React, {Component} from 'react';
import axios from "axios";

class TaskReportComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/teacher-task/TeacherTask/')
            .then(response => {
                this.setState({tasks: response.data})
            } )
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Teacher ID</th>
                        <th>Importance Level</th>
                        <th>Valid Till</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.tasks.length > 0 && this.state.tasks.map((c, i) => (
                        <tr key={i} className="align-top">

                            <td>{c.tasktitle}</td>
                            <td>{c.taskdescription}</td>
                            <td>{c.teacherid}</td>
                            <td>{c.implevel}</td>
                            <td>{c.validtill}</td>
                            {c.status === "done" &&
                            <td><span className="text-success">{c.status}</span></td>
                            }
                            {c.status === "not done" &&
                            <td><span className="text-warning">{c.status}</span></td>
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskReportComponent;


