// body selector
const resumeBody = document.querySelector('.resume-body');
const homeBody = document.querySelector('.home-body');
const aboutmeBody = document.querySelector('.aboutme-body')
// content selector
const profileContainer = document.querySelector('#profile-container')
const homeContainer = document.querySelector('#headline')
const aboutmeContainer = document.querySelector('#aboutme-content')
const homeP1 = document.querySelector('.home-p1')
const homeP2 = document.querySelector('.home-p2')
const homeIntro = document.querySelector('#intro')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
// button selector
const homeDown = document.querySelector('#arrowDownButton');
const aboutmeUp = document.querySelector('#aboutmeArrowUp')
const aboutmeDown = document.querySelector('#aboutmeArrowDown')


function bindTest(el) {
    el.addEventListener('click', () => { console.log('clicked') })
}

// What happen in Home Page

homeIntro.className = 'introAnimation'
setInterval(() => {
    homeP1.style.visibility = 'visible'
}, 3500);
setInterval(() => {
    homeP2.style.visibility = 'visible'
}, 5000);

setInterval(() => {
    homeDown.style.visibility = 'visible'
}, 6500);

homeDown.addEventListener('click', () => {
    aboutmeBody.scrollIntoView();
    setInterval(() => {
        aboutmeUp.style.visibility = 'visible'
        aboutmeDown.style.visibility = 'visible'
    }, 18000);
    setInterval(() => {
        p1.style.opacity = 1
        p1.className = 'aboutmeAnimation'
    }, 1000);
    setInterval(() => {
        p2.style.opacity = 1
        p2.className = 'aboutmeAnimation'
    }, 3000);
    setInterval(() => {
        p3.style.opacity = 1
        p3.className = 'aboutmeAnimation'
    }, 5000);
    setInterval(() => {
        p4.style.opacity = 1
        p4.className = 'aboutmeAnimation'
    }, 7000);
    setInterval(() => {
        p5.style.opacity = 1
        p5.className = 'aboutmeAnimation'
    }, 12000);
    setInterval(() => {
        p6.style.opacity = 1
        p6.className = 'aboutmeAnimation'
    }, 14000);
})

// What happen in about me page

aboutmeUp.addEventListener('click', () => {
    homeBody.scrollIntoView();
    homeIntro.className = 'introAnimation'
    setInterval(() => {
        homeP.style.visibility = 'visible'
    }, 4000);
    aboutmeUp.style.visibility = 'hidden'
    aboutmeDown.style.visibility = 'hidden'
})
















