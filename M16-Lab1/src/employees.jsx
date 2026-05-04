import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './EmployeeList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('root')
);