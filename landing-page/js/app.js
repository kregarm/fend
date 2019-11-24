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
function buildNav() {

    let navItems = document.getElementsByTagName('h2');

    let navFragment = document.createDocumentFragment();

    for (navItem of navItems) {

        let newLiElement = document.createElement('li');
        newLiElement.classList.add('navbar__menu', 'li');

        let newAnchorElement = document.createElement('a');
        newAnchorElement.classList.add('navbar__menu', 'menu__link');

        newAnchorElement.innerText = navItem.innerText;
        
        newLiElement.appendChild(newAnchorElement);
        navFragment.appendChild(newLiElement);
    };

    let navMenu = document.getElementById('navbar__list');
    navMenu.appendChild(navFragment);

};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active


