"use strict";

document.addEventListener('DOMContentLoaded', () => {
const filterBtn = document.querySelector('.toggleButton'),
    menu = document.querySelector('.tablet'),
    closeElem = document.querySelector('.close'),
    overlay = document.querySelector('.overlay'),
    mobBtn = document.querySelector('.phone-btn'),
    mobBtn2 = document.querySelector('.white-btn'),
    tabBtn = document.querySelector('.tablet-btn'),
    home = document.querySelector('.main');

filterBtn.addEventListener('click', () => {
    menu.classList.add('active');
    home.style.display = 'none';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    home.style.display = '';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    home.style.display = '';
});

mobBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    home.style.display = '';
});

mobBtn2.addEventListener('click', () => {
    menu.classList.remove('active');
    home.style.display = '';
});

tabBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    home.style.display = '';
});

overlay.addEventListener('touchstart', () => {
    menu.classList.remove('active');
    home.style.display = '';
});
});