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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// get sections from the DOM
var sections = document.getElementsByTagName('section');
var navSections = []; // to store the navbar titles
for (var i = 0; i < sections.length; i++) {
    let SectionTitle = sections[i].dataset.nav;
    navSections.push(SectionTitle);
};

// Add navbar sections to the HTML
var new_ui
navList = document.getElementById('navbar__list');

for (var i = 0; i < navSections.length; i++) {
    new_ui = document.createElement('li');
    new_ui.innerText = navSections[i];
    new_ui.className = 'menu__link';
    navList.appendChild(new_ui);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


