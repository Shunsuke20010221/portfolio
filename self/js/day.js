"use strict";
const today = document.querySelector('.data')
const todayMonth = document.querySelector('.month')
const todayDate = document.querySelector('.day');
const slider = document.querySelector('.slider');
const container = document.querySelector('.container');


const now = new Date();
let month = now.getMonth() + 1;
let date = now.getDate();

todayMonth.innerHTML = `${month}`;
todayDate.innerHTML = `${date}`;

const clock = () => {
    const now = new Date();
    let hour = now.getHours();
    if(hour >= 5 && hour <= 8){
        container.style.background = 'rgb(102,105,181';
        container.style.background = 'linear-gradient(180deg, rgba(102,105,181,1) 0%, rgba(255,190,131,1) 50%, rgba(255,255,255,1) 100%)';
    }else if(hour >= 9 && hour <= 15) {
        container.style.background = 'rgb(82,157,245)';
        container.style.background = 'linear-gradient(180deg, rgba(82,157,245,1) 0%, rgba(169,250,255,1) 64%, rgba(239,239,239,1) 100%)';
    }else if (hour >= 16 && hour <= 19){
        container.style.background = 'rgb(246,196,120)';
        container.style.background = 'linear-gradient(180deg, rgba(246,196,120,1) 0%, rgba(237,142,101,1) 37%, rgba(239,239,239,1) 100%)';
    }else {
        container.style.background = 'rgb(30,19,94)';
        container.style.background = 'linear-gradient(180deg, rgba(30,19,94,1) 0%, rgba(100,53,136,1) 50%, rgba(255,255,255,1) 100%)';
    }
    if (hour >= 12) {
        hour = hour-12;
    }
    let min = now.getMinutes();
    let time = (hour*60) + min;
    slider.value = time;   
    requestAnimationFrame(clock);            
}
clock();
