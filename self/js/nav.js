"use strict";
const navBtn = document.querySelectorAll('.nav__text');
const main = document.querySelector('.main')

navBtn.forEach(element => {
    element.addEventListener('click', () => {
        navBtn.forEach(elements => {
            elements.classList.remove('active');
        });
        element.classList.add('active');
    });
});

navBtn[0].addEventListener('click', () => {
    main.classList.remove('active');
});

navBtn[1].addEventListener('click', () => {
    main.classList.add('active');
});

