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
let navItems = document.getElementsByTagName('h2');

/**
 * End Global Variables
*/



/**
 * Begin Main Functions
*/

// build the nav
function buildNav() {

    let navFragment = document.createDocumentFragment();

    for (let i=0 ; i < navItems.length; i++) {

        let newLiElement = document.createElement('li');
        newLiElement.classList.add('navbar__menu', 'li');

        let newAnchorElement = document.createElement('a');
        newAnchorElement.classList.add('navbar__menu', 'menu__link');
        newAnchorElement.id = i;
        newAnchorElement.innerText = navItems[i].innerText;
        newAnchorElement.addEventListener('click', function(event){
            scrollIntoView(i);
        });

        newLiElement.appendChild(newAnchorElement);
        navFragment.appendChild(newLiElement);
    };

    let navMenu = document.getElementById('navbar__list');
    navMenu.appendChild(navFragment);

};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollIntoView(id) {
    element = navItems[id];
    element.scrollIntoView();
};

// Build menu 
buildNav();

// Set sections as active


