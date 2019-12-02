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

let sectionHeadings = document.getElementsByTagName('h2');
let sections = document.querySelectorAll('[data-nav]')
let sectionPosition = [];
let firstItem;

/**
 * End Global Variables
*/


/**
 * Begin Main Functions
*/

// build the nav
function buildNav() {

    let navFragment = document.createDocumentFragment();

    for (let i=0 ; i < sectionHeadings.length; i++) {

        let newLiElement = document.createElement('li');
        newLiElement.classList.add('navbar__menu', 'li');

        let newAnchorElement = document.createElement('a');
        newAnchorElement.classList.add('navbar__menu', 'menu__link');
        
        //j is used to match the nav item to it's section using IDs - ID's in the section don't start with 0
        let j = i + 1;
        newAnchorElement.id = 'section' + j.toString();
        newAnchorElement.innerText = sectionHeadings[i].innerText;
        newAnchorElement.addEventListener('click', function() {
            scrollIntoView(i);
        });

        newLiElement.appendChild(newAnchorElement);
        navFragment.appendChild(newLiElement);
    };

    let navMenu = document.getElementById('navbar__list');
    navMenu.appendChild(navFragment);
}

// Get position of section elements
document.addEventListener('scroll', function() {
    for(section of sections) {
        var rect = section.getBoundingClientRect();
        let position = rect.top;

        // Convert negative numbers into positive for easier comparisons
        if(position < 0) {
            position = Math.abs(position);
        };

        addSectionsToArray(section.attributes[1].nodeValue, position);
    };

});

function addSectionsToArray(section, position){
    //Keep adding items to array until all have been added
    if (sectionPosition.length < sections.length) {
        sectionPosition.push([section, position]);
    } else {
        //Once all items have been added, start updating their position
        for (sectionFromArray of sectionPosition) {
            if(sectionFromArray[0] === section) {
                sectionFromArray[1] = position;
            };
        }

        // First element is by default set to active
        firstItem = sectionPosition[0];
        findElementClosestToTheTop();
    };

}

// Add class 'active' to section when near top of viewport
function findElementClosestToTheTop() {
    
    // First element is by default set to active
    let pos = 0;

    for(let k=0; k < sectionPosition.length; k++) {
        
        //Make a change only if the nearest section to the top changes
        if (sectionPosition[k][1] < firstItem[1]) {
            firstItem = sectionPosition[k];
            pos = k;
        }
    };

    addClass(pos);
}

function addClass(pos){
    // Find and remove class for previous closest element to the top
    let activeSection = document.getElementsByClassName('your-active-class');
    activeSection[0].classList.remove('your-active-class');

    // Add class to the new closest element to the top
    sections[pos].classList.add('your-active-class');
}

// Scroll to anchor ID using scrollTO event
function scrollIntoView(id){
    element = sectionHeadings[id];
    element.scrollIntoView({behavior: "smooth"});
}

// Build menu 
buildNav();