/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function getSectionNames() {
    // get a list of sections from the DOM
    let sections = document.getElementsByTagName('section'); //store html collection
    let navSections = []; // store the navbar titles
    for (let i = 0; i < sections.length; i++) {
        let SectionTitle = sections[i].dataset.nav;
        navSections.push(SectionTitle);
    };
    return navSections;
};


function addNavSections(navSections) {
    // Add navbar sections to the HTML
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < navSections.length; i++) {
        let new_li = document.createElement('li');
        new_li.innerText = navSections[i];
        new_li.className = 'menu__link';
        new_li.id = 'navlink' + i;
        fragment.appendChild(new_li);
    }
    document.getElementById('navbar__list').append(fragment);
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navSections = getSectionNames();
addNavSections(navSections);

// Add class 'active' to section when near top of viewport
function removeActiveSection() {
    // removes the your-active-selection class from the section which currently has it
    let prevActiveSection = document.querySelector('.your-active-class');
    prevActiveSection.classList.remove('your-active-class');
    document.querySelector('.your-active-class');
}


function addActiveSection(sectionId) {
    // function to add the 'your-active-section' class to the element with id=sectionId
    // sectionId should be provided as string in the format e.g. "#section1"
    let newActiveSection = document.querySelector(sectionId);
    newActiveSection.classList.add('your-active-class');
}

function updateActivecSection(newSectionId) {
    // function to remove the old 'your-active-section' class and apply it to the specified element
    // sectionId should be provided as string in the format e.g. "#section1"
    removeActiveSection();
    addActiveSection(newSectionId)
}

function identifyTopSection() {
    /* TODO: function to determine which section is closest to top of viewport
     * get dimension of top of viewport
     * get dimension of top of each section
     * loop through the sections and stop at the first where the top of the section is below the top of the viewport
    */
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// TODO: add event listener for scrolling, which calls function to check and update active section

// TODO: add event listener for clikcing navbar sections, which then calls scrollintoview or some other method
for (let i = 0; i < navSections.length; i++) {
    console.log('adding event listener ' + i);
    let navLink = document.getElementById('navlink' + i);
    navLink.addEventListener('click', function() {
        console.log('scrolling to section ' + (i+1));
    });
}
