import React, {Component} from 'react';
import teacher from "./images/conference.png"
import student from "./images/R.jpg"
import system from "./images/research.png"
import './styles/ParalaxStyles.css'

class MenuCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={teacher} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>Teacher</b></h5>
                                <p className="card-text">We give you the best of best we can get, Dont worry we Just do it</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={student} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>Students</b></h5>
                                <p className="card-text">Exhibit expertise knowledge in the any area of Information
                                    Technology. Discover open association of excellent Professionals,
                                    and Scholars and help researchers & professionals to carry and
                                    accomplish their research</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={system} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"><b>System</b></h5>
                                <p className="card-text">Witness the birth and development of a new era:
                                    the information age. Discover how Information Technology has transformed the modern workplace and how
                                    pervasive in the development of new knowledge and wealth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCard;