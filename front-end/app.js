// Page elements
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const searchPage = document.getElementById('search-page');

// Navigation buttons
const toRegisterBtn = document.getElementById('to-register');
const toSearchBtn = document.getElementById('to-search');
const toLoginBtn = document.getElementById('to-login');
const toRegisterFromSearchBtn = document.getElementById('to-register-from-search');
const toLoginFromSearchBtn = document.getElementById('to-login-from-search');

function showPage(page) {
    loginPage.style.display = 'none';
    registerPage.style.display = 'none';
    searchPage.style.display = 'none';
    page.style.display = 'block';
}

toRegisterBtn.onclick = () => showPage(registerPage);
toSearchBtn.onclick = () => showPage(searchPage);
toLoginBtn.onclick = () => showPage(loginPage);
toRegisterFromSearchBtn.onclick = () => showPage(registerPage);
toLoginFromSearchBtn.onclick = () => showPage(loginPage);

document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    showPage(searchPage);
};

document.getElementById('register-form').onsubmit = function(e) {
    e.preventDefault();
    showPage(searchPage);
};

// Fixed list of 10 people
const people = [
    {firstName: 'John', middleName: 'A.', lastName: 'Doe', maritalStatus: 'Single', documentNumber: '123456', address: '123 Main St'},
    {firstName: 'Jane', middleName: 'B.', lastName: 'Smith', maritalStatus: 'Married', documentNumber: '234567', address: '456 Oak Ave'},
    {firstName: 'Alice', middleName: 'C.', lastName: 'Johnson', maritalStatus: 'Divorced', documentNumber: '345678', address: '789 Pine Rd'},
    {firstName: 'Bob', middleName: 'D.', lastName: 'Williams', maritalStatus: 'Widowed', documentNumber: '456789', address: '321 Maple Dr'},
    {firstName: 'Carol', middleName: 'E.', lastName: 'Brown', maritalStatus: 'Single', documentNumber: '567890', address: '654 Cedar Ln'},
    {firstName: 'David', middleName: 'F.', lastName: 'Jones', maritalStatus: 'Married', documentNumber: '678901', address: '987 Birch Pl'},
    {firstName: 'Eve', middleName: 'G.', lastName: 'Garcia', maritalStatus: 'Divorced', documentNumber: '789012', address: '159 Spruce Ct'},
    {firstName: 'Frank', middleName: 'H.', lastName: 'Martinez', maritalStatus: 'Widowed', documentNumber: '890123', address: '753 Willow St'},
    {firstName: 'Grace', middleName: 'I.', lastName: 'Lee', maritalStatus: 'Single', documentNumber: '901234', address: '852 Aspen Rd'},
    {firstName: 'Henry', middleName: 'J.', lastName: 'Clark', maritalStatus: 'Married', documentNumber: '012345', address: '951 Poplar Ave'}
];

function populateTable() {
    const tbody = document.querySelector('#people-table tbody');
    tbody.innerHTML = '';
    people.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.firstName}</td>
            <td>${person.middleName}</td>
            <td>${person.lastName}</td>
            <td>${person.maritalStatus}</td>
            <td>${person.documentNumber}</td>
            <td>${person.address}</td>
        `;
        tbody.appendChild(row);
    });
}

// Populate table on load
populateTable(); 