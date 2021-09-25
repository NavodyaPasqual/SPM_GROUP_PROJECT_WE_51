import React, {Component} from 'react';
/*import studentPayment from './images/studentPayment.png';
import income from './images/income.png';
import outcome from './images/outcomes.png'
import report from './images/report.png'
import calendar from './images/calendar.png'
import dashboard from './images/dashboard.png'*/
import './style/supervisorDashboard.css'

class supervisorDashboard extends Component {
    render() {
        return (


<div className="container-fluid ">
    <div className="row py-lg-2">

        <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar" id="sidebar">
            <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center"></h1>
            <div className="list-group rounded-0">
                <a href="#"
                   className="list-group-item list-group-item-action active border-0 d-flex align-items-center">
                    <span className="bi bi-border-all"></span>
                    <span className="ml-2">Dashboard</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 align-items-center">
                    <span className="bi bi-box"></span>
                    <span className="ml-2">Products</span>
                </a>

                <button
                    className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse" data-target="#sale-collapse">
                    <div>
                        <span className="bi bi-cart-dash"></span>
                        <span className="ml-2">Sales</span>
                    </div>
                    <span className="bi bi-chevron-down small"></span>
                </button>
                <div className="collapse" id="sale-collapse" data-parent="#sidebar">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Customers</a>
                        <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Sale Orders</a>
                    </div>
                </div>

                <button
                    className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
                    data-toggle="collapse" data-target="#purchase-collapse">
                    <div>
                        <span className="bi bi-cart-plus"></span>
                        <span className="ml-2">Purchase</span>
                    </div>
                    <span className="bi bi-chevron-down small"></span>
                </button>
                <div className="collapse" id="purchase-collapse" data-parent="#sidebar">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Sellers</a>
                        <a href="#" className="list-group-item list-group-item-action border-0 pl-5">Purchase Orders</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-100 vh-100 position-fixed overlay d-none" id="sidebar-overlay"></div>

        <div className="col-md-9 col-lg-10 ml-md-auto px-0">

            <nav className="w-100 d-flex px-4 py-2 mb-4 shadow-sm">

                <button className="btn py-0 d-lg-none" id="open-sidebar">
                    <span className="bi bi-list text-primary h3"></span>
                </button>
                <div className="dropdown ml-auto">
                    <button className="btn py-0 d-flex align-items-center" id="logout-dropdown" data-toggle="dropdown"
                            aria-expanded="false">
                        <span className="bi bi-person text-primary h4"></span>
                        <span className="bi bi-chevron-down ml-1 mb-2 small"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right border-0 shadow-sm"
                         aria-labelledby="logout-dropdown">
                        <a className="dropdown-item" href="#">Logout</a>
                        <a className="dropdown-item" href="#">Settings</a>
                    </div>
                </div>
            </nav>

            <main className="container-fluid">
                <section className="row">
                    <div className="col-md-6 col-lg-4">

                        <article className="p-4 rounded shadow-sm border-left
               mb-4">
                            <a href="#" className="d-flex align-items-center">
                                <span className="bi bi-box h5"></span>
                                <h5 className="ml-2">Products</h5>
                            </a>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="p-4 rounded shadow-sm border-left mb-4">
                            <a href="#" className="d-flex align-items-center">
                                <span className="bi bi-person h5"></span>
                                <h5 className="ml-2">Customers</h5>
                            </a>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="p-4 rounded shadow-sm border-left mb-4">
                            <a href="#" className="d-flex align-items-center">
                                <span className="bi bi-person-check h5"></span>
                                <h5 className="ml-2">Sellers</h5>
                            </a>
                        </article>
                    </div>
                </section>

                <div className="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
                    <div className="container">
                        <h1 className="display-4 mb-2 text-primary">Simple</h1>
                        <p className="lead text-muted">Simple Admin Dashboard with Bootstrap.</p>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>

        )

    }

}

export default supervisorDashboard;
