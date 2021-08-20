const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  
  const aboutMenu = document.querySelector('#about_page');
  const teamMenu = document.querySelector('#team_page');
  const coursesMenu = document.querySelector('#courses_page');
  const signupMenu = document.querySelector('#signup_button');
  
  let scrollPos = window.scrollY;
    // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 800 && scrollPos < 400) {
    aboutMenu.classList.remove('highlight');
    signupMenu.classList.remove('highlight');
    return;
    } else if (window.innerWidth > 800 && scrollPos < 1700) {
    aboutMenu.classList.add('highlight');
    teamMenu.classList.remove('highlight');
    return;
    } else if (window.innerWidth > 800 && scrollPos < 3700) {
    aboutMenu.classList.remove('highlight');
    teamMenu.classList.add('highlight');
    coursesMenu.classList.remove('highlight');
    return;
    } else if (window.innerWidth > 800 && scrollPos < 5600) {
    teamMenu.classList.remove('highlight');
    coursesMenu.classList.add('highlight');
    signupMenu.classList.remove('highlight');
    return;
    } else if (window.innerWidth > 800 && scrollPos < 6600) {
    coursesMenu.classList.remove('highlight');
    signupMenu.classList.add('highlight');
}
  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.nav-toggle-label');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);