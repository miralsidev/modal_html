// let companyList = [
//     "Accenture",
//     "Adobe Inc.",
//     "Amazon Web Services",
//     "Apple Inc.",
//     "Cisco Systems Inc.",
//     "Dell Technologies Inc.",
//     "Facebook Inc.",
//     "Google (Alphabet Inc.)",
//     "Hewlett Packard Enterprise (HPE)",
//     "IBM (International Business Machines Corporation)",
//     "Intel Corporation",
//     "Microsoft Corporation",
//     "NVIDIA Corporation",
//     "Oracle Corporation",
//     "Palo Alto Networks",
//     "Qualcomm Incorporated",
//     "Salesforce.com Inc.",
//     "SAP SE",
//     "Tencent Holdings Limited",
//     "Tesla, Inc",
//     "Twitter, Inc",
//     "VMware, Inc"
// ];

// let jobs = [
//     "Data Scientist",
//     "Full Stack Developer",
//     "Cloud Architect",
//     "Cybersecurity Analyst",
//     "DevOps Engineer",
//     "Machine Learning Engineer",
//     "Artificial Intelligence Engineer",
//     "Network Engineer",
//     "Business Analyst",
//     "IT Product Manager",
//     "UI/UX Designer",
//     "Mobile App Developer",
//     "Data Analyst",
//     "Web Developer",
//     "Database Administrator",
//     "System Administrator",
//     "System Analyst",
//     "Mobile App Developer",
//     "Penetration Tester",
//     "Front-end Developer",
//     "Solution Architect",
//     "Network Security Engineer"
// ];

// let employmentTypes = [
//     "Full Time",
//     "Part Time",
//     "Contract",
//     "Temporary",
//     "Other"
// ];

// let workArrangements = [
//     "On-site",
//     "Hybrid",
//     "Remote"
// ];

// let cityList = [
//     "Bangalore",
//     "Chennai",
//     "Delhi", "Gurgaon",
//     "Hyderabad",
//     "Kolkata",
//     "Mumbai",
//     "Noida",
//     "Pune",
//     "Ahmedabad",
//     "Chandigarh",
//     "Coimbatore",
//     "Indore",
//     "Kochi",
//     "Jaipur",
//     "Lucknow",
//     "Mysore",
//     "Nagpur",
//     "Thiruvananthapuram",
//     "Madurai"
// ];

// let countries = [
//     'India',
//     'United States',
//     'United Kingdom',
//     'Brazil',
//     'Indonesia'
// ];

// function makingYearList() {
//     let arr = ['None'];
//     for (i = 1; i <= 12; ++i) {
//         arr.push(`${i}+ years`);
//     }
//     return arr;
// }


// Array.from(document.getElementsByClassName('filter-items')).forEach(item => {
//     item.addEventListener('click', function () {

//         let filterArray;
//         switch (this.id) {
//             case 'companyList':
//                 filterArray = companyList;
//                 setElement('companyList');
//                 break;
//             case 'jobs':
//                 filterArray = jobs;
//                 setElement('jobs');
//                 break;
//             case 'employeeTypes':
//                 filterArray = employmentTypes;
//                 setElement('employeeTypes');
//                 break;
//             case 'workArrangement':
//                 filterArray = workArrangements;
//                 setElement('workArrangement');
//                 break;
//             case 'cityList':
//                 filterArray = cityList;
//                 setElement('cityList');
//                 break;
//             case 'years':
//                 filterArray = makingYearList();
//                 setElement('years');
//                 break;
//             case 'salaryRange':
//                 displaySalaryOption();
//                 setElement('salaryRange');
//                 return true;
//             default:
//                 filterArray = [];
//         }
//         displayOptions(filterArray);
//     });
// });

// function displaySalaryOption() {
//     let checkboxContainer = document.getElementsByClassName("option-items-container");
//     for (i = 0; i < checkboxContainer.length; ++i) {
//         checkboxContainer[i].innerHTML = '';
//     };

//     let salaryContainerDiv = document.createElement('div');
//     salaryContainerDiv.className = 'salary-container-div';

