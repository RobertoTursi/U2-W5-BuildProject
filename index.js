let headerHeight = document.querySelector(".start").offsetHeight - document.querySelector(".navigation").offsetHeight
let nav = document.querySelector(".navigation")
let button = document.getElementById("button")

window.onscroll = () => {
    if(window.scrollY > headerHeight) {
        nav.classList.add("whiteNav")
        button.classList.add("grennLi")
    } else {
        nav.classList.remove("whiteNav")
        button.classList.remove("greenLi")
    }
}

let lettera = document.querySelectorAll("svg g[stroke-linecap='butt']")

let letteraAnimation = setInterval(() => {
    let random = Math.floor(Math.random()* lettera.length)
    let letteraRandom = lettera[random]
    if(letteraRandom.getAttribute("opacity") == 1) {
        letteraRandom.style.opacity = 0
    } else {
        letteraRandom.style.opacity = 1
    }
}, 100)

