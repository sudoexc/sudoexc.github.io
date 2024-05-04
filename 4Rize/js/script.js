"use strict";

document.addEventListener('DOMContentLoaded', () => {
const filterBtn = document.querySelector('.toggleButton'),
    menu = document.querySelector('.tablet'),
    closeElem = document.querySelector('.close'),
    overlay = document.querySelector('.overlay');

filterBtn.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('touchstart', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
});
});