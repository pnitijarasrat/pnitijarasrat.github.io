// body selector
const resumeBody = document.querySelector('.resume-body');
const homeBody = document.querySelector('.home-body');
const aboutmeBody = document.querySelector('.aboutme-body')
const skillBackdrop = document.querySelector('#skill-backdrop')
const skillBody = document.querySelector('.skill-body')
const inventoryBody = document.querySelector('.inventory-body')
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
const html = document.querySelector('.html')
const css = document.querySelector('.css')
const js = document.querySelector('.js')
const react = document.querySelector('.react')
const python = document.querySelector('.python')
const php = document.querySelector('.php')
const sql = document.querySelector('.sql')
const tutor = document.querySelector('#tutor')
const port = document.querySelector('#port')
const tutorFinder = document.querySelector('#tutorFinder')
const portfolio = document.querySelector('#puriwatPortfolio')
// button selector
const homeDown = document.querySelector('#arrowDownButton');
const aboutmeUp = document.querySelector('#aboutmeArrowUp')
const aboutmeDown = document.querySelector('#aboutmeArrowDown')
const hideBackdrop = document.querySelector('#hideBtn')
const viewBackdrop = document.querySelector('#view-backdrop')
const skillUp = document.querySelector('#skillArrowUp')
const skillDown = document.querySelector('#skillArrowDown')
const invenUp = document.querySelector('#invenUp')
const invenDown = document.querySelector('#invenDown')





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

})

aboutmeDown.addEventListener('click', () => {
    skillBackdrop.scrollIntoView();
})

// What happen in skill page

skillUp.addEventListener('click', () => {
    aboutmeBody.scrollIntoView();
})

skillDown.addEventListener('click', () => {
    inventoryBody.scrollIntoView();
})

hideBackdrop.addEventListener('click', () => {
    skillBackdrop.style.zIndex = -1
    html.className += ' vexperience'
    css.className += ' vexperience'
    js.className += ' skillful'
    react.className += ' beginner'
    python.className += ' skillful'
    php.className += ' experience'
    sql.className += ' experience'
})

viewBackdrop.addEventListener('click', () => {
    skillBackdrop.style.zIndex = 1;
    html.className = 'level html'
    css.className = 'level css'
    js.className = 'level js'
    react.className = 'level react'
    python.className = 'level python'
    php.className = 'level php'
    sql.className = 'level sql'
})

// What happen in inventory page
tutor.addEventListener('mouseover', () => {
    tutorFinder.style.zIndex = 1
})

tutor.addEventListener('mouseleave', () => {
    tutorFinder.style.zIndex = -1
})

port.addEventListener('mouseover', () => {
    portfolio.style.zIndex = 1
})

port.addEventListener('mouseleave', () => {
    portfolio.style.zIndex = -1
})

invenUp.addEventListener('click', () => {
    skillBackdrop.scrollIntoView();
})

invenDown.addEventListener('click', () => {

})