//     let salaryContainerCurrency = document.createElement('currency');
//     salaryContainerCurrency.textContent = 'INR (Indian Rupee)';
//     salaryContainerCurrency.className = 'salary-container-currency';

//     let salaryContainerInput = document.createElement('input');
//     salaryContainerInput.className = 'salary-container-input';
//     salaryContainerInput.placeholder = 'Enter minimum salary expectation';
//     salaryContainerInput.type = 'number';
//     salaryContainerInput.min = 0;
//     salaryContainerInput.step = 1000;

//     salaryContainerDiv.appendChild(salaryContainerCurrency);
//     salaryContainerDiv.appendChild(salaryContainerInput);

//     let num = 0, str = '';

//     for (i = 0; i < checkboxContainer.length; ++i) {
//         checkboxContainer[i].append(salaryContainerDiv);
//         if (str.length < checkboxContainer[i].innerHTML.length) {
//             str = checkboxContainer[i].innerHTML;
//             num = i;
//         }
//     };

//     checkboxContainer[num].innerHTML = str;

//     num = 0;
//     str = '';
// }


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









function displayOptions(arr) {

    let checkboxContainer = document.getElementsByClassName("option-items-container");
    for (i = 0; i < checkboxContainer.length; ++i) {
        checkboxContainer[i].innerHTML = '';
    };

    let checkboxList = document.createElement('div');
    checkboxList.className = 'option-items-list';
    let cSD = '';

    if (arr === cityList) {

        console.log('preparing the cityList');

        let countrySelectDiv = document.createElement('div');
        countrySelectDiv.className = 'country-select-div';

        let countrySelect = document.createElement('select');
        countrySelect.type = 'select';
        countrySelect.className = 'country-select';

        countries.forEach(country => {
            let option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });

        countrySelectDiv.appendChild(countrySelect);

        let x = document.createElement('div');
        x.append(countrySelectDiv);
        cSD = x.innerHTML;

        console.log('cityList done');
        console.log(x);
    }

    arr.forEach(item => {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `item-${item}`;
        checkbox.className = 'option-item-checkboxes';
        checkbox.value = item;

        let label = document.createElement("label");
        label.textContent = item;
        label.setAttribute("for", checkbox.id);
        label.className = 'option-item-labels';

        let divContainer = document.createElement('div');
        divContainer.className = 'option-items flex-row';

        label.addEventListener('click', function () {
            checkbox.checked = !checkbox.checked;
        });

        divContainer.appendChild(checkbox);
        divContainer.appendChild(label);

        checkboxList.appendChild(divContainer);
    });

    let num = 0, str = '';

    for (i = 0; i < checkboxContainer.length; ++i) {
        checkboxContainer[i].append(checkboxList);
        if (str.length < checkboxContainer[i].innerHTML.length) {
            str = checkboxContainer[i].innerHTML;
            num = i;
        }
    };

    if (cSD != '') { str = cSD + str; }
    for (i = 0; i < checkboxContainer.length; ++i) {
        checkboxContainer[i].innerHTML = str;
    }

    console.log(num, str);

    num = 0;
    str = '';

    // if (window.innerWidth < 1080) {
    //     ManageListHeight();
    //     checkboxList.style.height = '100vh';
    //     console.log('small: hi');
    // } else {
    //     let contentHeight = window.innerHeight;
    //     let availableHeight = contentHeight - 372.5;

    //     checkboxContainer[1].style.height = `${availableHeight}px`;

    //     console.log('big: hi');
    // }

}

//freeze scrolling

function freeze() {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

    console.log(document.getElementsByTagName('body')[0].style.overflowY);
}

function unFreeze() {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';

    console.log(document.getElementsByTagName('body')[0].style.overflowY);
}



//menu image operations

document.getElementById('menu-img').addEventListener('click', function () {

    document.getElementsByClassName('menu-img-div')[0].style.marginLeft = `${6.14}vw`;

    let menuImg = document.getElementById('menu-img');
    let menuOn = document.getElementById('menu-on');
    let menuList = document.getElementById('menu-list');
    if (menuImg.src.includes('menu-circle-hovered.png')) {
        menuImg.src = '../jobHome/desktop-view/cross-circle.png';
        menuOn.style.display = 'block';
        menuList.style.display = 'block';

        setTimeout(function () {
            freeze()
        }, 1500);
    } else {
        menuImg.src = '../jobHome/desktop-view/menu-circle-hovered.png';
        menuOn.style.display = 'none';
        menuList.style.display = 'none';
    }
});

