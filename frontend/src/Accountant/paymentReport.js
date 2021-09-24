import React, {Component} from 'react';
import axios from "axios";

class PaymentReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payments: [],
            isExpandClick: false
        }
    }

    //to call the end point and get the values using axios
    componentDidMount() {
        axios.get('http://localhost:8081/company-payment/')
            .then(response => {
                this.setState({payments: response.data})
            } )
    }

    render() {
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="2"><span className="text-success">Incomes</span></th>
                </tr>
                </thead>
                <tbody>
                {this.state.payments.length > 0 && this.state.payments.map((c, i) => (
                    <tr key={i} className="align-top">
                        {c.type === "Incomes" &&
                        <td>{c.name}</td>
                        }
                        {c.type === "Incomes" &&
                        <td>{c.amount}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr>
                    <th className="mb-3 table-secondary" colspan="2"><span className="text-success">Expenses</span></th>
                </tr>
                </thead>
                <tbody>
                {this.state.payments.length > 0 && this.state.payments.map((c, i) => (
                    <tr key={i} className="align-top">
                        {c.type === "Expenses" &&
                        <td>{c.name}</td>
                        }
                        {c.type === "Expenses" &&
                        <td>{c.amount}</td>
                        }
                    </tr>
                ))}
                </tbody>
                <thead>
                <tr class="table-success">
                    <th><span className="text-dark">Profit of the company (Rs.)</span></th>
                    <th><span className="text-primary">320000</span></th>
                </tr>
                </thead>
            </table>

        )
    }
}

export default PaymentReport;


