"use strict";

const nav = document.querySelector('.navigation__link-connect');
const newNav = document.querySelector('.navigation__link-nav');
const arrow = document.querySelector('.arrow');

nav.addEventListener('mouseover', function(e) {
    arrow.classList.add('rotate');
    newNav.classList.remove('show');

    newNav.addEventListener('mouseleave', function() {
        newNav.classList.add('show');
        arrow.classList.remove('rotate');
    });
});