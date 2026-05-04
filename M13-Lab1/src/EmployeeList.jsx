import React from 'react';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
            </tr>
        );
    }
}

class EmployeeTable extends React.Component {
    render() {
        const rows = this.props.employees.map(emp => (
            <EmployeeRow key={emp.id} employee={emp} />
        ));
        return (
            <table>
                <thead>
                    <tr><th>Name</th></tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { id: 1, name: 'Emma Wilson' },
                { id: 2, name: 'Noah Carter' },
                { id: 3, name: 'Olivia Brown' },
                { id: 4, name: 'Liam Johnson' },
                { id: 5, name: 'Ava Martinez' },
                { id: 6, name: 'Ethan Davis' },
            ]
        };
        this.createEmployee = this.createEmployee.bind(this);
    }

    createEmployee(employee) {
        employee.id = this.state.employees.length + 1;
        this.setState(prev => ({
            employees: [...prev.employees, employee]
        }));
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeTable employees={this.state.employees} />
                <EmployeeAdd createEmployee={this.createEmployee} />
            </div>
        );
    }
}