import React, {Component} from 'react';
import './alert.css'

class LoadingScreen extends Component {
    render() {
        return (
                <div aria-live="polite" aria-atomic="true" className="position-relative">
                    <div className="toast-container position-absolute top-0 end-0 p-3">
                        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <div className="spinner-border text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <strong className="me-auto">&nbsp;&nbsp;Loading</strong>
                                <small className="text-muted">just now</small>
                                <button type="button" className="btn-close" data-bs-dismiss="toast"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default LoadingScreen;