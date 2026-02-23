// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM 
let form = document.getElementById('addForm');
let table = document.getElementById('employees');
let employeeCountOutput = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// Initial employee data (at least 5 employees)
let initialEmployees = [
    { id: 98123456, name: "Alicia Ramirez", extension: 2468, email: "alicia.ramirez@company.com", department: "Engineering" },
    { id: 87234561, name: "Daniel Kim", extension: 1357, email: "daniel.kim@company.com", department: "Executive" },
    { id: 76345612, name: "Samantha Lee", extension: 4821, email: "samantha.lee@company.com", department: "Marketing" },
    { id: 65456723, name: "Marcus Thompson", extension: 9753, email: "marcus.thompson@company.com", department: "Quality Assurance" },
    { id: 54567834, name: "Olivia Chen", extension: 8642, email: "olivia.chen@company.com", department: "Sales" }
];

// Retrieve employees from localStorage or use initialEmployees if not found
function loadEmployeesFromStorage() {
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employeeCount = employees.length;
    employeeCountOutput.textContent = employeeCount;

    // Populate the table with employees
    employees.forEach(employee => {
        let row = table.insertRow();

        // Insert cells for each employee data
        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellExt = row.insertCell();
        let cellEmail = row.insertCell();
        let cellDept = row.insertCell();
        let cellDelete = row.insertCell();

        // Add employee data to the row
        cellID.appendChild(document.createTextNode(employee.id));
        cellName.appendChild(document.createTextNode(employee.name));
        cellExt.appendChild(document.createTextNode(employee.extension));
        cellEmail.appendChild(document.createTextNode(employee.email));
        cellDept.appendChild(document.createTextNode(employee.department));

        // Create the delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        cellDelete.appendChild(deleteButton);

        // Delete employee on button click
        deleteButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this employee?')) {
                row.remove();
                employeeCount--; // Decrement employee count
                employeeCountOutput.textContent = employeeCount;
                // Remove the employee from localStorage
                removeEmployeeFromStorage(employee.id);
            }
        });
    });
}

// Function to save employee data to localStorage
function saveEmployeesToStorage(employees) {
    localStorage.setItem('employees', JSON.stringify(employees));
}

// Function to remove employee from localStorage
function removeEmployeeFromStorage(empId) {
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employees = employees.filter(employee => employee.id !== empId);
    saveEmployeesToStorage(employees);
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // Log to make sure values are being captured correctly
    console.log(empId, name, extension, email, department);

    // Check if the values are captured correctly
    if (!empId || !name || !extension || !email || !department) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new employee object
    let newEmployee = {
        id: empId,
        name: name,
        extension: extension,
        email: email,
        department: department
    };

    // Add the new employee to the table and localStorage
    let row = table.insertRow();

    // Insert cells for each employee data
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // Add employee data to the row
    cellID.appendChild(document.createTextNode(empId));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // Create the delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');
    cellDelete.appendChild(deleteButton);

    // Delete employee on button click
    deleteButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this employee?')) {
            row.remove();
            employeeCount--; // Decrement employee count
            employeeCountOutput.textContent = employeeCount;
            // Remove the employee from localStorage
            removeEmployeeFromStorage(empId);
        }
    });

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    employeeCountOutput.textContent = employeeCount;

    // Save the updated employee data to localStorage
    let employees = JSON.parse(localStorage.getItem('employees')) || initialEmployees;
    employees.push(newEmployee);
    saveEmployeesToStorage(employees);
});

// Load employees from localStorage or initial data when the page loads
window.onload = function() {
    loadEmployeesFromStorage();
};