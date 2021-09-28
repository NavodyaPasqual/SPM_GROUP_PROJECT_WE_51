import React, {Component} from 'react';
//import './style/button.css';
//import './style/forms.css';
import './styles/updateTeacherMaterial.css';
import axios from "axios";
import spinner from "../Student/Payments/image/spinner.gif";

class UpdateTeacherMaterial extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeLesson = this.onChangeLesson.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            subjectName: '',
            subjectCode: '',
            lesson: '',
            description: '',
            lessonURL: '',
            loading: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/material/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    subjectName: res.data.subjectName,
                    subjectCode: res.data.subjectCode,
                    lesson: res.data.lesson,
                    description: res.data.description,
                    lessonURL: res.data.lessonURL
                });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({ subjectName: e.target.value })
    }

    onChangeCode(e) {
        this.setState({ subjectCode: e.target.value })
    }

    onChangeLesson(e) {
        this.setState({ lesson: e.target.value })
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    onChangeUrl(e) {
        this.setState({ lessonURL: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const materialObject = {
            subjectName: this.state.subjectName,
            subjectCode: this.state.subjectCode,
            lesson: this.state.lesson,
            description: this.state.description,
            lessonURL: this.state.lessonURL,
        };

        axios.put('http://localhost:8081/material/update/' + this.props.match.params.id, materialObject)
            .then((res) => {
                console.log(res.data)
                console.log('Material successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/teacher/view-lesson-materials')
    }

    render(){
        return (
            <div className="background-teacher row p-4 d-flex justify-content-center">
                <div className="container-3 w-50 mt-4 shadow pb-4 pt-4 mb-5 rounded">
                    <p3>Edit Lesson Material</p3>
                    <div >

                        <div className="p-3">
                            <form className="row g-3" onSubmit={this.onSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="subjectName" className="form-label">Subject Name</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        <select
                                            type="text"
                                            className="form-select"
                                            id="subjectName"
                                            name="subjectName"
                                            value={this.state.subjectName}
                                            onChange={this.onChangeName}
                                            required
                                        >
                                            <option value="select">- -Select subject- -</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="English">English</option>
                                            <option value="Sinhala">Sinhala</option>
                                            <option value="ICT">ICT</option>
                                            <option value="History">History</option>
                                            <option value="English Literature">English Literature</option>
                                            <option value="Tamil">ICT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subjectCode" className="form-label">Subject Code</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-user-plus"></i></span>
                                        <select
                                            type="text"
                                            className="form-select"
                                            id="subjectCode"
                                            name="subjectCode"
                                            value={this.state.subjectCode}
                                            onChange={this.onChangeCode}
                                            required
                                        >
                                            <option value="select">- -Select subject code- -</option>
                                            <option value="OLMT01">OLMT01</option>
                                            <option value="OLEN02">OLEN02</option>
                                            <option value="OLSI03">OLSI04</option>
                                            <option value="OLIT04">OLIT04</option>
                                            <option value="OLHI05">OLHI05</option>
                                            <option value="OLEL06">OLEL06</option>
                                            <option value="OLTM07">OLTM07</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="lesson" className="form-label">Lesson</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-venus-mars"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lesson"
                                            name="lesson"
                                            value={this.state.lesson}
                                            onChange={this.onChangeLesson}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.onChangeDescription}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card indigo text-center z-depth-2 light-version py-4 px-4">

                                    <div className="col-md-12">
                                        <label htmlFor="lessonURL" className="form-label">Upload Files Here</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="lessonURL"
                                                name="lessonURL"
                                                value={this.state.lessonURL}
                                                onChange={this.onChangeUrl}
                                                required
                                            />
                                        </div>
                                    </div>

                                </div>


                                <div className="col-md-6">
                                    <button className="mt-4 button-red button2-red">Delete Payment</button>
                                </div>
                                <div className="col-md-6 d-flex justify-content-md-end">
                                    <button className="mt-4 button-orange button2-orange">Update Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default UpdateTeacherMaterial;
