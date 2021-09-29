import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import RReportTwo from "./EnterNotices";

const RStudentReport = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div className="background-st-ac p-3">
                <div className="card shadow p-3 mb-4 bg-body rounded">
                    <div className="row g-2">
                        <div className="col-md">
                            <h1>Notices Printing Patrol</h1>
                            <br/>
                        </div>
                    </div>

                    <div className="card p-4 m-3 bg-body rounded">
                        <div className="mb-3 d-md-flex justify-content-md-end">
                            <button className="btn btn-outline-success" onClick={handlePrint}><i className="fas fa-download">&nbsp;&nbsp;PRINT NOTICES</i></button>
                        </div>
                        <div className="table-responsive">
                            <RReportTwo ref={componentRef} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RStudentReport;