document.getElementById('menu-img').addEventListener('mouseover', function () {
    if (document.getElementById('menu-list').style.display !== 'block') {
        document.getElementById('menu-img').src = '../jobHome/desktop-view/menu-circle-hovered.png';
    }
});

document.getElementById('menu-img').addEventListener('mouseout', function () {
    if (document.getElementById('menu-list').style.display !== 'block') {
        document.getElementById('menu-img').src = '../jobHome/desktop-view/menu-circle.png';
    }

    unFreeze();
});

//manage the filters and options list height

function ManageListHeight() {
    let currentHeight = window.innerHeight;

    let optionItemsList = document.getElementsByClassName('option-items-list')[0];

    let filterItemsList = document.getElementsByClassName('filter-items-list')[0];

    let topH = document.getElementById('filter-types-top').offsetHeight;
    let bottomH = document.getElementById('filter-types-bottom').offsetHeight;

    let cut = topH + bottomH;

    let x = currentHeight - cut;

    optionItemsList.style.maxHeight = `${x - 41}px`;
    filterItemsList.style.maxHeight = `${x}px`;

    optionItemsList.style.height = `${x - 41} px`;
    filterItemsList.style.height = `${x} px`;

}



//manage filter box and its heights

function ManageFilterHeight() {
    let filtersBox = document.getElementById('filters-box');
    let currentHeight = window.innerHeight;
    let optionItemsList = document.getElementsByClassName('option-items-list')[0];
    let filterItemsList = document.getElementsByClassName('filter-items-list')[0];

    // Set filtersBox height
    filtersBox.style.height = `${currentHeight - 281} px`;

    // Adjust _ItemsList height if filtersBox height is less than 576
    if (filtersBox.offsetHeight < 576) {
        let diffFilter = 0;
        let newFilterHeight = filterItemsList.offsetHeight - diffFilter;
        if (newFilterHeight < 0) newFilterHeight = 0;
        filterItemsList.style.height = `${newFilterHeight} px`;

        let diffOption = 365;
        let newOptionHeight = optionItemsList.offsetHeight - diffOption;
        if (newOptionHeight < 0) newOptionHeight = 0;
        optionItemsList.style.height = `${newOptionHeight} px`;
    }

    optionItemsList.style.overflowY = 'auto';
    filterItemsList.style.overflowY = 'auto';
}



//filter logo image operations

// document.getElementById('search-filter-img').addEventListener('mouseover', function () {
//     if (document.getElementById('filters').style.display !== 'block') {
//         document.getElementById('search-filter-img').src = '../jobHome/desktop-view/filter-hovered.png';
//     }
// });

// document.getElementById('search-filter-img').addEventListener('mouseout', function () {
//     if (document.getElementById('filters').style.display !== 'block') {
//         document.getElementById('search-filter-img').src = '../jobHome/desktop-view/filter.png';
//     }
// });

// document.getElementById('search-filter-img').addEventListener('click', function (e) {
//     e.stopPropagation();

//     let filterOn = document.getElementById('filter-on');
//     let filters = document.getElementById('filters');

//     filterOn.style.display = 'flex';
//     filters.style.display = 'flex';

//     displayOptions(companyList);

//     let oIL = document.getElementsByClassName('option-items-list');
//     for (i = 0; i < oIL.length; ++i) {
//         oIL[i].style.height = `${document.getElementById('filters-box').offsetHeight - 90}px`;
//     }

//     ManageFilterHeight();

//     freeze();

// });

// Array.from(document.getElementsByClassName('filter-back-img-div')).forEach(element => {
//     element.addEventListener('click', function () {
//         let filterOn = document.getElementById('filter-on');
//         let filters = document.getElementById('filters');

//         filterOn.style.display = 'none';
//         filters.style.display = 'none';

