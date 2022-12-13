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
    }, 2000);
    aboutmeContainer.className = 'loadFromLeft'
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
    aboutmeContainer.className = ''
})

// aboutmeDown.addEventListener('click', () => {
//     resumeBody.scrollIntoView();
//     homeContainer.className = 'headliner'
//     aboutmeUp.style.visibility = 'hidden'
//     aboutmeDown.style.visibility = 'hidden'
//     aboutmeContainer.className = ''
// })














