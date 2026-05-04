import React from 'react';

export default class EmployeeAdd extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const employee = {
            name: form.name.value,
        };
        this.props.createEmployee(employee);
        form.reset();
    }

    render() {
        return (
            <div>
                <h3>Add Employee</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}