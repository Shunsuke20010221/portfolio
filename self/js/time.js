"use strict";
const slider = document.querySelector('.slider');
const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();

const current = () => {
    slider.value+=1;
    requestAnimationFrame(current);
}
current();
