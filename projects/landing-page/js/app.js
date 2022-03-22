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
// define a function which removes the your-active-selection class from the element which currently has it
function removeActiveSection() {
    // removes the your-active-selection class from the section which currently has it
    prevActiveSection = document.querySelector('.your-active-class');
    prevActiveSection.classList.remove('your-active-class');
    document.querySelector('.your-active-class');
}

// TODO: define a function to change the active section to the id specified


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