//         unFreeze();
//     });
// });



if (window.innerWidth < 1080) {
    document.getElementById('filters-box-mini').style.display = 'block';
    document.getElementById('filters-box').style.display = 'none';
} else {
    document.getElementById('filters-box').style.display = 'flex';
    document.getElementById('filters-box-mini').style.display = 'none';
};

//out-click means exit

let out = false;

document.getElementById('filters-box').addEventListener('mouseenter', function () {
    out = true;
});

document.getElementById('filters-box').addEventListener('mouseleave', function () {
    out = false;
});

document.addEventListener('click', function (e) {
    if (!out) {
        if (!document.getElementById('filters-box').contains(e.target)) {
            let filterOn = document.getElementById('filter-on');
            let filters = document.getElementById('filters');

            filterOn.style.display = 'none';
            filters.style.display = 'none';

            unFreeze();
        }
    }
    out = true;
});

let out2 = true;

document.getElementById('menu-list').addEventListener('mouseenter', function () {
    out2 = true;
});

document.getElementById('menu-list').addEventListener('mouseleave', function () {
    out2 = false;
});

document.addEventListener('click', function (e) {
    if (!out2) {
        if (!document.getElementById('menu-list').contains(e.target)) {
            let filterOn = document.getElementById('menu-on');
            let filters = document.getElementById('menu-list');

            filterOn.style.display = 'none';
            filters.style.display = 'none';

            unFreeze();

            document.getElementById('menu-img').src = '../jobHome/desktop-view/menu-circle.png';
        }
    }
    out2 = true;
});

//color matter

Array.from(document.getElementsByClassName('filter-items')).forEach((item) => {
    item.addEventListener('mouseenter', function () {
        item.style.backgroundColor = '#ffffff';
        item.style.color = '#3663fc';
    });

    item.addEventListener('mouseleave', function () {
        if (item.id !== ID) {
            item.style.backgroundColor = 'transparent';
            item.style.color = '#000000';
        };
    });

    item.addEventListener('click', function () {
        if (item.id !== ID) {
            item.style.backgroundColor = 'transparent';
            item.style.color = '#000000';
        }
    })
});

let ID, ele;
function setElement(x) {

    Array.from(document.getElementsByClassName('filter-items')).forEach((item) => {
        if (item.id !== x) {
            item.style.backgroundColor = 'transparent';
            item.style.color = '#000000';
        }
    });

    ID = x;
    console.log(ID);
    ele = document.getElementById(ID);
    console.log(ele);
    ele.style.backgroundColor = '#ffffff';
    ele.style.color = '#3663fc';
}

window.setTimeout(function () {
    setElement('companyList');
}, 2000);

let rji = document.getElementsByClassName('recent-job-items');

if (rji.length > 0) {
    if (window.innerWidth >= 1081 && window.innerWidth <= 1920) {
        for (let i = 0; i < rji.length; i++) {
            rji[i].style.width = '480px';
        }
    }
}

let pji = document.getElementsByClassName('popular-job-items');

if (pji.length > 0) {
    if (window.innerWidth >= 1081 && window.innerWidth <= 1920) {
        for (let i = 0; i < pji.length; i++) {
            pji[i].style.width = '402px';
        }
    }
}

const container = document.querySelector('#popular-jobs-list');

let isDown = false;
let startX;
let scrollLeft;

// Mouse events
container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
    if (isDown);
    isDown = false;
    container.classList.remove('active');
    container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
    if (isDown);
    isDown = false;
    container.classList.remove('active');
    container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX); // Adjust scroll speed
    console.log('scrollLeft', scrollLeft, walk)
    container.scrollLeft = walk;
    console.log('Scrolling', container.scrollLeft);
});

// Touch events
container.addEventListener('touchstart', (e) => {
    console.log('Touch start');
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
    console.log('Touch end');
    isDown = false;
});

container.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    console.log('Touch move');
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX); // Adjust scroll speed
    container.scrollLeft = scrollLeft - walk;
    console.log('Scrolling', container.scrollLeft);
});

// if(window.innerWidth<1920 && window.innerWidth>1080