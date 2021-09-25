import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Modal} from "react-bootstrap";
import './style/viewStudentPayment.css';
import './style/button.css';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Monthly Meeting",
        allDay: true,
        start: new Date(2021, 9, 0),
        end: new Date(2021, 9, 0),
    },
    {
        title: "Meeting with client",
        start: new Date(2021, 9, 0),
        end: new Date(2021, 9, 0),
    }
];

function AccountantCalender() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="background-st-ac p-3">
        <div className="card shadow p-3 mb-4 bg-body rounded">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;Add New Event</h1>
            <div className="popup-window">
                <div className="d-flex justify-content-md-end">
                <button className=" button-purple button2-purple" onClick={handleShow}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add new event&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       placeholder="Add Title"
                                       value={newEvent.title}
                                       onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
                                <DatePicker class="form-control" placeholderText="Start Date"
                                            style={{length: "50px", marginRight: "10px"}} selected={newEvent.start}
                                            onChange={(start) => setNewEvent({...newEvent, start})}/>
                                <DatePicker class="form-control" placeholderText="End Date" selected={newEvent.end}
                                            onChange={(end) => setNewEvent({...newEvent, end})}/>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddEvent}>
                            Add Event
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="card p-4 m-3 bg-body rounded">
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 650 }}
            />
            </div>
        </div>
        </div>
    );
}

export default AccountantCalender;