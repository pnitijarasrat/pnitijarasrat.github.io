const farewellHeader = document.querySelector('#farewell-header')
const farewellUl = document.querySelector('#farewell-ul')
const plzvisit = document.querySelector('#plzvisit')

farewellHeader.className = 'farewellAnimation'
setInterval(() => {
    plzvisit.style.visibility = 'visible'
    plzvisit.className = 'farewellAnimation'
}, 500);
setInterval(() => {
    farewellUl.style.visibility = 'visible'
    farewellUl.className = 'farewellAnimation'
}, 1000);