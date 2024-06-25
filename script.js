
// ------------------------------------------------
document.getElementById('open-filters-button').addEventListener('click', function() {
    document.getElementById('filters').style.display = 'block';
});

document.getElementById('clear-filters-button').addEventListener('click', function() {
    document.getElementById('option-items-container').innerHTML = '';
});
document.querySelector('.filter-back').addEventListener('click', function() {
    document.getElementById('filters').style.display = 'none';
});
let companyList = [
    "Accenture", "Adobe Inc.", "Amazon Web Services", "Apple Inc.", "Cisco Systems Inc.",
    "Dell Technologies Inc.", "Facebook Inc.", "Google (Alphabet Inc.)",
    "Hewlett Packard Enterprise (HPE)", "IBM (International Business Machines Corporation)",
    "Intel Corporation", "Microsoft Corporation", "NVIDIA Corporation", "Oracle Corporation",
    "Palo Alto Networks", "Qualcomm Incorporated", "Salesforce.com Inc.", "SAP SE",
    "Tencent Holdings Limited", "Tesla, Inc", "Twitter, Inc", "VMware, Inc"
];

let jobs = [
    "Data Scientist", "Full Stack Developer", "Cloud Architect", "Cybersecurity Analyst",
    "DevOps Engineer", "Machine Learning Engineer", "Artificial Intelligence Engineer",
    "Network Engineer", "Business Analyst", "IT Product Manager", "UI/UX Designer",
    "Mobile App Developer", "Data Analyst", "Web Developer", "Database Administrator",
    "System Administrator", "System Analyst", "Penetration Tester", "Front-end Developer",
    "Solution Architect", "Network Security Engineer"
];

let employmentTypes = ["Full Time", "Part Time", "Contract", "Temporary", "Other"];

let workArrangements = ["On-site", "Hybrid", "Remote"];

let cityList = [
    "Bangalore", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkata", "Mumbai", "Noida",
    "Pune", "Ahmedabad", "Chandigarh", "Coimbatore", "Indore", "Kochi", "Jaipur",
    "Lucknow", "Mysore", "Nagpur", "Thiruvananthapuram", "Madurai"
];

let workExperience = [
    "None", "+1 year", "+2 years", "+3 years", "+4 years", "+5 years",
    "+6 years", "+7 years", "+8 years", "+9 years", "+10 years", "+11 years", "+12 years"
];

let filterData = {
    companyList: companyList,
    jobs: jobs,
    employmentTypes: employmentTypes,
    workArrangements: workArrangements,
    cityList: cityList,
    workExperience: workExperience
};

document.querySelectorAll('.filter-items').forEach(item => {
    item.addEventListener('click', function() {
        let filterType = this.dataset.filter;
        let optionsContainer = document.getElementById('option-items-container');
        optionsContainer.innerHTML = '';

        if (filterType === 'salaryRange') {
            displaySalaryOption();
        } else {
            filterData[filterType].forEach(option => {
                let optionDiv = document.createElement('div');
                optionDiv.classList.add('option-item');
                
                let checkboxInput = document.createElement('input');
                checkboxInput.type = 'checkbox';
                checkboxInput.name = filterType;
                checkboxInput.value = option;
                checkboxInput.id = option;
                
                let checkboxLabel = document.createElement('label');
                checkboxLabel.htmlFor = option;
                checkboxLabel.textContent = option;
                
                optionDiv.appendChild(checkboxInput);
                optionDiv.appendChild(checkboxLabel);
                optionsContainer.appendChild(optionDiv);
            });
        }
    });
});

function displaySalaryOption() {
    let optionsContainer = document.getElementById('option-items-container');
    optionsContainer.innerHTML = '';

    let salaryContainerDiv = document.createElement('div');
    salaryContainerDiv.className = 'salary-container-div';

    let salaryContainerCurrency = document.createElement('div');
    salaryContainerCurrency.textContent = 'INR (Indian Rupee)';
    salaryContainerCurrency.className = 'salary-container-currency';

    let salaryContainerInput = document.createElement('input');
    salaryContainerInput.className = 'salary-container-input';
    salaryContainerInput.placeholder = 'Enter minimum salary expectation';
    salaryContainerInput.type = 'number';
    salaryContainerInput.min = 0;
    salaryContainerInput.step = 1000;

    salaryContainerDiv.appendChild(salaryContainerCurrency);
    salaryContainerDiv.appendChild(salaryContainerInput);
    optionsContainer.appendChild(salaryContainerDiv);
}
