import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import EmployeeFilter from './EmployeeFilter.jsx';
import EmployeeAdd from './EmployeeAdd.jsx';

class EmployeeRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>
                    <Button variant="danger" onClick={this.toggleModal}>X</Button>
                    <Modal show={this.state.modalVisible} onHide={this.toggleModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Employee?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete this employee?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.toggleModal}>
                                Cancel
                            </Button>
                            <Button variant="success" onClick={() => {
                                this.props.deleteEmployee(this.props.employee.id);
                                this.toggleModal();
                            }}>
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
            </tr>
        );
    }
}

function EmployeeTable(props) {
    const rows = props.employees.map(emp => (
        <EmployeeRow key={emp.id} employee={emp} deleteEmployee={props.deleteEmployee} />
    ));
    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Delete</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
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
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    createEmployee(employee) {
        employee.id = this.state.employees.length + 1;
        this.setState(prev => ({
            employees: [...prev.employees, employee]
        }));
    }

    deleteEmployee(id) {
        this.setState(prev => ({
            employees: prev.employees.filter(emp => emp.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <EmployeeFilter />
                <EmployeeTable 
                    employees={this.state.employees} 
                    deleteEmployee={this.deleteEmployee} 
                />
                <EmployeeAdd createEmployee={this.createEmployee} />
            </div>
        );
    }
}