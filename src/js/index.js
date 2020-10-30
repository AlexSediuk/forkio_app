
// ! HAMBURGER
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const textParallax = document.querySelector('.parrallax-table');
const links = document.querySelectorAll('.nav-links li');
const lines = document.querySelectorAll('.line');
hamburger.addEventListener('click', () => {
    textParallax.classList.toggle('open');
    navLinks.classList.toggle('open');
    links.forEach(item => {
        item.classList.toggle('fade');
    });
    lines[0].classList.toggle('top');
    lines[1].classList.toggle('medium');
    lines[2].classList.toggle('bot');
});
// ! FLUID IMG
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');
previews.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        original.src = item.src;
        imgText.textContent = item.alt;
    });
});
modal.addEventListener('click', ({ target }) => {
    if (target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
// ! TABS
const tabs = document.querySelector('.tabs');
const content = document.querySelectorAll('.img-container');
let counter = 1;
let second = 0;
tabs.addEventListener('click', getTabs.bind(this));
function getTabs({ target }) {
    if (target.classList.contains('tabs')) {
        return;
    }
    Array.from(tabs.children).forEach(item => item.classList.remove('active'));
    target.classList.add('active');
    content.forEach((elem, index) => {
        if (target.dataset.title === elem.dataset.content) {
            changeAxis(elem, index, target, getSizeOffset());
        } else if (target.dataset.title === 'all') {
            elem.classList.remove('close');
            elem.classList.add('open');
            elem.style.transform = 'translate(0px , 0px)';
        } else {
            elem.classList.add('close');
            elem.classList.remove('open');
        }
    });
}
function changeAxis(img, index, target, callback) {
    img.classList.remove('close');
    img.classList.add('open');
    if (target.dataset.title === 'first') {
        counter > 3 ? (counter = 1) : null;
        if (index === 0) return;
        let top = callback[counter].top - img.offsetTop;
        let left = callback[counter].left - img.offsetLeft;
        img.style.transform = `translate(${left}px, ${top}px)`;
        counter++;
    } else {
        second > 3 ? (second = 0) : null;
        let top = img.offsetTop - callback[second].top;
        let left = img.offsetLeft - callback[second].left;
        let operation = second === 1 ? '' : '-';
        img.style.transform = `translate(${operation}${Math.abs(left)}px, -${top}px)`;
        second++;
    }
}
function getSizeOffset() {
    return Array.from(content).map((item, i) => ({
        id: i,
        top: item.offsetTop,
        left: item.offsetLeft,
    }));
}
// ! ANIMATION TEXT
const typedTextSpan = document.querySelector('.typing');
const textArray = ['hard', 'fun', 'a journey', 'LIFE'];
const typingDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        document.querySelector('.typing').textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, 500);
    }
}
function erase() {
    if (charIndex > 0) {
        document.querySelector('.typing').textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    if (textArray.length) setTimeout(type, 500);
});
// ! APPEAR TEXT
function scrollAppear() {
    let introText = document.querySelector('.scroll-text');
    let introPos = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    introText.classList[introPos < screenPosition ? 'add' : 'remove']('appear');
}
window.addEventListener('scroll', scrollAppear);
// ! SCROLL PARRALLAX
function scrollParallax() {
    if (window.pageYOffset > window.innerHeight) {
        return;
    }
    const target = document.querySelectorAll('.table-scroll-item');
    const scaleItem = document.querySelector('.table-scale-item');
    let posScale = window.pageYOffset * scaleItem.dataset.rate;
    scaleItem.style.transform = `perspective(200px) translateZ(${-posScale}px)`;
    target.forEach(item => {
        let pos = window.pageYOffset * item.dataset.rate;
        if (item.dataset.direction === 'vertical') {
            item.style.transform = `translate3d(0px, ${pos}px, 0px)`;
        } else {
            let posX = window.pageYOffset * item.dataset.ratex;
            let posY = window.pageYOffset * item.dataset.ratey;
            item.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    });
}
// if (window.pageYOffset > window.innerHeight) {
// 	window.removeEventListener('scroll', scrollParallax);
// } else {
window.addEventListener('scroll', scrollParallax);
// }
// ! SIMPLE PARALLAX
// function parallax(elem, distance, speed) {
// 	const item = document.querySelector(elem);
// 	item.style.transform = `translateY(${distance * speed}px)`;
// }
// window.addEventListener('scroll', () => {
// 	parallax('.cool', window.scrollY, -1);
// });

