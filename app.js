// body selector
const resumeBody = document.querySelector('.resume-body');
const homeBody = document.querySelector('.home-body');
const aboutmeBody = document.querySelector('.aboutme-body')
// content selector
const profileContainer = document.querySelector('#profile-container')
const homeContainer = document.querySelector('#headline')
const aboutmeContainer = document.querySelector('#aboutme-content')
// button selector
const homeDown = document.querySelector('#arrowDownButton');
const aboutmeUp = document.querySelector('#aboutmeArrowUp')
const aboutmeDown = document.querySelector('#aboutmeArrowDown')


function bindTest(el) {
    el.addEventListener('click', () => { console.log('clicked') })
}

// What happen in Home Page
homeContainer.className = 'headliner'

setInterval(() => {
    homeDown.style.visibility = 'visible'
}, 1500);

homeDown.addEventListener('click', () => {
    homeContainer.className = ''
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
    homeContainer.className = 'headliner'
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














