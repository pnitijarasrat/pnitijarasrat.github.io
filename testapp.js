const tutor = document.querySelector('#tutor')
const port = document.querySelector('#port')
const tutorFinder = document.querySelector('#tutorFinder')
const portfolio = document.querySelector('#puriwatPortfolio')

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




