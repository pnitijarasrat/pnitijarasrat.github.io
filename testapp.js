const homeP = document.querySelector('.home-p')

function bindTest(el) {
    el.addEventListener('click', () => { console.log('clicked') })
}

setInterval(() => {
    homeP.style.visibility = 'visible'
}, 4000);

