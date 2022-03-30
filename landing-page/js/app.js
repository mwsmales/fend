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
 * Written by Michael Smales March 2022.  Uses CSS and HTML provided by Udacity.
 * 
 */ 

/**
 * Start Helper Functions
 * 
 */    
function addNavSections(sections) {
    // Add navbar sections to the HTML
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < sections.length; i++) {
        let new_li = document.createElement('li');
        new_li.innerText = sections[i].dataset.nav;
        new_li.className = 'menu__link';
        new_li.id = 'navlink' + (i+1);
        new_li.dataset.xref = sections[i].id
        fragment.appendChild(new_li);
    }        
    fragment.getElementById('navlink1').classList.add('your-active-navlink'); // set 1st section as active
    document.getElementById('navbar__list').append(fragment);
}


function addNavbarListeners (sections) {
// Add event listeners for clikcing navbar sections, which then calls scrollintoview or some other method
    for (let i = 0; i < sections.length; i++) {
        let navLink = document.getElementById('navlink' + (i+1));
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            let scrollTarget = document.getElementById(navLink.dataset.xref);
            scrollTarget.scrollIntoView({behavior:'smooth'});
        });         
    }        
}        


function addScrollListeners (sections) {
    // add event listener for scrolling, which calls function to check and update active section
    document.addEventListener('scroll', function() {
        let topSection = identifyTopSection(sections);
        let activeSection = document.querySelector('.your-active-class');
        if (topSection != activeSection) {
            removeActiveSection();
            addActiveSection(topSection);
        }    
    });    
}    


function removeActiveSection() {
    // removes the your-active-selection class from the section which currently has it
    let prevActiveSection = document.querySelector('.your-active-class');
    prevActiveSection.classList.remove('your-active-class');
    let prevActiveNavlink = document.querySelector('.your-active-navlink');
    prevActiveNavlink.classList.remove('your-active-navlink');
}


function addActiveSection(newActiveSection) {
    // function to add the 'your-active-section' class to an element
    console.log(`Active section switching to: ${newActiveSection.id}`);
    newActiveSection.classList.add('your-active-class');
}            


function identifyTopSection(sections) {
    // function to determine which section is closest to top of viewport
    let tolerance = 150; // tolerance for top of section being slightly off-screen
    let topSection;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top >= -tolerance) {
            topSection = sections[i];
            break;
        }            
    }            
    return topSection
}            


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */  
// get the main sections in the DOM
let sections = document.getElementsByTagName('section');

// add sections to the the navbar
addNavSections(sections);

/**
 * End Main Functions
 * Begin Events
 * 
*/ 

// add listeners to the navbar, triggered on clicking, which scroll to the relevant section 
addNavbarListeners(sections);

// add event listeners, triggered on scrolling, which upate the section being viewed 
addScrollListeners(sections);

// TODO:
// we may need to add a function to select the relevant navlink - we could add xrefs to the section, write a reverse lookup function which loops through the navbars, or use the ordering of the sections
